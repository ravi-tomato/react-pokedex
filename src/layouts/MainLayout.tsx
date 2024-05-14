// import { AppRoutes } from "@/AppRoutes"
import { Navbar } from "@/components/navbar"

type MainLayoutProps = {
    children: JSX.Element
}

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
    return (
        <div>
            <Navbar />
            <main className="relative wrapper">
                { children }    
            </main>
        </div>
    )
}