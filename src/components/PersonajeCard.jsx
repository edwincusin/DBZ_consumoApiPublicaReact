import { FaBolt } from "react-icons/fa";
import { GiDna1 } from "react-icons/gi";
import { FaHashtag } from "react-icons/fa";

function PersonajesCard(prop) {
    const { personaje } = prop;

    return (
        <div className="card">
            <img
                className="card-img"
                src={personaje.image}
                alt={personaje.name}
            />

            <div className="card-body">

                <span className="card-id">
                    <FaHashtag /> {personaje.id}
                </span>

                <h2 className="card-name">
                    {personaje.name}
                </h2>

                <div className="card-stat">
                    <span>
                        <GiDna1 className="stat-icon" />
                        Raza
                    </span>
                    <span>{personaje.race}</span>
                </div>

                <div className="card-stat">
                    <span>
                        <FaBolt className="stat-icon" />
                        Ki inicial
                    </span>
                    <span>{personaje.ki}</span>
                </div>

                <div className="card-stat">
                    <span>
                        <FaBolt className="stat-icon" />
                        Ki máximo
                    </span>
                    <span>{personaje.maxKi}</span>
                </div>

            </div>
        </div>
    );
}


export default PersonajesCard;