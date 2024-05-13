import { PokemonType } from "./pokemonTypes"

export type Pokemon = {
    id: number
    name: string
    imgUrl: string
    stats: [{ base_stat: number, stat: { name: string }}]
    types: [{ type: { name: PokemonType } }]
}