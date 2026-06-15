import { useEffect, useState } from "react"
import PersonajesCard from './components/PersonajeCard.jsx'

function App() {

  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const obtenerPersonajes = async () => {
      const response = await fetch("https://dragonball-api.com/api/characters?limit=30");
      const datos = await response.json();
      setPersonajes(datos.items)
    }
    obtenerPersonajes();
  }, []);

  //FILTRAR PERSONAJES
  function buscar() {
    return personajes.filter((personaje) => {
      return personaje.name.toLowerCase().includes(busqueda.toLowerCase())
    })
  }

  return (
    <div className="app">
      <div className="header">
        <h1>Personajes de Dragon Ball Z</h1>
        <input
          type="text"
          value={busqueda}
          className="search-input"
          placeholder="Buscar por nombre"
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
      <div className="grid-container">
        {buscar().map((personaje) => {
          return (
            <PersonajesCard
              key={personaje.id}
              personaje={personaje}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App