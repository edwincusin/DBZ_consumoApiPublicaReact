import { useEffect, useState } from "react"
import PersonajesCard from './components/PersonajeCard.jsx'

function App() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      const response = await fetch("https://dragonball-api.com/api/characters?limit=30");
      const datos = await response.json();
      setPersonajes(datos.items)
    }
    obtenerPersonajes();
  }, []);

  return (
    <div className="app">
      <div className="header">
        <h1>Personajes de Dragon Ball Z</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Buscar por nombre"
        />
      </div>
      <div className="grid-container">
        {personajes.map((personaje) => {
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