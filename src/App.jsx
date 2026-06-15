import { useEffect, useState } from "react"
import PersonajesCard from './components/PersonajeCard.jsx'

function App() {

  const [personajes, setPersonajes]=useState([]);

  useEffect(()=>{
    const obtenerPersonajes=async()=>{
      const response=await fetch("https://dragonball-api.com/api/characters?limit=30");
      const datos=await response.json();
      setPersonajes(datos.items)
    }
    obtenerPersonajes();
  },[]);

  return (

      <div>
        <h1>Personajes de Dragon Ball Z</h1>
        <div>
        <input type="text" 
          placeholder="Bucar por nombre"
        />
        </div>
        <div>
          {personajes.map((personaje)=>{
            return(
              <PersonajesCard
                key={personaje.name}
                personaje={personaje}
              />
            )
          })}
        </div>
      </div>

  )
}

export default App
