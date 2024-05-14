import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchPokemon() {
  try {
    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/")

    if(!pokemon.ok) throw new Error("There is something wrong")

    return pokemon.json()
  } catch(e) {
      console.log(e)
  }

  
} 
