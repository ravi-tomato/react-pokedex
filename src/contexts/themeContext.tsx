import { Theme } from "@/types/theme/theme"
import React, { createContext, useEffect, useState } from "react"

export type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
}

export type ThemeProviderState = {
    theme: Theme
    setTheme: (value: Theme) => void
}

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null
}

// Create a context that sets an initial value of ThemeProviderState
export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
    children,
    defaultTheme = "system"
} : ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove("light", "dark")

        if(theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches ? "dark" : "light"

            root.classList.add(systemTheme)
            return
        }

        root.classList.add(theme)

    }, [theme]) 

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            setTheme(theme)
        }
    }

    return (
        <ThemeProviderContext.Provider value={ value }>
            { children }
        </ThemeProviderContext.Provider>
    )
}