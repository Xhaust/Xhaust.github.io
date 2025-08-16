export const ThemeToggle = () => {
    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
    };
    
    return (
        <button onClick={toggleTheme} className="dark">
        Toggle Theme
        </button>
    );
    }