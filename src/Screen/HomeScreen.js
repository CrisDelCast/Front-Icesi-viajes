import * as React from "react";
import { Link } from 'react-router-dom';



function Home() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'rgba(253,253,253,1)' }}>
              A
            </span>
            <span style={{ fontFamily: 'Redressed, sans-serif', fontWeight: 400, color: 'rgba(253,253,253,1)' }}>
              t
            </span>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e281c1b67a149e4da4884a9c14920c19f8a65bac747ed68fc00216c3d3cd4908?"
            className="img"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2ce713b69d39ccd72fc8d00311fd0ecb34d4cfba5f8a8de7cd90c346a17cc2d?"
            className="img-2"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d19a46c5f17720bd2556764803b6a0a6d2c5898fcf08c91c6917223ae8fe57d?"
            className="img-3"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b0a6c9a00e5345d60a1acf84bc6c3167cfc7d3f2054148dd828d2a2733f55d4?"
            className="img-4"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/59337eadaa12d8be4784fbcb33da7286c99d404104500a9cef8223bf41708342?"
            className="img-5"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="img-6"
          />
          <img
            loading="lazy"
            srcSet="/USER.png"
            className="img-7"
          />
        </div>
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
              <Link to ="/PlanesScreen">
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
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          justify-content: center;
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
        .img-7 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 54px;
          border-color: rgba(239, 244, 245, 1);
          border-style: solid;
          border-width: 2px;
          border-radius: 50%;
          margin-top: 316px;
        }
        @media (max-width: 991px) {
          .img-7 {
            margin-top: 40px;
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
          width: 100%;
          flex-grow: 1;
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
          width: 100%;
          flex-grow: 1;
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
          width: 100%;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img-12 {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
