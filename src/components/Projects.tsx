import { Folder, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Sistema de Gestión",
        description: "Plataforma web para administración de recursos empresariales. Incluye dashboard en tiempo real y reportes.",
        tags: ["React", "TypeScript", "Tailwind", "Node.js"],
        github: "https://github.com/Jaime-IgnacioDev?tab=repositories",
        demo: "https://github.com/Jaime-IgnacioDev"
    },
    {
        title: "Portfolio V1",
        description: "Sitio web personal con diseño Cyberpunk y altas prestaciones de rendimiento.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Jaime-IgnacioDev?tab=repositories",
        demo: "https://jaime-ignaciodev.github.io/Portafolio-JaimeQuintul/"
    },
    {
        title: "E-Commerce Tech",
        description: "Tienda online completa con carrito de compras y pasarela de pagos integrada.",
        tags: ["Next.js", "Stripe", "PostgreSQL"],
        github: "https://github.com/Jaime-IgnacioDev?tab=repositories",
        demo: "https://github.com/Jaime-IgnacioDev"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-10">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="flex items-center mb-16">
                    <h2 className="text-3xl font-bold flex items-center text-primary">
                        <span className="font-mono text-accent text-xl mr-4">02.</span> Proyectos
                    </h2>
                    <div className="h-px bg-white/10 flex-grow ml-8 max-w-xs"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card p-8 rounded-lg border border-white/5 hover:-translate-y-2 transition-transform duration-300 group shadow-lg"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <Folder className="text-accent" size={40} />
                                <div className="flex gap-4">
                                    <a href={project.github} className="text-secondary hover:text-accent"><Github size={20} /></a>
                                    <a href={project.demo} className="text-secondary hover:text-accent"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-secondary text-sm mb-8 leading-relaxed">
                                {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-3 mt-auto">
                                {project.tags.map(tag => (
                                    <li key={tag} className="text-xs font-mono text-accent">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
