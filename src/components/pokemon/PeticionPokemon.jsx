import React, { useState } from 'react'
import peticionFetch from './peticionFetch'
import ListaPokes from './ListaPokes'

export default function PeticionPokemon() {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const lista = peticionFetch(url);

    const {resultado} = lista;

    console.log(resultado);
    
    return (
        <div>
            <ListaPokes pokemones={lista}/>
        </div>
    )
}
