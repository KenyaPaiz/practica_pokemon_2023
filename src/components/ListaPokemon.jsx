import React, { useEffect, useState } from 'react'
import Tarjeta from './Tarjeta';

export default function ListaPokemon() {
    const [pokemones, setPokemones] = useState([]);

    const obtenerPokemones = async () => {
        let res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        let data = await res.json();
        setPokemones(data.results);

    }

    useEffect(() => {
        obtenerPokemones();
    }, []);


    
    /*console.log(pokemones);
    const lista = pokemones.filter(pokemon => pokemon.name.includes(busqueda)).map((pokemon, indice) => {
        return <Tarjeta key={indice} poke={pokemon}/>
    });*/
    return (
        <div>
            <h1 className='pokemon'>Lista de Pokemones</h1>
            <div className='row'>
                {
                    /*pokemones.filter((pokemon) => {
                        return pokemon.name.includes(busqueda);
                    })*/pokemones.map((pokemon, indice) => {
                        return(
                            <div className='col-md-4' key={indice}>
                                <Tarjeta {...pokemon}/>
                            </div>
                        )
                    })
                    
                }
            </div>
        </div>
    )
}
