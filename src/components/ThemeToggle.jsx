import { Sun, Moon } from 'lucide-react';
import { useState, useEffect} from 'react';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add('dark');
        } else {
            localStorage.theme = "light";
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = "light";
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = "dark";
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick={toggleTheme} className="fixed top-5 z-50 right-5 rounded-full" >
            {isDarkMode ? (
                <Sun className="w-6 h-6 text-yellow-300" />
                ) : (
                <Moon className="w-6 h-6 text-blue-900" />
            )}
        </button>
    );
};  