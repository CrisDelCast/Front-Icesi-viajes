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
    <div className="container">
      <div className="sidebar">
        <Link to="/home">
          <div className="logo">
            <span className="logo-part1">A</span>
            <span className="logo-part2">t</span>
          </div>
        </Link>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e281c1b67a149e4da4884a9c14920c19f8a65bac747ed68fc00216c3d3cd4908?"
          className="img"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2ce713b69d39ccd72fc8d00311fd0ecb34d4cfba5f8a8de7cd90c346a17cc2d?"
          className="img"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d19a46c5f17720bd2556764803b6a0a6d2c5898fcf08c91c6917223ae8fe57d?"
          className="img"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf4c986309820fce8f19e55e7c1ac558c93e44a01af00a78f4af9aa3e216c5aa?"
          className="img"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/59337eadaa12d8be4784fbcb33da7286c99d404104500a9cef8223bf41708342?"
          className="img"
        />
        <img
          loading="lazy"
          srcSet="..."
          className="img"
        />
        <img
          loading="lazy"
          srcSet="/USER.png"
          className="user-img"
        />
      </div>
      
      <div className="content">
        <div className="header">
          <h1>Planes Disponibles</h1>
          <Link to="/PlanesHome">
            <button className="add-button">Agregar Plan</button>
          </Link>
        </div>
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
          height: 100vh;
        }

        .sidebar {
          background-color: #03318c;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          width: 250px;
          box-sizing: border-box;
        }

        .logo {
          display: flex;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .logo-part1 {
          font-family: "Poppins, sans-serif";
          font-weight: 700;
          color: rgba(253,253,253,1);
        }

        .logo-part2 {
          font-family: "Redressed, sans-serif";
          font-weight: 400;
          color: rgba(253,253,253,1);
        }

        .img, .user-img {
          width: 40px;
          height: 40px;
          margin-top: 20px;
        }

        .user-img {
          border: 2px solid rgba(239, 244, 245, 1);
          border-radius: 50%;
        }

        .content {
          flex: 1;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
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
          flex-direction: column;
          gap: 10px;
          width: 100%;
          align-items: center;
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

        @media (max-width: 991px) {
          .sidebar {
            width: 100%;
            height: auto;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            padding: 10px;
          }

          .img, .user-img {
            width: 30px;
            height: 30px;
            margin: 10px;
          }

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
