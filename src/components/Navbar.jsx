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
        <nav className={"w-full fixed py-4 z-40" + (isScrolled ? "py-3 bg-background/80 backdrop-blur-sm shadow-xs" : "py-5")}>
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