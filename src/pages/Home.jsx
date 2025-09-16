import { HeroSection } from "../components/HeroSection"
import { ThemeToggle } from "../components/ThemeToggle"
import { ProjectsSection } from "../components/ProjectsSection"
import { NavBar } from "../components/NavBar"
import { ExperienceSection } from "../components/ExperienceSection"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <ThemeToggle />
            <NavBar />
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection/>
        </div>
    )
}