import './App.css'
import Navbar from './components/Navbar';
import PeticionPokemon from './components/pokemon/PeticionPokemon';
import Login from './components/Login';
import { useAuth0 } from '@auth0/auth0-react';
import Nav from './components/practica/Navbar/Navbar'
import Lista from './components/practica/ListPokemons'
import MyProvider from './services/provider';

function App() {
  const {user, isAuthenticated} = useAuth0();

  return (
     <div className="App">
      {isAuthenticated ? (
        <>
            <Navbar nombre={user.name}/>
        </>
      ) : (
        <div>
          {console.log(window.location.origin)}
          <Login />
        </div>
      )}
      {/*<PeticionPokemon />*/}
    </div>
  )
}

export default App
