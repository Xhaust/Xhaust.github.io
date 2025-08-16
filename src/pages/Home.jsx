import { HeroSection } from "../components/HeroSection"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background">
            <ThemeToggle />
            <HeroSection />
        </div>
    )
}