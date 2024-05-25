import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
  

//   const handleCheckboxChange = (event) => {
//     setDestino((prevData) => {
//         return {
//           ...prevData,
//           idDestinos: prevData.idDestinos.filter((id) => id !== parseInt(value)),
//         };
//       })
//     };
//   };

    if (loading) {
        return <p>Cargando destinos...</p>;
    }

    return (
        <div>
        <ul>
            {destinos.map(destino => (
            <li key={destino.idDest}>
                <Link to="/{destino.idDest}">{destino.nombre}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default App;
