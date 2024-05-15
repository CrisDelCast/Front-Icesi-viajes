import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PlanesScreen() {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const response = await axios.get('http://localhost:5433/api/planes/extraer');
        setPlanes(response.data); // Suponiendo que la respuesta contiene la lista de planes
      } catch (error) {
        console.error('Error al obtener los planes:', error);
      }
    };

    fetchPlanes();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Planes Disponibles</h1>
        <div className="plan-list">
          {planes.map((plan) => (
            <Link key={plan.id} to={`/plan/${plan.id}`}>
              <button className="plan-button">{plan.nombre}</button>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .plan-list {  
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }

        .plan-button {
          padding: 10px 20px;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 5px;
          cursor: pointer;
        }

        .plan-button:hover {
          background-color: #e0e0e0;
        }
      `}</style>
    </>
  );
}

export default PlanesScreen;
