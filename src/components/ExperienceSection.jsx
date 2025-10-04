export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Experience</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here is a summary of my professional experience in the tech industry.
                </p>
                
               {/* I'll use this if I get a job :D
               <div className="space-y-8">
                    <div className="border-l-2 border-primary pl-6">
                        <h3 className="text-2xl font-semibold mb-1">Software Engineer at ???</h3>
                        <span className="text-sm text-muted-foreground">Jan 202x - Present</span>
                        <p className="mt-2 text-gray-600">Developed and maintained web applications.</p>
                    </div>
                </div> */}

            </div>
            <div className="flex flex-col items-center justify-center h-64 relative">
                     <div className="absolute left-0 animate-tumbleweed">
                        <img src="/tumbleweed.png" alt="Tumbleweed" className="w-24 h-24 dark:hidden" />
                        <img src="/amongus.png" alt="Among Us" className="w-24 h-24 hidden dark:block" />
                    </div>

                    <span className="mt-32 text-xl text-muted-foreground opacity-0 animate-fade-in-slow">
                        empty...
                    </span>
                </div>
     
        </section>
    );
}

export default ExperienceSection;