export const NavBar = () => {
    return (
        <nav className="w-full py-4 top-0 z-40 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-primary">
                    Pol Labrador
                </div>  
                <div className="space-x-4">
                    <a href="#hero" className="text-gray-700 hover:text-primary transition duration-300">Home</a>
                    <a href="#experience" className="text-gray-700 hover:text-primary transition duration-300">Experience</a>
                    <a href="#projects" className="text-gray-700 hover:text-primary transition duration-300">Projects</a>
                    
                </div>
            </div>
        </nav>
    );
};
export default NavBar;