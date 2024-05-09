import { NavItems } from "./navItems"
import PokeLogo from "../assets/pokelogo.svg";

export const Navbar = () => {
    return (
        <header className="h-20 px-12 top-8 w-full items-center border-b">
            <div className="wrapper flex items-center justify-between">
                <div className="grid grid-cols-2 items-center">
                    <img className="h-auto w-24" src={ PokeLogo } alt="Pokemon Logo" />
                </div>
                {/* <PokeLogo /> */}
                <nav className="md:flex-between hidden w-full max-w-xs">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}