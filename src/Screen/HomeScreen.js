import React from "react";
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';  // Asegúrate de que la ruta sea correcta

function Home() {
  return (
    <>
      <div className="home-container">
        <NavBar />
        <div className="main-content">
          <div className="div-4">
            <div className="div-5">
              <div className="div-6">
                <div className="div-7">
                  <div className="column">
                    <div className="div-8">ATLASY </div>
                  </div>
                  <div className="column-2">
                    <div className="div-9">
                      <div className="div-10">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-11">
              <div className="div-12">
                <div className="column-5">
                  <Link to="/DestinoHome">
                    <img
                      loading="lazy"
                      src="/DESTINOS.png"
                      className="img-10"
                    />
                  </Link>
                </div>
                <div className="column-6">
                  <Link to="/PlanesScreen">
                    <img
                      loading="lazy"
                      src="/PLANES.png"
                      className="img-11"
                    />
                  </Link>
                </div>
                <div className="column-7">
                  <Link to="/ClientesScreen">
                    <img
                      loading="lazy"
                      srcSet="/CLIENTES.png"
                      className="img-12"
                    />
                  </Link>
                </div>
                {/* Nueva columna para Servicios */}
                <div className="column-8">
                  <Link to="/ServiciosScreen">
                    <img
                      loading="lazy"
                      src="/SERVICIOS.png"
                      className="img-13"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .home-container {
          display: flex;
        }
        .main-content {
          flex: 1;
          justify-content: center;
          background-color: var(--sgivWhite-100, #fdfdfd);
          display: flex;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .main-content {
            flex-wrap: wrap;
          }
        }
        .div-4 {
          justify-content: center;
          background-color: var(--sgivWhite-100, #fdfdfd);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 54px 0;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
          }
        }
        .div-5 {
          justify-content: center;
          align-items: center;
          display: flex;
          padding: 28px 60px;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-6 {
          width: 100%;
          max-width: 1410px;
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
          width: 39%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-8 {
          color: var(--sgivBlue-700, #03318c);
          align-self: stretch;
          margin: auto 0;
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
          width: 61%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-9 {
          justify-content: center;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-10 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-10 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 55%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .img-8 {
          aspect-ratio: 0.77;
          object-fit: auto;
          object-position: center;
          width: 100%;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img-8 {
            margin-top: 40px;
          }
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 45%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .img-9 {
          aspect-ratio: 0.75;
          object-fit: auto;
          object-position: center;
          width: 100%;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img-9 {
            margin-top: 40px;
          }
        }
        .div-11 {
          align-self: center;
          margin-top: 18px;
          width: 100%;
          max-width: 1397px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
          }
        }
        .div-12 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-12 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-5 {
            width: 100%;
          }
        }
        .img-10 {
          aspect-ratio: 0.88;
          object-fit: auto;
          object-position: center;
          width: 95%;
          flex-grow: 1;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .img-10 {
            margin-top: 40px;
          }
        }
        .column-6 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-6 {
            width: 100%;
          }
        }
        .img-11 {
          aspect-ratio: 0.88;
          object-fit: auto;
          object-position: center;
          width: 95%;
          flex-grow: 1;
          margin-left: 10px;
        }
        @media (max-width: 991px) {
          .img-11 {
            margin-top: 40px;
          }
        }
        .column-7 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-7 {
            width: 100%;
          }
        }
        .img-12 {
          aspect-ratio: 0.88;
          object-fit: auto;
          object-position: center;
          width: 95%;
          flex-grow: 1;
          margin-left: 10px;
        }
        @media (max-width: 991px) {
          .img-12 {
            margin-top: 40px;
          }
        }
        .column-8 { /* Nueva clase para la columna de servicios */
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-8 {
            width: 100%;
          }
        }
        .img-13 { /* Nueva clase para la imagen de servicios */
          aspect-ratio: 0.88;
          object-fit: auto;
          object-position: center;
          width: 95%;
          flex-grow: 1;
          margin-left: 10px;
          
        }
        @media (max-width: 991px) {
          .img-13 {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
