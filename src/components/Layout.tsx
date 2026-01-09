import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    const navItems = [
        { label: 'Sobre Mí', href: '#about' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Formación', href: '#experience' },
        { label: 'Contacto', href: '#contact' }
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-100 selection:bg-cyan-400 selection:text-dark-900 transition-colors duration-300">
            {/* Header */}
            <header
                className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 transition-colors duration-300"
                style={{ backgroundColor: 'rgba(var(--bg-primary-rgb), 0.8)' }}
            >
                {/* Note: I'm keeping bg-dark-900 on header but adding style for variable usage if needed, 
                 actually let's use the variable-mapped background for header too 
             */}
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold font-mono group z-50 relative text-primary">
                        &lt;Jaime<span className="text-accent group-hover:text-secondary transition-colors">Dev</span>/&gt;
                    </a>

                    <div className="flex items-center gap-6">
                        {/* Desktop Navigation */}
                        <nav className="hidden md:block">
                            <ul className="flex space-x-8 text-sm font-mono">
                                {navItems.map((item, index) => (
                                    <li key={item.label}>
                                        <a href={item.href} className="text-secondary hover:text-accent transition-colors">
                                            <span className="text-accent mr-1">0{index + 1}.</span>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Theme Switcher - Visible on Desktop, Hidden on Mobile (moved to menu) or Always visible?
                            Let's keep it visible always for easy access
                        */}
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
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-2xl font-bold text-secondary hover:text-accent transition-colors flex flex-col items-center gap-2"
                                    onClick={closeMenu}
                                >
                                    <span className="text-accent font-mono text-sm">0{index + 1}.</span>
                                    {item.label}
                                </a>
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
