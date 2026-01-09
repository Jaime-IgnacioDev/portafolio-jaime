import Layout from './components/Layout';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Background from './components/Background';
import Typewriter from './components/Typewriter';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Eye, X } from 'lucide-react';
import { useState } from 'react';



function App() {
    const [showCVPreview, setShowCVPreview] = useState(false);
    const cvPath = "/CV2026/JAIME_QUINTUL_CV2026.pdf";

    return (
        <Layout>
            <Background />
            {/* Hero Section */}
            <section className="min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                    >
                        <div className="font-mono text-accent mb-4 h-6">
                            <Typewriter text="Hola, soy" speed={50} startDelay={500} showCursor={false} />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 tracking-tight min-h-[4rem] md:min-h-[5rem]">
                            <Typewriter text="Jaime Ignacio." speed={70} startDelay={1200} showCursor={false} />
                        </h1>
                        <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-8 tracking-tight min-h-[3rem] md:min-h-[4rem]">
                            <Typewriter text="Ingeniero en Informática." speed={60} startDelay={2500} />
                        </h2>
                        <p className="text-xl text-secondary max-w-xl mb-12 leading-relaxed">
                            Profesional especializado en el desarrollo de soluciones tecnológicas y soporte informático avanzado.
                            Transformo problemas complejos en sistemas eficientes y seguros.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setShowCVPreview(true)}
                                className="px-8 py-4 bg-transparent border-2 border-accent text-accent font-bold font-mono rounded hover:bg-opacity-10 hover:bg-blue-500 transition-all shadow-lg flex items-center gap-2"
                            >
                                <Eye size={20} />
                                Ver CV
                            </button>

                            <a
                                href={cvPath}
                                download="Jaime_Ignacio_CV.pdf"
                                className="px-8 py-4 bg-transparent border border-accent text-accent font-mono rounded hover:bg-opacity-10 hover:bg-blue-500 transition-all flex items-center gap-2"
                            >
                                <Download size={20} />
                                Descargar
                            </a>
                        </div>

                        <div className="flex gap-6 mt-12">
                            <a href="https://github.com/Jaime-IgnacioDev" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors transform hover:scale-110"><Github size={28} /></a>
                            <a href="https://www.linkedin.com/in/jaime-quintul/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors transform hover:scale-110"><Linkedin size={28} /></a>
                            <a href="mailto:jaime@example.com" className="text-secondary hover:text-accent transition-colors transform hover:scale-110"><Mail size={28} /></a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-10 container mx-auto px-6 max-w-4xl relative z-10">
                <h2 className="text-3xl font-bold mb-8 flex items-center text-primary">
                    <span className="font-mono text-accent text-xl mr-4">01.</span> Sobre Mí
                </h2>
                <div className="bg-card backdrop-blur-sm p-8 rounded-lg text-secondary leading-relaxed shadow-xl">
                    <p className="mb-6">
                        Como <strong className="text-accent">Ingeniero en Informática</strong> y <strong className="text-accent">Técnico Analista Programador</strong>,
                        cuento con una formación sólida que abarca desde el desarrollo de software hasta la administración de sistemas.
                    </p>
                    <p className="mb-6">
                        Mi experiencia no se limita solo al código; también poseo habilidades profundas en <strong>Hardware, Redes y Soporte TI</strong>,
                        lo que me permite tener una visión integral de las soluciones tecnológicas.
                    </p>

                    <h3 className="font-bold text-primary mb-6">Stack Tecnológico & Habilidades:</h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                        {[
                            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                            { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
                            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                            { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                            { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
                            { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
                            // Using simple-icons for reliable Cisco logo
                            { name: 'Cisco', icon: 'https://cdn.simpleicons.org/cisco/ffffff' }
                        ].map((tech) => (
                            <div key={tech.name} className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg p-2 border border-white/5 group-hover:border-accent group-hover:bg-white/10 transition-all">
                                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                                </div>
                                <span className="text-xs font-mono text-secondary group-hover:text-accent transition-colors">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Projects />
            <Experience />

            {/* Contact Section */}
            <section id="contact" className="py-24 container mx-auto px-6 relative z-10">
                <div className="max-w-2xl mx-auto bg-card backdrop-blur-md p-8 md:p-12 rounded-lg hover:border-accent transition-colors text-center shadow-lg">
                    <p className="font-mono text-accent mb-4">04. ¿Qué sigue?</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contáctame</h2>
                    <p className="text-secondary mb-8 leading-relaxed">
                        Actualmente estoy disponible para nuevas oportunidades laborales y proyectos.
                        Si tienes alguna consulta o propuesta, no dudes en escribirme directamente al WhatsApp.
                    </p>
                    <a
                        href="https://wa.me/56929094187"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-accent text-accent font-mono rounded hover:bg-opacity-10 transition-all shadow-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        Contactar por WhatsApp
                    </a>
                </div>
            </section>

            {/* CV Preview Modal */}
            <AnimatePresence>
                {showCVPreview && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    >
                        <div className="bg-dark-800 w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden relative border border-white/10 flex flex-col">
                            <div className="p-4 flex justify-between items-center bg-dark-900 border-b border-white/10">
                                <h3 className="text-xl font-bold text-white">Previsualización de CV</h3>
                                <button
                                    onClick={() => setShowCVPreview(false)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="flex-grow bg-gray-900">
                                <iframe
                                    src={cvPath}
                                    className="w-full h-full"
                                    title="CV Preview"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/56929094187"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:bg-[#20bd5a] transition-all hover:scale-110 flex items-center justify-center"
                title="Contáctame por WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
            </a>

        </Layout>
    )
}

export default App
