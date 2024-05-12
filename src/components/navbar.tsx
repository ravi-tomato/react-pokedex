import { NavItems } from "./navItems"
import PokeLogo from "../assets/pokelogo.svg";
import { MobileNav } from "./mobileNav";
import { Moon } from 'lucide-react'

export const Navbar = () => {
    return (
        <header className="h-20 md:px-10 w-full items-center border-b">
            <div className="wrapper flex items-center justify-between">
                <div className="grid grid-cols-2 items-center">
                    <img className="h-auto w-24" src={ PokeLogo } alt="Pokemon Logo" />
                </div>
                <div className="flex justify-between gap-3 md:gap-6">
                    <Moon className="hover:md:"/>
                    <nav className="md:flex-between hidden w-full max-w-xs">
                        <NavItems />
                    </nav>
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}