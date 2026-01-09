import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';


const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex gap-2 bg-black/20 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-lg">
            <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-full transition-all ${theme === 'light' ? 'bg-white text-yellow-500 shadow-sm' : 'text-gray-400 hover:text-white'}`}
                title="Modo Claro"
            >
                <Sun size={18} />
            </button>

            <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-full transition-all ${theme === 'dark' ? 'bg-slate-700 text-cyan-400 shadow-sm' : 'text-gray-400 hover:text-cyan-400'}`}
                title="Modo Oscuro"
            >
                <Moon size={18} />
            </button>
        </div>
    );
};

export default ThemeSwitcher;
