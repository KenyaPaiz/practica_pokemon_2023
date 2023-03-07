import React, { useEffect, useState } from 'react'

export default function Tarjeta(props) {
    
    const [pokemon, setPokemon] = useState({});
    const [sprites, setSprites] = useState({});

    const obtenerPokemonByUrl = async (url) => {
        let res = await fetch(url);
        let data = await res.json();
        setPokemon(data);
        setSprites(data.sprites);
    }

    useEffect(() => {
        obtenerPokemonByUrl(props.url);
    }, [])

    const idModal = `#${pokemon.id}`;
    return (
        <div>
            <div className="card mt-2 w-75">
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <img src={sprites.front_default} alt="" width={100}/><br></br>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={idModal}>
                        Ver mas info
                    </button>
                </div>
            </div>
            
            <div className="modal fade" id={pokemon.id} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{pokemon.name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={sprites.front_shiny} alt="" width={100}/><br></br>
                            <p>
                                <b>Height: {pokemon.height}</b><br></br>
                                <b>Weight: {pokemon.weight}</b>
                            </p>
                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
