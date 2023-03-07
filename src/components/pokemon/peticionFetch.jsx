import React, { useEffect, useState } from 'react'

export default function peticionFetch(url) {

    const [resultado, setResultado] = useState(null);

    const obtenerPokemones = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setResultado(data);
    }
    
    useEffect(() => {
        obtenerPokemones(url);
    }, [url]);



    return {resultado};
}
