import { fetchPokemon } from "@/lib/utils"
import { useEffect } from "react"
// import { useState } from "react"

export const useFetchPokemon = () => {
    // const [data, setData] = useState({})
    // setData(pokemon)
    // console.log(data)
    useEffect(() => {
        const pokemon = fetchPokemon()
        pokemon.then((response?) => {
            console.log(response)
        })
    }, [])

    // return [data, setData]
}