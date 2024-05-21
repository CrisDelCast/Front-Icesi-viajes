import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar'; 

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
    <div className="container">
      <NavBar />
      <div className="content">
        <div className="header">
          <h1>Planes Disponibles</h1>
          <Link to="/PlanesHome">
            <button className="add-button">Agregar Plan</button>
          </Link>
        </div>
        <div className="plan-list">
          {planes.map((plan) => (
            <Link key={plan.idPlan} to={`/plan/${plan.idPlan}`} className="plan-link">
              <button className="plan-button">{plan.nombre}</button>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
        }

        .content {
          flex: 1;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          margin-bottom: 20px;
        }

        .add-button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .add-button:hover {
          background-color: #0056b3;
        }

        .plan-list {
          display: flex;
          gap: 10px; /* Espacio entre los botones */
          flex-wrap: wrap; /* Permitir que los botones se envuelvan si no caben en una sola línea */
          justify-content: center; /* Centrar los botones horizontalmente */
          width: 100%;
          max-width: 600px;
          align-items: center;
        }
        

        .plan-link {
          text-decoration: none;
          width: 100%;
        }

        .plan-button {
          padding: 10px 20px;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
          text-align: left;
        }

        .plan-button:hover {
          background-color: #e0e0e0;
        }

        @media (max-width: 991px) {
          .content {
            padding: 10px;
          }

          .plan-button {
            padding: 8px 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default PlanesScreen;
