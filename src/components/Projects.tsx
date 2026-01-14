import { Folder, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Finance Personal",
        description: "Sistema de gestión financiera personal. Gestiona ingresos, gastos y presupuestos con un dashboard intuitivo.",
        tags: ["React", "Finance", "Dashboard"],
        github: "https://finance-personal.somtec.cl/login", // User provided these as the main links, using for both or just demo
        demo: "https://finance-personal.somtec.cl/login",
        image: "/projects/finance.png"
    },
    {
        title: "E-Commerce Tech",
        description: "Plataforma de comercio electrónico moderna. Gestión de productos, carrito de compras y autenticación segura.",
        tags: ["Next.js", "E-commerce", "Stripe"],
        github: "https://ecommerce-test-green-eight.vercel.app/es/auth/login",
        demo: "https://ecommerce-test-green-eight.vercel.app/es/auth/login",
        image: "/projects/ecommerce.png"
    },
    {
        title: "Somtec Corporativo",
        description: "Sitio web corporativo para servicios tecnológicos. Diseño profesional y presentación de servicios IT.",
        tags: ["Web", "Corporate", "Technology"],
        github: "https://somtec.cl/",
        demo: "https://somtec.cl/",
        image: "/projects/somtec.png"
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
                    {/* Changed grid back to 3 columns for 3 items */}
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card rounded-xl border border-white/5 hover:-translate-y-2 transition-transform duration-300 group shadow-lg overflow-hidden flex flex-col h-full"
                        >
                            {/* Project Image Preview */}
                            <div className="h-48 overflow-hidden relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                     <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-800 text-white rounded-full hover:bg-accent transition-colors">
                                        <Github size={24} />
                                     </a>
                                     <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-800 text-white rounded-full hover:bg-accent transition-colors">
                                        <ExternalLink size={24} />
                                     </a>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <Folder className="text-accent opacity-50" size={24} />
                                </div>

                                <p className="text-secondary text-sm mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <ul className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                                    {project.tags.map(tag => (
                                        <li key={tag} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
