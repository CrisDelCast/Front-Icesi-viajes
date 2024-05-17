import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        <div className="div-2">
          <Link to="/home"><div className="div-3">
            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "rgba(253,253,253,1)" }}>
              A
            </span>
            <span style={{ fontFamily: "Redressed, sans-serif", fontWeight: 400, color: "rgba(253,253,253,1)" }}>
              t
            </span>
          </div></Link>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b247f7b4893c631e3de103969e2913c0a36ebe731eaa074f71ee0c638ba2a4bf?"
            className="img"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e2079a85e87fe28ef3da96d440df0921f278f613b3d3ec472d40d0aec4042b5?"
            className="img-2"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1abd72088f4cccca48528fe56d5bff40fbc4093915d9b86a4b2e62cd7cd3c55?"
            className="img-3"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9e285f278ad0e522613b700338b6d9c2a5dd473b518cfcceb9127534efc9727?"
            className="img-4"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2443a2c0f42ded4de666d7ef9824c3654fa1e4c94742127e0e2be5b5e62b1a88?"
            className="img-5"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="img-6"
          />
        </div>
        <div className="div-4">
          <div className="div-5">
            <div className="div-6">
              <div className="div-7">
                <div className="column">
                  <div className="div-8">Clientes</div>
                </div>
                <div className="column-2">
                  <div className="div-9">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a607cc4fa293c01ed5dd163e88b075a599374234daa1888a4c0a14151b422747?"
                      className="img-7"
                    />
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
            <div className="div-15">
              <div className="div-16">Cliente</div>
              {clientes.map(cliente => (
                <Link to={`/ClienteEditScreen/?id=${cliente.idClie}`} key={cliente.idClie}>
                  <div className="div-17">{cliente.nombre}</div>
                </Link>
              ))}
            </div>
            <div className="div-20">
              <div className="div-21">ID</div>
              {clientes.map(cliente => (
                <div key={cliente.idClie} className="div-22">{cliente.idClie}</div>
              ))}
            </div>
            <div className="div-25">
              <div className="div-26">Estado</div>
              {clientes.map(cliente => (
                <div key={cliente.idClie} className="div-27">{cliente.estado}</div>
              ))}
            </div>
            <div className="div-30">
              <div className="div-31">Fecha Vinc.</div>
              {clientes.map(cliente => (
                <div key={cliente.idClie} className="div-32">{cliente.fechaCreacion}</div>
              ))}
            </div>
            <div className="div-35">
              <img
                loading="lazy"
                srcSet="..."
                className="img-8"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="img-9"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="img-10"
              />
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
          color: var(--dl-color-gray-01, #333);
          font-family: Poppins, sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.25;
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
          flex-direction: row;
          justify-content: flex-start;
          margin-top: 19px;
          padding: 0 60px;
          gap: 12px;
        }
        .div-15 {
          align-items: flex-start;
          display: flex;
          flex: 1;
          flex-direction: column;
          max-width: 100%;
        }
        .div-16 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
        }
        .div-17 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          margin-top: 9px;
        }
        .div-20 {
          align-items: flex-start;
          display: flex;
          flex: 1;
          flex-direction: column;
          max-width: 100%;
        }
        .div-21 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
        }
        .div-22 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          margin-top: 9px;
        }
        .div-25 {
          align-items: flex-start;
          display: flex;
          flex: 1;
          flex-direction: column;
          max-width: 100%;
        }
        .div-26 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
        }
        .div-27 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          margin-top: 9px;
        }
        .div-30 {
          align-items: flex-start;
          display: flex;
          flex: 1;
          flex-direction: column;
          max-width: 100%;
        }
        .div-31 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
        }
        .div-32 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          margin-top: 9px;
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