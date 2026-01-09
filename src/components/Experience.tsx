import { motion } from 'framer-motion';
import { BookOpen, Award, Eye } from 'lucide-react';
import { useState } from 'react';
import PDFModal from './PDFModal';

const certifications = [
    {
        type: "degree",
        year: "2022",
        title: "Técnico Analista Programador",
        institution: "Instituto Profesional",
        file: "/CERTIFICADOSDETITULOS/CT TÉCNICO ANALISTA Jaime Quintul.pdf",
        description: "Título técnico de nivel superior en análisis y programación."
    },
    {
        type: "degree",
        year: "2024",
        title: "Ingeniero en Informática",
        institution: "Universidad / Instituto",
        file: "/CERTIFICADOSDETITULOS/CT ING INFORMATICA Jaime Quintul.pdf",
        description: "Título profesional de Ingeniería en Informática."
    },
    {
        type: "course",
        year: "2025",
        title: "IT Customer Support Basics",
        institution: "Cisco Networking Academy",
        file: "/CURSOS/ITCustomerSupportBasicsv120251110-31-i0qnx0.pdf",
        description: "Fundamentos de atención y soporte al cliente en entornos TI."
    },
    {
        type: "course",
        year: "2025",
        title: "Operating Systems Support",
        institution: "Cisco Networking Academy",
        file: "/CURSOS/OperatingSystemsSupportv120251111-31-wetw42.pdf",
        description: "Gestión y soporte avanzado de sistemas operativos Windows y Linux."
    },
    {
        type: "course",
        year: "2025",
        title: "Security and Connectivity Support",
        institution: "Cisco Networking Academy",
        file: "/CURSOS/SecurityandConnectivitySupportv120251112-28-4c411c.pdf",
        description: "Fundamentos de seguridad informática y conectividad de redes."
    },
    {
        type: "course",
        year: "2025",
        title: "Hardware and Upgrade Support",
        institution: "Cisco Networking Academy",
        file: "/CURSOS/HardwareandUpgradeSupportv120251113-31-pnjo1i.pdf",
        description: "Mantenimiento, actualización y resolución de problemas de hardware."
    }
];

const Experience = () => {
    const [selectedCert, setSelectedCert] = useState<{ url: string, title: string } | null>(null);

    return (
        <section id="experience" className="py-10">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="flex items-center mb-16">
                    <h2 className="text-3xl font-bold flex items-center text-primary">
                        <span className="font-mono text-accent text-xl mr-4">03.</span> Formación & Certificados
                    </h2>
                    <div className="h-px bg-white/10 flex-grow ml-8 max-w-xs"></div>
                </div>

                <div className="space-y-12 border-l border-white/10 ml-3 md:ml-0 md:pl-0">
                    {certifications.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Timeline Dot */}
                            <span className={`absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full border shadow-lg z-20 ${item.type === 'degree' ? 'bg-accent border-accent' : 'bg-card border-accent'}`}></span>

                            <div className="bg-card backdrop-blur-md p-6 rounded-lg border border-white/5 hover:border-accent transition-colors shadow-lg">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                                        {item.title}
                                    </h3>
                                    <span className="font-mono text-sm text-accent">{item.year}</span>
                                </div>

                                <h4 className="text-secondary font-mono text-sm mb-4 flex items-center gap-2">
                                    {item.type === 'degree' ? <Award size={16} /> : <BookOpen size={16} />}
                                    {item.institution}
                                </h4>

                                <p className="text-secondary text-sm leading-relaxed max-w-2xl mb-4">
                                    {item.description}
                                </p>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setSelectedCert({ url: item.file, title: item.title })}
                                        className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-white hover:bg-accent border border-accent/20 hover:border-accent px-3 py-1.5 rounded transition-all cursor-pointer"
                                    >
                                        <Eye size={14} />
                                        Ver Certificado
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <PDFModal
                isOpen={!!selectedCert}
                onClose={() => setSelectedCert(null)}
                fileUrl={selectedCert?.url || ""}
                title={selectedCert?.title || ""}
            />
        </section>
    );
};

export default Experience;
