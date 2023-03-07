import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ListaPokemon from './ListaPokemon'
import Formulario from './Formulario'
import Perfil from './Perfil'
import Logout from './Logout'

export default function Navbar(props) {
    return (
        <BrowserRouter>
            <header>
                <h1>Bienvenido, {props.nombre}</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className='link'>Home</Link>
                        </li>
                        <li>
                            <Link to="/formulario" className='link'>Formulario</Link>
                        </li>
                        <li>
                            <Link to="/perfil" className='link'>Perfil</Link>
                        </li>
                    </ul>
                </nav>
                <Logout />
            </header>
            <Routes>
                <Route path='/' element={<ListaPokemon />}/>
                <Route path='/formulario' element={<Formulario />} />
                <Route path='/perfil' element={<Perfil />} />
            </Routes>
        </BrowserRouter>
    )
}
