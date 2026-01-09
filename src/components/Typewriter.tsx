import { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    startDelay?: number;
    className?: string;
    showCursor?: boolean;
}

const Typewriter = ({ text, speed = 50, startDelay = 0, className = "", showCursor = true }: TypewriterProps) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsStarted(true);
        }, startDelay);
        return () => clearTimeout(timeout);
    }, [startDelay]);

    useEffect(() => {
        if (!isStarted) return;
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, isStarted, text, speed]);

    return (
        <span className={className}>
            {displayText}
            {showCursor && currentIndex < text.length && (
                <span className="animate-pulse text-accent">_</span>
            )}
        </span>
    );
};

export default Typewriter;
