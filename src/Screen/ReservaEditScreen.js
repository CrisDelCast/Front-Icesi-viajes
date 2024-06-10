import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../Components/NavBar'; 

function ReservaEditScreen() {
  let { id } = useParams();
  const [reserva, setReserva] = useState(null);
  const [loading, setLoading] = useState(true);
  const paramValue = new URLSearchParams(window.location.search).get('id');

  useEffect(() => {
    const fetchReserva = async () => {
      try {
        const response = await axios.get(`http://localhost:5433/api/reservas/${paramValue}`);
        setReserva(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar la reserva :', error);
        setLoading(false);
      }
    };

    fetchReserva();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!reserva) {
    return <div>No se encontró la reserva.</div>;
  }

  return (
    <>
 <div className="container">
        <NavBar />
        <div className="content">
          <h1>{reserva.id}</h1>
          <table>
            <tbody>
              <tr>
                <td>Numero de reserva</td>
                <td>{reserva.id}</td>
              </tr>
              <tr>
                <td>Estado</td>
                <td>{reserva.estado}</td>
              </tr>
              <tr>
                <td>Fecha de inicio</td>
                <td>{reserva.fechaInicio}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          background-color: var(--sgivWhite-100, #fdfdfd);
          gap: 0px;
          height: 100vh;
        }
        .sidebar {
          align-items: center;
          background-color: #03318c;
          display: flex;
          flex-direction: column;
          font-size: 47px;
          color: var(--sgivWhite-100, #fdfdfd);
          font-weight: 900;
          padding: 30px 20px;
          overflow-y: auto;
        }
        .logo {
          font-family: Lato, sans-serif;
          align-self: stretch;
          display: flex;
        }
        .logo-text-1 {
          font-family: "Poppins, sans-serif";
          font-weight: 700;
          color: rgba(253,253,253,1);
        }
        .logo-text-2 {
          font-family: "Redressed, sans-serif";
          font-weight: 400;
          color: rgba(253,253,253,1);
        }
        .sidebar-img {
          width: 40px;
          margin-top: 30px;
          object-fit: auto;
          object-position: center;
        }
        .content {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 75px 20px;
          overflow-y: auto;
        }
        h1 {
          color: var(--dl-color-gray-01, #333);
          font-family: Poppins, sans-serif;
          font-size: 22px;
          font-weight: 700;
          text-align: center;
        }
        table {
          width: 100%;
          margin-top: 20px;
          border-collapse: collapse;
          font-family: Poppins, sans-serif;
        }
        td {
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }
        td:first-child {
          font-weight: 500;
          color: #686868;
        }
        @media (max-width: 991px) {
          .container {
            flex-direction: column;
          }
          .sidebar {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default ReservaEditScreen;