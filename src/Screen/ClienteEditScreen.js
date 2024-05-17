import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ClienteEditScreen() {
  let { id } = useParams();
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);
  const paramValue = new URLSearchParams(window.location.search).get('id');
  

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        console.log("---------"+paramValue);
        const response = await axios.get(`http://localhost:5433/api/cliente/${paramValue}`);
        
        setCliente(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar el cliente:', error);
        setLoading(false);
      }
    };

    fetchCliente();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!cliente) {
    return <div>No se encontró el cliente.</div>;
  }

  return (
    <>
      <div className="div">
        <div className="div-2">
          <Link to="/home">
            <div className="div-3">
              <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "rgba(253,253,253,1)" }}>
                A
              </span>
              <span style={{ fontFamily: "Redressed, sans-serif", fontWeight: 400, color: "rgba(253,253,253,1)" }}>
                t
              </span>
            </div>
          </Link>
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
          <div className="div-5">{cliente.nombre}</div>
          <div className="div-6">
            <div className="div-7">
              <div className="div-8">Nombre Completo</div>
              <div className="div-9">
                <div className="div-10">{cliente.nombre}</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e36374fe98c71f0713b599651304c0cdd70681ae7adf534f9da2c36f226be281?"
                  className="img-8"
                />
              </div>
              <div className="div-11">ID</div>
              <div className="div-12">
                <div className="div-13">{cliente.idClie}</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e36374fe98c71f0713b599651304c0cdd70681ae7adf534f9da2c36f226be281?"
                  className="img-9"
                />
              </div>
              <div className="div-14">Estado</div>
              <div className="div-15">
                <div className="div-16">{cliente.estado}</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e36374fe98c71f0713b599651304c0cdd70681ae7adf534f9da2c36f226be281?"
                  className="img-10"
                />
              </div>
              <div className="div-17">Fecha de Vinculación</div>
              <div className="div-18">
                <div className="div-19">{cliente.fechaCreacion}</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e36374fe98c71f0713b599651304c0cdd70681ae7adf534f9da2c36f226be281?"
                  className="img-11"
                />
              </div>
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
          color: var(--dl-color-gray-01, #333);
          display: flex;
          font-family: Poppins, sans-serif;
          font-size: 22px;
          font-weight: 700;
          justify-content: center;
          line-height: 1.25;
          margin-top: 16px;
          max-width: 100%;
        }
        .div-6 {
          align-items: center;
          display: flex;
          justify-content: center;
          margin-top: 39px;
          padding: 0 60px;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-7 {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 1200px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
          }
        }
        .div-8 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
        }
        .div-9 {
          display: flex;
          align-items: center;
          position: relative;
          gap: 30px;
          margin-top: 9px;
        }
        .div-10 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
        }
        .img-8 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 25px;
        }
        .div-11 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          margin-top: 24px;
        }
        .div-12 {
          display: flex;
          align-items: center;
          position: relative;
          gap: 30px;
          margin-top: 9px;
        }
        .div-13 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
        }
        .img-9 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 25px;
        }
        .div-14 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          margin-top: 24px;
        }
        .div-15 {
          display: flex;
          align-items: center;
          position: relative;
          gap: 30px;
          margin-top: 9px;
        }
        .div-16 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
        }
        .img-10 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 25px;
        }
        .div-17 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          margin-top: 24px;
        }
        .div-18 {
          display: flex;
          align-items: center;
          position: relative;
          gap: 30px;
          margin-top: 9px;
        }
        .div-19 {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
        }
        .img-11 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 25px;
        }
      `}</style>
    </>
  );
}

export default ClienteEditScreen;
 