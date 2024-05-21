import * as React from "react";
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar'; 

function DestinoHome() {
  return (
    <>
      <div className="div">
      <NavBar />
        <div className="div-4">
          <div className="div-5">
            <div className="div-6">
              <div className="div-7">
                <div className="column">
                  <div className="div-8">Destinos</div>
                </div>
                <div className="column-2" />
                <div className="div-18">
        <div className="div-19">
          <div className="div-20">Buscar</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a607cc4fa293c01ed5dd163e88b075a599374234daa1888a4c0a14151b422747?"
            className="img"
          />
        </div>
        <div className="div-21">
          <div className="div-22">Filtrar</div>
          <div className="div-23">
            <Link to="/DestinoFilter"><div className="div-24">f</div></Link>
          </div>
        </div>
        <div className="div-25">
          <div className="div-26">Agregar</div>
          <div className="div-27">
          <Link to="/DestinoAdd"><div className="div-28">+</div></Link>
          </div>
        </div>
      </div>
              </div>
            </div>
          </div>
          <div className="div-9">
            <div className="div-10">
              <div className="div-11">
                <div className="column-3">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="img-8"
                  />
                </div>
                <div className="column-4">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="img-9"
                  />
                </div>
                <div className="column-5">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="img-10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="div-12">
            <div className="div-13">
              <div className="div-14">
                <div className="column-6">
                  <div className="div-15" />
                </div>
                <div className="column-7">
                  <div className="div-16" />
                </div>
                <div className="column-8">
                  <div className="div-17" />
                </div>
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
          padding-top: 80px;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          flex: 1;
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
          max-width: 1411px;
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
          font: 500 128px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
            margin-top: 10px;
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
          align-items: center;
          display: flex;
          margin-top: 75px;
          padding: 0 60px;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-10 {
          width: 100%;
          max-width: 1397px;
        }
        @media (max-width: 991px) {
          .div-10 {
            max-width: 100%;
          }
        }
        .div-11 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-11 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .img-8 {
          aspect-ratio: 0.88;
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
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .img-9 {
          aspect-ratio: 0.88;
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
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
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
        .div-12 {
          justify-content: center;
          align-items: center;
          display: flex;
          margin-top: 75px;
          padding: 0 60px;
        }
        @media (max-width: 991px) {
          .div-12 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-13 {
          width: 100%;
          max-width: 1397px;
        }
        @media (max-width: 991px) {
          .div-13 {
            max-width: 100%;
          }
        }
        .div-14 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-14 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-6 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-6 {
            width: 100%;
          }
        }
        .div-15 {
          display: flex;
          flex-grow: 1;
          padding-top: 31px;
          flex-direction: column;
          font-weight: 500;
        }
        @media (max-width: 991px) {
          .div-15 {
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
        .div-16 {
          display: flex;
          flex-grow: 1;
          padding-top: 31px;
          flex-direction: column;
          font-weight: 500;
        }
        @media (max-width: 991px) {
          .div-16 {
            margin-top: 40px;
          }
        }
        .column-8 {
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
        .div-17 {
          display: flex;
          flex-grow: 1;
          padding-top: 31px;
          flex-direction: column;
          font-weight: 500;
        }
        @media (max-width: 991px) {
          .div-17 {
            margin-top: 40px;
          }
        }

        .div-18 {
          justify-content: end;
          display: flex;
          max-width: 848px;
          padding-left: 80px;
          gap: 20px;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-18 {
            flex-wrap: wrap;
            padding-left: 20px;
            white-space: initial;
          }
        }
        .div-19 {
          justify-content: center;
          display: flex;
          gap: 10px;
          font-size: 40px;
          color: #000;
          font-weight: 400;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-19 {
            white-space: initial;
          }
        }
        .div-20 {
          font-family: Lato, sans-serif;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          margin: auto 0;
        }
        .div-21 {
          justify-content: center;
          display: flex;
          gap: 10px;
        }
        @media (max-width: 991px) {
          .div-21 {
            white-space: initial;
          }
        }
        .div-22 {
          color: #000;
          margin: auto 0;
          font: 400 40px Lato, sans-serif;
        }
        .div-23 {
          display: flex;
          flex-direction: column;
          font-size: 48px;
          color: var(--sgivBlue-700, #03318c);
          font-weight: 500;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-23 {
            font-size: 40px;
            white-space: initial;
          }
        }
        .div-24 {
          font-family: Poppins, sans-serif;
          filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
          background-color: var(--sgivWhite-100, #fdfdfd);
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          width: 89px;
          height: 89px;
          padding: 0 26px;
          display:flex;
        }
        @media (max-width: 991px) {
          .div-24 {
            font-size: 40px;
            white-space: center;
            padding: 0 20px;
            
          }
        }
        .div-25 {
          justify-content: center;
          display: flex;
          gap: 10px;
        }
        @media (max-width: 991px) {
          .div-25 {
            white-space: initial;
          }
        }
        .div-26 {
          color: #000;
          margin: auto 0;
          font: 400 40px Lato, sans-serif;
        }
        .div-27 {
          display: flex;
          flex-direction: column;
          font-size: 48px;
          color: var(--sgivBlue-700, #03318c);
          font-weight: 500;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-27 {
            font-size: 40px;
            white-space: initial;
          }
        }
        .div-28 {
          font-family: Poppins, sans-serif;
          filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
          background-color: var(--sgivWhite-100, #fdfdfd);
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          width: 89px;
          height: 89px;
          padding: 0 26px;
          display:flex;
        }
        @media (max-width: 991px) {
          .div-28 {
            font-size: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}
export default DestinoHome;



function busqueda() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">Buscar</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a607cc4fa293c01ed5dd163e88b075a599374234daa1888a4c0a14151b422747?"
            className="img"
          />
        </div>
        <div className="div-4">
          <div className="div-5">Filtrar</div>
          <div className="div-6">
            <div className="div-7">f</div>
          </div>
        </div>
        <div className="div-8">
          <div className="div-9">Agregar</div>
          <div className="div-10">
            <div className="div-11">+</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          justify-content: end;
          display: flex;
          max-width: 848px;
          padding-left: 80px;
          gap: 20px;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div {
            flex-wrap: wrap;
            padding-left: 20px;
            white-space: initial;
          }
        }
        .div-2 {
          justify-content: center;
          display: flex;
          gap: 10px;
          font-size: 40px;
          color: #000;
          font-weight: 400;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-2 {
            white-space: initial;
          }
        }
        .div-3 {
          font-family: Lato, sans-serif;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          margin: auto 0;
        }
        .div-4 {
          justify-content: center;
          display: flex;
          gap: 10px;
        }
        @media (max-width: 991px) {
          .div-4 {
            white-space: initial;
          }
        }
        .div-5 {
          color: #000;
          margin: auto 0;
          font: 400 40px Lato, sans-serif;
        }
        .div-6 {
          display: flex;
          flex-direction: column;
          font-size: 48px;
          color: var(--sgivBlue-700, #03318c);
          font-weight: 500;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-6 {
            font-size: 40px;
            white-space: initial;
          }
        }
        .div-7 {
          font-family: Poppins, sans-serif;
          filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
          background-color: var(--sgivWhite-100, #fdfdfd);
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          width: 89px;
          height: 89px;
          padding: 0 26px;
        }
        @media (max-width: 991px) {
          .div-7 {
            font-size: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-8 {
          justify-content: center;
          display: flex;
          gap: 10px;
        }
        @media (max-width: 991px) {
          .div-8 {
            white-space: initial;
          }
        }
        .div-9 {
          color: #000;
          margin: auto 0;
          font: 400 40px Lato, sans-serif;
        }
        .div-10 {
          display: flex;
          flex-direction: column;
          font-size: 48px;
          color: var(--sgivBlue-700, #03318c);
          font-weight: 500;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-10 {
            font-size: 40px;
            white-space: initial;
          }
        }
        .div-11 {
          font-family: Poppins, sans-serif;
          filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
          background-color: var(--sgivWhite-100, #fdfdfd);
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          width: 89px;
          height: 89px;
          padding: 0 26px;
        }
        @media (max-width: 991px) {
          .div-11 {
            font-size: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}



