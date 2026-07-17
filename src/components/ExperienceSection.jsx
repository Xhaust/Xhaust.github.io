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
               
               <div className="space-y-8">
                    <div className="border-l-2 border-primary pl-6">
                        <h3 className="text-2xl font-semibold mb-1">
                            Quality Assurance Engineer Intern at <span className="text-primary">Accenture</span>
                        </h3>
                        <div className="text-sm text-muted-foreground mt-1">March 2026 - July 2026</div>
                        <ul className="mt-4 list-disc list-inside space-y-2 text-muted-foreground text-sm md:text-base">
                            <li>Performed functional testing, defect investigation, and validation across multiple application features in an Agile environment.</li>
                            <li>Collaborated with engineers to reproduce issues, verify fixes, and improve software quality.</li>
                            <li>Designed an AI-assisted workflow to automate defect ticket creation from bug reports and screenshots.</li>
                            <li>Developed automated test cases using Robot Framework to support end-to-end application testing.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/*
             <div className="flex flex-col items-center justify-center h-64 relative">
                     <div className="absolute left-0 animate-tumbleweed">
                        <img src="/tumbleweed.png" alt="Tumbleweed" className="w-24 h-24 dark:hidden" />
                        <img src="/amongus.png" alt="Among Us" className="w-24 h-24 hidden dark:block" />
                    </div>

                    <span className="mt-32 text-xl text-muted-foreground opacity-0 animate-fade-in-slow">
                        empty...
                    </span>
            </div> 
            */}
     
        </section>
    );
}

export default ExperienceSection;