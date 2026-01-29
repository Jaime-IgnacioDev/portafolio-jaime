import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    // Navigation Items
    // For anchors on the same page (Home), we use /#id. For Venta, we use /venta.
    // Ideally, we check if we are on Home to smooth scroll, otherwise navigate to /#id

    // Simplification: We will use full paths for ease.
    const navItems = [
        { label: 'Sobre Mí', path: '/#about', type: 'anchor' },
        { label: 'Proyectos', path: '/#projects', type: 'anchor' },
        { label: 'Venta', path: '/venta', type: 'route' },
        { label: 'Formación', path: '/#experience', type: 'anchor' },
        { label: 'Contacto', path: '/#contact', type: 'anchor' }
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { path: string, type: string }) => {
        if (item.type === 'anchor') {
            // If we are on Home page ('/'), allow default anchor behavior (or smooth scroll manual)
            // If we are on Shop page ('/venta'), the Link to="/#id" will naturally navigate to home and scroll.
            if (location.pathname === '/' && item.path.startsWith('/#')) {
                // Optional: implement smooth scroll if desired, but default anchor works if hash matches id
                // However, React Router HashLink is usually better. 
                // For now, let's trust simple anchor tags for ID jumping.
                // Removing the leading slash for local jump if already on home
                const id = item.path.replace('/#', '');
                const element = document.getElementById(id);
                if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
        closeMenu();
    };


    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-100 selection:bg-cyan-400 selection:text-dark-900 transition-colors duration-300">
            {/* Header */}
            <header
                className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 transition-colors duration-300"
                style={{ backgroundColor: 'rgba(var(--bg-primary-rgb), 0.8)' }}
            >
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold font-mono group z-50 relative text-primary">
                        &lt;Jaime<span className="text-accent group-hover:text-secondary transition-colors">Dev</span>/&gt;
                    </Link>

                    <div className="flex items-center gap-6">
                        {/* Desktop Navigation */}
                        <nav className="hidden md:block">
                            <ul className="flex space-x-8 text-sm font-mono">
                                {navItems.map((item, index) => (
                                    <li key={item.label}>
                                        {item.type === 'route' ? (
                                            <Link
                                                to={item.path}
                                                className={`transition-colors ${location.pathname === item.path ? 'text-accent font-bold' : 'text-secondary hover:text-accent'}`}
                                            >
                                                <span className="text-accent mr-1">0{index + 1}.</span>
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <a
                                                href={item.path}
                                                onClick={(e) => handleNavClick(e, item)}
                                                className="text-secondary hover:text-accent transition-colors cursor-pointer"
                                            >
                                                <span className="text-accent mr-1">0{index + 1}.</span>
                                                {item.label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Theme Switcher */}
                        <div className="hidden md:block">
                            <ThemeSwitcher />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-primary hover:text-accent z-50 relative p-2"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Content */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-dark-900 md:hidden flex flex-col items-center justify-center"
                    >
                        <nav className="flex flex-col space-y-8 text-center items-center">
                            <div className="mb-4">
                                <ThemeSwitcher />
                            </div>
                            {navItems.map((item, index) => (
                                item.type === 'route' ? (
                                    <Link
                                        key={item.label}
                                        to={item.path}
                                        onClick={closeMenu}
                                        className={`text-2xl font-bold transition-colors flex flex-col items-center gap-2 ${location.pathname === item.path ? 'text-accent' : 'text-secondary hover:text-accent'}`}
                                    >
                                        <span className="text-accent font-mono text-sm">0{index + 1}.</span>
                                        {item.label}
                                    </Link>
                                ) : (
                                    <a
                                        key={item.label}
                                        href={item.path}
                                        onClick={(e) => handleNavClick(e, item)}
                                        className="text-2xl font-bold text-secondary hover:text-accent transition-colors flex flex-col items-center gap-2"
                                    >
                                        <span className="text-accent font-mono text-sm">0{index + 1}.</span>
                                        {item.label}
                                    </a>
                                )
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-grow pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm font-mono">
                <p>Designed & Built by Jaime Ignacio</p>
            </footer>
        </div>
    );
};

export default Layout;
