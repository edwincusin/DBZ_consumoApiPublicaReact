
function PersonajesCard(prop) {
    const { personaje } = prop;

    return (
        <div>
            <h2>{personaje.name}</h2>
            <p>{personaje.id}</p>
            <img src={personaje.image} alt={personaje.name} />
            <p>Raza: {personaje.race}</p>
            <p>Ki: {personaje.ki}</p>
        </div>
    )
}

export default PersonajesCard;