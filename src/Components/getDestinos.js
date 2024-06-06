import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const App = () => {
    const [destinos, setDestinos] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Hook useNavigate para la redirección

    useEffect(() => {
        fetchDestinosDisponibles();
    }, []);

    const fetchDestinosDisponibles = () => {
        axios.get('http://localhost:5433/api/destinos/disponibles')
            .then(response => {
                setDestinos(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los destinos disponibles:', error);
                setLoading(false);
            });
    };

    const handleEditClick = (id) => {
        navigate(`/DestinoEditScreen/${id}`); // Redirigir a la vista de editar
    };

    if (loading) {
        return <p>Cargando destinos...</p>;
    }

    return (
        <div>
            <ul>
                {destinos.map(destino => (
                    <li key={destino.idDest}>
                        <Link to={`/${destino.idDest}`}>{destino.nombre}</Link>
                        <button onClick={() => handleEditClick(destino.idDest)}>Editar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
