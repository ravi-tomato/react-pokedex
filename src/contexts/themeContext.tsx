import { Theme } from "@/types/theme/theme"
import React, { createContext, useEffect, useState } from "react"

export type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
}

export type ThemeProviderState = {
    theme: Theme
    setTheme: (value: Theme) => void
    isSystemThemeDark: () => boolean
}

// Set the initial state, where the theme mirrors the system preference
const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
    isSystemThemeDark: () => window.matchMedia('(prefers-color-scheme: dark)').matches
}

// Create a context that sets an initial value of ThemeProviderState
export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
    children,
    defaultTheme = "system"
} : ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => localStorage.getItem("theme") as Theme || defaultTheme)

    // Every time theme changes, whatever in here gets executed. 
    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove("light", "dark")
        console.log(theme)
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
            localStorage.setItem("theme", theme)
            setTheme(theme)
        },
        isSystemThemeDark: () => {
            return window.matchMedia('(prefers-color-scheme: dark)').matches
        }
    }

    return (
        <ThemeProviderContext.Provider value={ value }>
            { children }
        </ThemeProviderContext.Provider>
    )
}