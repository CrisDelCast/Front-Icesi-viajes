import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../Components/NavBar'; 

function ClientesScreen() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get('http://localhost:5433/api/cliente/clientestotal');
        setClientes(response.data);
      } catch (error) {
        setError('Error al obtener los clientes');
        console.error('Error al obtener los clientes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="div">
      <NavBar />
        <div className="div-4">
          <div className="div-5">
            <div className="div-6">
              <div className="div-7">
                <div className="column">
                  <div className="div-8">Clientes</div>
                </div>
                <div className="column-2">
                  <div className="div-9">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a607cc4fa293c01ed5dd163e88b075a599374234daa1888a4c0a14151b422747?" className="img-7" />
                    <div className="div-10">
                      <div className="div-11" />
                    </div>
                    <div className="div-12">
                      <div className="div-13" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-14">
            <div className="table-wrapper">
              <table className="clientes-table">
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>ID</th>
                    <th>Estado</th>
                    <th>Fecha Vinc.</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes.map(cliente => (
                    <tr key={cliente.idClie}>
                      <td>
                        <Link to={`/ClienteEditScreen/?id=${cliente.idClie}`}>{cliente.nombre}</Link>
                      </td>
                      <td>{cliente.idClie}</td>
                      <td>{cliente.estado}</td>
                      <td>{cliente.fechaCreacion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="div-35">
              <img loading="lazy" srcSet="..." className="img-8" />
              <img loading="lazy" srcSet="..." className="img-9" />
              <img loading="lazy" srcSet="..." className="img-10" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: var(--sgivWhite-100, #fdfdfd);
          display: flex;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div {
            flex-wrap: wrap;
          }
        }
        .div-2 {
          align-items: center;
          background-color: #03318c;
          display: flex;
          flex-direction: column;
          font-size: 47px;
          color: var(--sgivWhite-100, #fdfdfd);
          font-weight: 900;
          padding: 30px 20px;
        }
        @media (max-width: 991px) {
          .div-2 {
            display: none;
            font-size: 40px;
          }
        }
        .div-3 {
          font-family: Lato, sans-serif;
          align-self: stretch;
        }
        @media (max-width: 991px) {
          .div-3 {
            font-size: 40px;
          }
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          margin-top: 169px;
        }
        @media (max-width: 991px) {
          .img {
            margin-top: 40px;
          }
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          margin-top: 30px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          margin-top: 30px;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          margin-top: 30px;
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          margin-top: 30px;
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          margin-top: 30px;
        }
        .div-4 {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 75px 0;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
          }
        }
        .div-5 {
          align-items: center;
          display: flex;
          margin-top: 59px;
          justify-content: center;
          padding: 0 60px;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-6 {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
          }
        }
        .div-7 {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }
        .column {
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 16px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .column {
            max-width: 100%;
          }
        }
        .div-8 {
          color: var(--sgivBlue-700, #03318c);
          font: 500 128px Poppins, sans-serif;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          flex: 1;
          max-width: 100%;
        }
        .div-9 {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .img-7 {
          object-fit: cover;
        }
        .div-10 {
          align-items: flex-start;
          border-radius: 50%;
          display: flex;
          justify-content: flex-start;
        }
        .div-11 {
          background-color: #eff4ff;
          display: flex;
          font-size: 12px;
          font-weight: 600;
          padding: 8px 24px;
        }
        .div-12 {
          border-radius: 50%;
          display: flex;
          font-size: 12px;
          font-weight: 600;
          position: absolute;
          flex-direction: column;
          align-items: flex-start;
        }
        .div-13 {
          background-color: #eff4ff;
          display: flex;
          font-size: 12px;
          font-weight: 600;
          padding: 8px 24px;
        }
        .div-14 {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin-top: 19px;
          padding: 0 60px;
          gap: 12px;
        }
        @media (max-width: 991px) {
          .div-14 {
            padding: 0 20px;
          }
        }
        .table-wrapper {
          overflow-x: auto;
        }
        .clientes-table {
          width: 100%;
          border-collapse: collapse;
        }
        .clientes-table th, .clientes-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        .clientes-table th {
          background-color: #f2f2f2;
          color: #333;
        }
        .clientes-table td {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
        }
        .div-35 {
          display: flex;
          flex-direction: column;
          margin-left: 33px;
          gap: 30px;
        }
        .img-8 {
          object-fit: cover;
        }
        .img-9 {
          object-fit: cover;
        }
        .img-10 {
          object-fit: cover;
        }
      `}</style>
    </>
  );
}

export default ClientesScreen;
