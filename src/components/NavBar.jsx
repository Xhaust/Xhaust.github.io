import { useEffect, useState } from "react";

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={"w-full fixed z-40 py-4 top-0" + (isScrolled ? "bg-background/80 backdrop-blur-md shadow-xs" : "bg-transparent")}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-primary">
                    Pol Labrador
                </div>  
                <div className="space-x-4">
                    <a href="#hero" className="hover:text-primary">Home</a>
                    <a href="#experience" className="hover:text-primary">Experience</a>
                    <a href="#projects" className="hover:text-primary">Projects</a>
                    
                </div>
            </div>
        </nav>
    );
};
export default NavBar;
