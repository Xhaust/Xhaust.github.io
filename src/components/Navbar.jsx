export const NavBar = () => {
    return (
        <nav className="w-full py-4 top-0 z-40 shadow-md">
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