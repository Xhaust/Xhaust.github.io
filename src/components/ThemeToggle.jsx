import { Sun, Moon } from "lucide-react";
import { useState, useEffect} from "react";

export const ThemeToggle = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "dark";
        setTheme(storedTheme);
        document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button onClick={toggleTheme} className="fixed top-5 z-50 right-5 rounded-full" >
            {theme === "dark" ? (
                <Sun className="w-6 h-6 text-yellow-300" />
                ) : (
                <Moon className="w-6 h-6 text-blue-900" />
            )}
        </button>
    );
};  