import { HeroSection } from "../components/HeroSection"
import { ThemeToggle } from "../components/ThemeToggle"
import { ProjectsSection } from "../components/ProjectsSection"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <ThemeToggle />
            <HeroSection />
            <ProjectsSection/>
        </div>
    )
}