import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Background = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Main Gradient Background - Driven strictly by CSS Variable */}
            <div
                className="absolute inset-0 transition-all duration-500 ease-in-out"
                style={{
                    background: 'var(--bg-gradient)'
                }}
            />

            {/* --- LIGHT MODE: Blue/Indigo Tech Designs --- */}
            {isLight && (
                <>
                    {/* Design 1: Light Wave */}
                    <motion.div
                        className="absolute top-[10%] left-[-10%] w-[120vw] opacity-30 text-blue-500"
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    >
                        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                            <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,112C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160"></path>
                            <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,200L48,210C96,220,192,240,288,230C384,220,480,190,576,170C672,150,768,140,864,160C960,180,1056,230,1152,240C1248,250,1344,220,1392,200L1440,190" className="opacity-50"></path>
                        </svg>
                    </motion.div>

                    {/* Design 2: Light Circuits */}
                    <div className="absolute top-[15%] right-[5%] w-[400px] h-[400px] opacity-20 text-indigo-600">
                        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <motion.path
                                d="M50 50 L150 50 L150 150 L250 150 M350 50 L350 200 L200 200"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            />
                            <circle cx="50" cy="50" r="4" fill="currentColor" />
                            <circle cx="250" cy="150" r="4" fill="currentColor" />
                            <circle cx="350" cy="50" r="4" fill="currentColor" />
                            <circle cx="200" cy="200" r="4" fill="currentColor" />
                        </svg>
                    </div>

                    {/* Design 3: Light Mesh */}
                    <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] opacity-15 text-sky-600">
                        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <g stroke="currentColor" strokeWidth="1.5" fill="none">
                                <motion.path
                                    d="M100 400 L200 300 L300 400 L200 500 Z"
                                    initial={{ opacity: 0.5, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1.1 }}
                                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                                />
                                <path d="M200 300 L200 100 L350 100" />
                                <path d="M300 400 L450 400" />
                                <circle cx="200" cy="300" r="6" fill="currentColor" />
                                <circle cx="300" cy="400" r="6" fill="currentColor" />
                                <circle cx="200" cy="500" r="6" fill="currentColor" />
                                <circle cx="100" cy="400" r="6" fill="currentColor" />
                            </g>
                        </svg>
                    </div>

                    {/* Design 4: Light Moving Particles */}
                    <div className="absolute inset-0">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-blue-500/30 rounded-full"
                                style={{
                                    width: Math.random() * 20 + 5 + 'px',
                                    height: Math.random() * 20 + 5 + 'px',
                                    top: Math.random() * 100 + '%',
                                    left: Math.random() * 100 + '%',
                                }}
                                animate={{
                                    y: [0, -100, 0],
                                    x: [0, Math.random() * 50 - 25, 0],
                                    opacity: [0.2, 0.6, 0.2]
                                }}
                                transition={{
                                    duration: Math.random() * 10 + 10,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* --- DARK MODE: Cyber/Neon Tech Designs --- */}
            {!isLight && (
                <>
                    {/* Cyber Glow Foundation */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute -top-20 -left-20 w-96 h-96 bg-[var(--accent-primary)] rounded-full blur-[128px] opacity-20"
                    />

                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--accent-secondary)] rounded-full blur-[128px] opacity-10"
                    />

                    {/* Dark Design 1: Neon Cyan Wave - Higher Opacity for Dark Mode */}
                    <motion.div
                        className="absolute top-[10%] left-[-10%] w-[120vw] opacity-20 text-cyan-400"
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    >
                        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                            {/* Filter drop-shadow for neon effect */}
                            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <path filter="url(#neon-glow)" fill="none" stroke="currentColor" strokeWidth="2" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,112C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160"></path>
                        </svg>
                    </motion.div>

                    {/* Dark Design 2: Neon Purple Circuits */}
                    <div className="absolute top-[15%] right-[5%] w-[400px] h-[400px] opacity-20 text-purple-500">
                        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <motion.path
                                d="M50 50 L150 50 L150 150 L250 150 M350 50 L350 200 L200 200"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                style={{ filter: "drop-shadow(0 0 2px rgba(168,85,247,0.5))" }}
                            />
                            <circle cx="50" cy="50" r="4" fill="currentColor" />
                            <circle cx="250" cy="150" r="4" fill="currentColor" />
                            <circle cx="350" cy="50" r="4" fill="currentColor" />
                            <circle cx="200" cy="200" r="4" fill="currentColor" />
                        </svg>
                    </div>

                    {/* Dark Design 3: Teal Network Mesh */}
                    <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] opacity-15 text-teal-400">
                        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <g stroke="currentColor" strokeWidth="1.5" fill="none" style={{ filter: "drop-shadow(0 0 2px rgba(45,212,191,0.5))" }}>
                                <motion.path
                                    d="M100 400 L200 300 L300 400 L200 500 Z"
                                    initial={{ opacity: 0.5, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1.1 }}
                                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                                />
                                <path d="M200 300 L200 100 L350 100" />
                                <path d="M300 400 L450 400" />
                                <circle cx="200" cy="300" r="6" fill="currentColor" />
                                <circle cx="300" cy="400" r="6" fill="currentColor" />
                                <circle cx="200" cy="500" r="6" fill="currentColor" />
                                <circle cx="100" cy="400" r="6" fill="currentColor" />
                            </g>
                        </svg>
                    </div>

                    {/* Dark Design 4: Neon Particles */}
                    <div className="absolute inset-0">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-cyan-400/40 rounded-full shadow-[0_0_5px_rgba(34,211,238,0.5)]"
                                style={{
                                    width: Math.random() * 15 + 3 + 'px',
                                    height: Math.random() * 15 + 3 + 'px',
                                    top: Math.random() * 100 + '%',
                                    left: Math.random() * 100 + '%',
                                }}
                                animate={{
                                    y: [0, -120, 0],
                                    x: [0, Math.random() * 60 - 30, 0],
                                    opacity: [0.1, 0.5, 0.1]
                                }}
                                transition={{
                                    duration: Math.random() * 8 + 12,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* Tech Grid Pattern - On TOP for visibility */}
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: 'radial-gradient(circle, var(--grid-color) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Minimal Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.03)_100%)] pointer-events-none" />
        </div>
    );
};

export default Background;
