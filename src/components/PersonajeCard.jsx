function PersonajesCard(prop) {
    const { personaje } = prop;

    return (
        <div className="card">
            <img className="card-img" src={personaje.image} alt={personaje.name} />
            <div className="card-body">
                <span className="card-id">#{personaje.id}</span>
                <h2 className="card-name">{personaje.name}</h2>
                <div className="card-stat">
                    <span>Raza</span>
                    <span>{personaje.race}</span>
                </div>
                <div className="card-stat">
                    <span>Ki inicial</span>
                    <span>{personaje.ki}</span>
                </div>
                <div className="card-stat">
                    <span>Ki máximo</span>
                    <span>{personaje.maxKi}</span>
                </div>
            </div>
        </div>
    )
}

export default PersonajesCard;