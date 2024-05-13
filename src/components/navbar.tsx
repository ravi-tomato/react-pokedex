import { NavItems } from "./navItems"
import PokeLogo from "../assets/pokelogo.svg";
import { MobileNav } from "./mobileNav";
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "@/hooks/useTheme";

export const Navbar = () => {
    const { theme, setTheme, isSystemThemeDark } = useTheme()

    return (
        <header className="h-20 md:px-10 w-full items-center border-b">
            <div className="wrapper flex items-center justify-between">
                <div className="grid grid-cols-2 items-center">
                    <img className="h-auto w-24" src={ PokeLogo } alt="Pokemon Logo" />
                </div>
                <div className="flex justify-between gap-3 md:gap-6">
                    {
                        (isSystemThemeDark() && theme === "dark") ?
                            <Sun className="hover:md:-translate-y-1 0.2s ease-out" onClick={ () => setTheme("light") } /> :
                            <Moon className="hover:md:-translate-y-1 0.2s ease-out" onClick={ () => setTheme("dark") } />
                    }
                    <nav className="md:flex-between hidden w-full max-w-xs">
                        <NavItems />
                    </nav>
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}