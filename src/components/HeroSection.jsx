export const HeroSection = () => {
    return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text=4xl md: text-6xl font-bold tracking-tight">
                    <span> Hi I'm</span>
                    <span className="text-primary"> Pol</span>
                    <span> Labrador</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-xl mx-auto">
                    Computer Engineering student, I like building things.
                </p>
            </div>
        </div>
    </section>

    )
}