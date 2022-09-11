import React from "react";
import useFetch from "../hooks/useFetch";

const Pokemons = () => {
    const url = " https://pokeapi.co/api/v2/pokemon/";
    const {data, isPending, error} = useFetch(url);



    return(
        <div className="Pokemons">
            <h1>Vamos a renderizar datos de la pokeApi</h1>
            <h3>is Pending: {isPending.toString()}</h3>
            <h3> <mark>{JSON.stringify(error)}</mark></h3>
            <h3>
                <pre style={{whiteSpace:"pre-wrap"}}>
                    <code>{JSON.stringify(data)}</code>
                </pre>
            </h3>
        </div>
    )
}
export default Pokemons;