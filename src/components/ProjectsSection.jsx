export const ProjectsSection = () => {
    return (
        <section id="projects" className="relative min-h-screen flex items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-xl mx-auto">
                        Here are some of my recent works.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;