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

  const eliminarPlan = async (idPlan) => {
    try {
      await axios.delete(`http://localhost:5433/api/planes/${idPlan}`);
      // Eliminar el plan de la lista después de la eliminación exitosa
      setPlanes(planes.filter(plan => plan.idPlan !== idPlan));
      console.log('Plan eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el plan:', error);
    }
  };

  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <div className="div-18">Planes disponibles</div>
        <Link to="/PlanesHome">
          <button className="add-button">Agregar Plan</button>
        </Link>
        <div className="plan-list">
          <table className="plan-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cantidad Personas</th>
                <th>Valor Total</th>
                <th>Estado</th>
                <th>Acciones</th> 
              </tr>
            </thead>
            <tbody>
              {planes.map((plan) => (
                <tr key={plan.idPlan}>
                  <td>
                    <Link to={`/PlanEditScreen/?id=${plan.idPlan}`}>{plan.idPlan}</Link>
                  </td>
                  <td>{plan.cantidadPersonas}</td>
                  <td>${plan.valorTotal}</td>
                  <td>{plan.estado}</td>
                  <td>
                    <button onClick={() => eliminarPlan(plan.idPlan)} className="delete-button">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
        }

        .div-18 {
          color: var(--sgivBlue-700, #03318c);
          font: 500 128px Poppins, sans-serif;
          padding-right: 600px; 
        }

        .content {
          flex: 1;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .add-button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-bottom: 10px;
        }

        .add-button:hover {
          background-color: #0056b3;
        }

        .plan-list {
          width: 100%;
          max-width: 800px;
          overflow-x: auto;
        }

        .plan-table {
          width: 100%;
          border-collapse: collapse;
        }

        .plan-table th, .plan-table td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: left;
        }

        .plan-table th {
          background-color: #f2f2f2;
          color: #333;
        }

        .plan-link {
          text-decoration: none;
          color: inherit;
        }

        @media (max-width: 991px) {
          .content {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default PlanesScreen;
