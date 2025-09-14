import { HeroSection } from "../components/HeroSection"
import { ThemeToggle } from "../components/ThemeToggle"
import { Projects } from "../components/Projects"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <ThemeToggle />
            <HeroSection />
            <Projects />
        </div>
    )
}