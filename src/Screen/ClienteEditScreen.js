import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function ClienteEditScreen() {

    const { id } = useParams(); // Obtener el ID del cliente de la URL
    const [cliente, setCliente] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchCliente = async () => {
        try {
          const response = await axios.get(`http://localhost:5433/api/cliente/${id}`);
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0791ec8865c65f2d8e1bc6b80abb74921e9268f4bcc244d7c91456a14552788f?"
            className="img"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f34a1f5e4dbedde619f27c3991cfb66b4683e513de4c1bbac1608fe80f5731e?"
            className="img-2"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d4665ad8fe15680a226493199bda22d567f69a56ad0313dc0d0b3ead79b0e4c?"
            className="img-3"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/71d9a946d7fec0e636147625bf8ac4ebf9a9e16b1c84d8e8cd95a95c1d1f0569?"
            className="img-4"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/29fd0db5ff96fb23d39652b9c9b1b1f8813f24a5d1b1ed5a426b08f094e42cdf?"
            className="img-5"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="img-6"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="img-7"
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
              <div className="div-11">ID </div>
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
            </div>
            <div className="div-17">
              <img
                loading="lazy"
                srcSet="..."
                className="img-11"
              />
              <div className="div-18">Guardar</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: var(--sgivWhite-100, #fdfdfd);
          display: flex;
          gap: 20px;
          justify-content: space-between;
          margin-left: -1px;
        }
        @media (max-width: 991px) {
          .div {
            flex-wrap: wrap;
          }
        }
        .div-2 {
          align-items: start;
          background-color: #03318c;
          display: flex;
          flex-direction: column;
          font-size: 47px;
          color: var(--sgivWhite-100, #fdfdfd);
          font-weight: 900;
          padding: 30px 22px;
        }
        @media (max-width: 991px) {
          .div-2 {
            display: none;
            font-size: 40px;
            padding: 0 20px;
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
        .img-7 {
          aspect-ratio: 1.08;
          object-fit: auto;
          object-position: center;
          width: 58px;
          border-color: rgba(239, 244, 245, 1);
          border-style: solid;
          border-width: 2px;
          border-radius: 50%;
          align-self: center;
          margin-top: 316px;
        }
        @media (max-width: 991px) {
          .img-7 {
            margin-top: 40px;
          }
        }
        .div-4 {
          justify-content: center;
          display: flex;
          flex-direction: column;
          margin: auto 0;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
          }
        }
        .div-5 {
          color: var(--Black-900, #121211);
          font: 500 64px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
            font-size: 40px;
          }
        }
        .div-6 {
          align-content: center;
          flex-wrap: wrap;
          display: flex;
          margin-top: 53px;
          padding-right: 5px;
          gap: 20px;
          font-size: 24px;
          font-weight: 400;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
            padding-right: 20px;
            margin-top: 40px;
          }
        }
        .div-7 {
          display: flex;
          flex-direction: column;
          color: var(--sgivBlue-700, #03318c);
          margin: auto 0;
        }
        .div-8 {
          font-family: Poppins, sans-serif;
        }
        .div-9 {
          display: flex;
          margin-top: 10px;
          padding-right: 17px;
          gap: 20px;
          color: var(--sgivBlack-900, #0d0c0c);
          justify-content: space-between;
        }
        .div-10 {
          font-family: Poppins, sans-serif;
        }
        .img-8 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 23px;
          fill: #000;
          margin: auto 0;
        }
        .div-11 {
          font-family: Poppins, sans-serif;
          margin-top: 40px;
        }
        .div-12 {
          display: flex;
          margin-top: 10px;
          padding-right: 17px;
          gap: 20px;
          color: var(--sgivBlack-900, #0d0c0c);
          white-space: nowrap;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-12 {
            white-space: initial;
          }
        }
        .div-13 {
          font-family: Poppins, sans-serif;
        }
        .img-9 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 23px;
          fill: #000;
          margin: auto 0;
        }
        .div-14 {
          font-family: Poppins, sans-serif;
          margin-top: 40px;
        }
        .div-15 {
          display: flex;
          margin-top: 10px;
          padding-right: 17px;
          gap: 20px;
          color: var(--sgivBlack-900, #0d0c0c);
          white-space: nowrap;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-15 {
            white-space: initial;
          }
        }
        .div-16 {
          font-family: Poppins, sans-serif;
        }
        .img-10 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 23px;
          fill: #000;
          margin: auto 0;
        }
        .div-17 {
          justify-content: center;
          display: flex;
          flex-direction: column;
          color: var(--White-100, #fdfdfd);
          white-space: nowrap;
          padding: 56px 34px 0;
        }
        @media (max-width: 991px) {
          .div-17 {
            max-width: 100%;
            white-space: initial;
            padding: 0 20px;
          }
        }
        .img-11 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .div-18 {
          font-family: Poppins, sans-serif;
          justify-content: center;
          border-radius: 10px;
          background-color: var(--sgivBlue-700, #03318c);
          align-self: center;
          margin-top: 97px;
          padding: 6px 10px;
        }
        @media (max-width: 991px) {
          .div-18 {
            margin-top: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}
export default ClienteEditScreen;


