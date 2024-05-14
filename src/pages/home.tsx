// import { SearchBar } from "@/components/searchBar"
// import { useFetchPokemon } from "@/hooks/useFetchPokemon"
import { fetchPokemon } from "@/lib/utils"
import { useEffect, useState } from "react"

export const Home = () => {
    const [res, setRes] = useState([])
    useEffect(() => {
        const pokemon = fetchPokemon()
        pokemon.then((response?) => { 
            console.log(response.next)
            setRes(response.results)
        })
    }, [])

    console.log(res)
    return (
        <>
            {
                res.map((v) => {
                    return (
                        <p>{ v.name }</p>
                    )
                })
            }
        </>
    )
}