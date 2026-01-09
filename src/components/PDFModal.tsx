import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PDFModalProps {
    isOpen: boolean;
    onClose: () => void;
    fileUrl: string;
    title?: string;
}

const PDFModal = ({ isOpen, onClose, fileUrl, title = "Documento" }: PDFModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="bg-dark-800 w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden relative border border-white/10 flex flex-col shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-4 flex justify-between items-center bg-dark-900 border-b border-white/10">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="text-cyan-400">📄</span> {title}
                            </h3>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex-grow bg-gray-900 relative">
                            {fileUrl ? (
                                <iframe
                                    src={fileUrl}
                                    className="w-full h-full"
                                    title="PDF Preview"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-500">
                                    No hay archivo seleccionado
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PDFModal;
