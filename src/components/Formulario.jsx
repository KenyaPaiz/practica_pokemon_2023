import React, { useState } from 'react'

export default function Formulario() {
    const [nombre, setNombre] = useState("");
    const [sprites, setSprites] = useState({});
    const [pokemon, setPokemon] = useState({});

    const obtenerPokemonByName = async () => {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        let data = await res.json();
        setPokemon(data);
        setSprites(data.sprites);
    }

    const handleName = (e) => {
        setNombre(e.target.value);
    }

    const handleSubmit = (e) => {
        obtenerPokemonByName();
        e.preventDefault();
    }

    console.log(Object.keys(pokemon).length)
    return (
        
        <div>
            <div className="card">
                <div className='card-header text-black'>
                    Header
                </div>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <label className='form-label text-black'>Ingrese un nombre: </label>
                        <br/>
                        <input 
                            type="text"
                            placeholder='nombre'
                            className='form-control'
                            onChange={handleName}
                        />
                        <br/>
                        <button type='submit' className='btn btn-primary'>Enviar</button>
                    </form>
                </div>
            </div>
            <img src={sprites.front_default} alt="" width={100}/><br></br>            
        </div>
    )
}
