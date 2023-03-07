import React from 'react'
import TarjetaPokemon from './TarjetaPokemon'

export default function ListaPokes({pokemones}) {
    const {resultado} = pokemones;

    console.log(resultado.results)
    return (
        <div className='row'>
                {
                    pokemones.map((pokemon, indice) => {
                        return(
                            <div className='col-md-4' key={indice}>
                                <TarjetaPokemon {...pokemon}/>
                            </div>
                        )
                    })
                    
                }
        </div>
    )
}
