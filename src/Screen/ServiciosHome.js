import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';

function ServiciosScreen() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await axios.get('http://localhost:5433/api/servicios/extraer');
        setServicios(response.data); // Suponiendo que la respuesta contiene la lista de servicios
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };

    fetchServicios();
  }, []);

  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <div className="div-18">Servicios disponibles</div>
        <Link to="/ServiciosHome">
          <button className="add-button">Agregar Servicio</button>
        </Link>
        <div className="servicio-list">
          {servicios.map((servicio) => (
            <Link key={servicio.idServicio} to={`/servicio/${servicio.idServicio}`} className="servicio-link">
              <button className="servicio-button" style={{ backgroundImage: `url(SERVICIO.png)` }}>{servicio.nombre}</button>
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

        .servicio-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Ajusta los elementos en filas de 3 */
          gap: 10px; /* Espacio entre los botones */
          justify-items: center; /* Centrar los botones horizontalmente */
          width: 100%;
          max-width: 600px;
          align-items: center;
        }

        .servicio-link {
          text-decoration: none;
          width: 100%;
        }

        .servicio-button {
          padding: 10px 20px;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
          text-align: left;
          background-size: cover; /* Asegura que la imagen de fondo cubra todo el botón */
          height: 200px; /* Ajusta la altura del botón al tamaño de la imagen */
          border-radius: 30px;
        }

        .servicio-button:hover {
          background-color: #e0e0e0;
        }

        @media (max-width: 991px) {
          .content {
            padding: 10px;
          }

          .servicio-button {
            padding: 8px 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default ServiciosScreen;
