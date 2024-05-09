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
                <Link to={`/ClienteEditScreen`} key={cliente.idClie}>
                  <div className="div-17">{cliente.nombre}</div>
                </Link>
              ))}

            </div>
            <div className="div-20">
                <div className="div-21">ID</div>
                {clientes.map(cliente => (
                <div key={cliente.id} className="div-22">{cliente.idClie}</div>
                ))}
            </div>
            <div className="div-25">
                <div className="div-26">Estado</div>
                {clientes.map(cliente => (
                <div key={cliente.id} className="div-27">{cliente.estado}</div>
                ))}
            </div>
            <div className="div-30">
                <div className="div-31">Fecha Vinc.</div>
                {clientes.map(cliente => (
                <div key={cliente.id} className="div-32">{cliente.fechaCreacion}</div>
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
          max-width: 1418px;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
          }
        }
        .div-7 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-7 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 38%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-8 {
          color: var(--sgivBlue-700, #03318c);
          font: 500 128px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
            margin-top: 40px;
            font-size: 40px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 62%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-9 {
          justify-content: end;
          display: flex;
          padding-left: 80px;
          gap: 20px;
          align-self: stretch;
          white-space: nowrap;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-9 {
            margin-top: 40px;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          margin: auto 0;
        }
        .div-10 {
          justify-content: center;
          display: flex;
          gap: 10px;
        }
        @media (max-width: 991px) {
          .div-10 {
            white-space: initial;
          }
        }
        .div-11 {
          display: flex;
          flex-direction: column;
          font-size: 48px;
          color: var(--sgivBlue-700, #03318c);
          font-weight: 500;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-11 {
            font-size: 40px;
            white-space: initial;
          }
        }
        .div-12 {
          justify-content: center;
          display: flex;
          gap: 10px;
        }
        @media (max-width: 991px) {
          .div-12 {
            white-space: initial;
          }
        }
        .div-13 {
          display: flex;
          flex-direction: column;
          font-size: 48px;
          color: var(--sgivBlue-700, #03318c);
          font-weight: 500;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-13 {
            font-size: 40px;
            white-space: initial;
          }
        }
        .div-14 {
          align-self: center;
          display: flex;
          margin-top: 75px;
          width: 1174px;
          max-width: 100%;
          gap: 20px;
          justify-content: space-between;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-14 {
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .div-15 {
          justify-content: center;
          display: flex;
          flex-direction: column;
          font-size: 40px;
          color: var(--sgivBlack-900, #0d0c0c);
          font-weight: 400;
        }
        .div-16 {
          color: var(--sgivBlue-700, #03318c);
          font-family: Lato, sans-serif;
        }
        .div-17 {
          font-family: Lato, sans-serif;
          margin: 40px 28px 0 0;
        }
        @media (max-width: 991px) {
          .div-17 {
            margin-right: 10px;
          }
        }
        .div-18 {
          font-family: Lato, sans-serif;
          margin-top: 40px;
        }
        .div-19 {
          font-family: Lato, sans-serif;
          margin-top: 40px;
        }
        .div-20 {
          justify-content: center;
          display: flex;
          flex-direction: column;
          font-size: 40px;
          color: var(--sgivBlack-900, #0d0c0c);
          font-weight: 400;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-20 {
            white-space: initial;
          }
        }
        .div-21 {
          color: var(--sgivBlue-700, #03318c);
          font-family: Lato, sans-serif;
        }
        .div-22 {
          font-family: Lato, sans-serif;
          margin-top: 40px;
        }
        .div-23 {
          font-family: Lato, sans-serif;
          margin-top: 40px;
        }
        .div-24 {
          font-family: Lato, sans-serif;
          margin-top: 40px;
        }
        .div-25 {
          justify-content: center;
          display: flex;
          flex-direction: column;
          font-size: 40px;
          color: var(--sgivBlack-900, #0d0c0c);
          font-weight: 400;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-25 {
            white-space: initial;
          }
        }
        .div-26 {
          color: var(--sgivBlue-700, #03318c);
          font-family: Lato, sans-serif;
        }
        .div-27 {
          font-family: Lato, sans-serif;
          margin-top: 40px;
        }
        .div-28 {
          color: var(--sgivGray-400, #c2c4c4);
          font-family: Lato, sans-serif;
          margin-top: 40px;
        }
        .div-29 {
          font-family: Lato, sans-serif;
          margin-top: 40px;
        }
        .div-30 {
          justify-content: center;
          display: flex;
          flex-direction: column;
          font-size: 40px;
          color: var(--sgivBlack-900, #0d0c0c);
          font-weight: 400;
        }
        .div-31 {
          color: var(--sgivBlue-700, #03318c);
          font-family: Lato, sans-serif;
        }
        .div-32 {
          font-family: Lato, sans-serif;
          margin-top: 40px;
        }
        .div-33 {
          font-family: Lato, sans-serif;
          margin-top: 40px;
        }
        .div-34 {
          font-family: Lato, sans-serif;
          margin-top: 40px;
        }
        .div-35 {
          justify-content: center;
          align-items: center;
          display: flex;
          padding-top: 80px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-35 {
            display: none;
          }
        }
        .img-8 {
          aspect-ratio: 0.88;
          object-fit: auto;
          object-position: center;
          width: 42px;
          margin-top: 8px;
        }
        .img-9 {
          aspect-ratio: 0.88;
          object-fit: auto;
          object-position: center;
          width: 42px;
          margin-top: 40px;
        }
        .img-10 {
          aspect-ratio: 0.88;
          object-fit: auto;
          object-position: center;
          width: 42px;
          margin-top: 40px;
        }
      `}</style>
    </>
  );
}

export default ClientesScreen;


