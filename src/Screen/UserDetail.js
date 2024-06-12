import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../Components/NavBar';

function UserDetail() {
  let{id} = useParams();
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const paramValue = new URLSearchParams(window.location.search).get('id');

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get(`http://localhost:5433/api/usuarios/${paramValue}`);
        setUsuario(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!usuario) {
    return <div>No se encontró el usuario.</div>;
  }

  return (
    <>
      <div className="container">
        <NavBar />
        <div className="content">
          <h1>{"Usuario " + usuario.nombre}</h1>
          <table>
            <tbody>
              <tr>
                <td>ID</td>
                <td>{usuario.idUsua}</td>
              </tr>
              <tr>
                <td>Nombre</td>
                <td>{usuario.nombre}</td>
              </tr>
              <tr>
                <td>Login - User</td>
                <td>{usuario.login}</td>
              </tr>
              <tr>
                <td>N° Identificacion</td>
                <td>{usuario.identificacion}</td>
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

export default UserDetail;
