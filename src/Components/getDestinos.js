import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const App = () => {
    const [destinos, setDestinos] = useState([]);
    const [loading, setLoading] = useState(true);
  
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

    const handleDeleteDestino = (idDest) => {
      axios.delete(`http://localhost:5433/api/destinos/eliminar/${idDest}`)
        .then(response => {
          // Actualizar la lista de destinos después de la eliminación
          fetchDestinosDisponibles();
        })
        .catch(error => {
          console.error('Error al eliminar el destino:', error);
        });
    };

    if (loading) {
        return <p>Cargando destinos...</p>;
    }

    return (
        <div>
            <ul>
                {destinos.map(destino => (
                    <li key={destino.idDest}>
                        <Link to={`/destino/${destino.idDest}`}>{destino.nombre}</Link>
                        <button onClick={() => handleDeleteDestino(destino.idDest)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
