export const NavBar = () => {
    return (
        <nav className="w-full py-4 px-8 bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-primary">
                    Pol Labrador
                </div>  
                <div className="space-x-4">
                    <a href="#hero" className="text-gray-700 hover:text-primary transition duration-300">Home</a>
                    <a href="#projects" className="text-gray-700 hover:text-primary transition duration-300">Projects</a>
                    <a href="#about" className="text-gray-700 hover:text-primary transition duration-300">About</a>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;