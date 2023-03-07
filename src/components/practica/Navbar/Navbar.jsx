import { useContext, useEffect } from "react"
import { AppContext } from "../../../services/provider"

export default function Navbar({title}) {
  const [pokemones, setPokemones] = useContext(AppContext);

  useEffect( () => {
    console.log(pokemones);
  })

  return (
    <div>
        <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1"> {title}</span>
  </div>
</nav>
        
    </div>
  )
}
