import { motion } from 'framer-motion';
import { ShoppingBag, CheckCircle, Smartphone, Monitor, Database } from 'lucide-react';
import Background from '../components/Background';

const products = [
    {
        id: "1",
        title: "Template React Profesional",
        description: "Plantilla lista para usar con Dashboard, Autenticación y modo oscuro preconfigurado.",
        price: "15.00",
        features: ["React + Vite", "Tailwind CSS", "Dashboard UI", "Responsive Design"],
        icon: Monitor
    },
    {
        id: "2",
        title: "Sistema de Ventas Full",
        description: "Código fuente completo para gestión de inventario, ventas y proveedores.",
        price: "35.00",
        features: ["Base de Datos SQL", "API REST / Node.js", "Panel Admin", "Control de Stock"],
        icon: Database
    },
    {
        id: "3",
        title: "Landing Page Corporativa",
        description: "Diseño premium para empresas de tecnología o servicios con animaciones suaves.",
        price: "10.00",
        features: ["SEO Optimizado", "Ultra Rápida", "Animaciones Framer", "Formulario Contacto"],
        icon: Smartphone
    }
];

const Shop = () => {
    return (
        <>
            <Background />
            <section className="min-h-screen pt-24 pb-20 relative z-10">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block p-3 bg-accent/10 rounded-full mb-4"
                        >
                            <ShoppingBag className="text-accent w-8 h-8" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-primary mb-4"
                        >
                            Tienda de Proyectos
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-secondary text-lg"
                        >
                            Simplifica tu desarrollo con mis plantillas y sistemas listos para usar.
                            Código limpio, moderno y escalable.
                        </motion.p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => {
                            const Icon = product.icon;
                            return (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="bg-card p-8 rounded-2xl border border-white/5 hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-300 shadow-xl flex flex-col group"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-dark-800 rounded-xl group-hover:bg-accent/20 transition-colors">
                                            <Icon className="text-accent w-8 h-8" />
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-sm text-secondary mb-1">Precio</span>
                                            <span className="text-2xl font-bold text-white font-mono tracking-tight">
                                                ${product.price} <span className="text-xs font-normal opacity-50">USD</span>
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-primary mb-3">{product.title}</h3>
                                    <p className="text-secondary text-sm mb-6 flex-grow leading-relaxed opacity-90">
                                        {product.description}
                                    </p>

                                    <div className="my-6 h-px bg-white/5" />

                                    <ul className="mb-8 space-y-3">
                                        {product.features.map(feature => (
                                            <li key={feature} className="flex items-center text-sm text-secondary/80">
                                                <CheckCircle size={16} className="text-accent mr-3 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        className="w-full py-4 bg-transparent border border-accent text-accent font-bold rounded-xl hover:bg-accent hover:text-white transition-all shadow-[0_0_15px_rgba(var(--accent-rgb),0)] hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] active:scale-95 flex items-center justify-center gap-2"
                                        onClick={() => alert("La integración con PayPal estará disponible pronto.")}
                                    >
                                        <ShoppingBag size={20} />
                                        Comprar Ahora
                                    </button>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
