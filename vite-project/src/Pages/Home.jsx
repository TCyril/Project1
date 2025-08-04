import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "@/Components/StarBackground";

export const Home = () => {
    return (
       <div className ="min-h-screen bg-background text-foreground overflow-x-hidden"> 
        {/* Theme Toggle*/}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        
        {/* Main Content */}

        {/* Footer */}
       </div>
    );
};
