import * as React from "react";

function MyComponent() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">Atlasy</div>
            <div className="div-5">Ingresa a tu cuenta</div>
            <div className="div-6">E-mail</div>
            <div className="div-7">mi.correo@mail.com</div>
            <div className="div-8">Contraseña</div>
            <div className="div-9">contraseña-segura</div>
            <div className="div-10">Ingresa</div>
            <div className="div-11">
              <div className="div-12">
                <div className="div-13" />
                <div className="div-14">Recordar contraseña</div>
              </div>
              <div className="div-15">¿Olvidaste tu contraseña?</div>
            </div>
          </div>
          <img
            loading="lazy"
            src="/ALA.png"
            alt="Descripción de la imagen"
            className="img"
            style={{ maxWidth: "50%", height: "auto", maxHeight: "740px" }}
          />

        </div>
      </div>
      <style jsx>{`
        .div {
          justify-content: space-between;
          align-items: center;
          background-color: var(--sgivWhite-100, #fdfdfd);
          display: flex;
          flex-direction: column;
          font-weight: 400;
          padding: 45px 50px 35px 60px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          display: flex;
          margin-top: 45px;
          width: 100%;
          max-width: 1474px;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .div-3 {
          display: flex;
          margin-top: 5px;
          flex-direction: column;
          padding: 20px 16px;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
          }
        }
        .div-4 {
          color: var(--sgivBlack-900, #0d0c0c);
          align-self: center;
          font: 500 70px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-4 {
            font-size: 40px;
          }
        }
        .div-5 {
          color: var(--sgivBlack-900, #0d0c0c);
          margin: 45px 27px 0;
          font: 44px Lato, sans-serif;
        }
        @media (max-width: 991px) {
          .div-5 {
            margin: 40px 10px 0;
          }
        }
        .div-6 {
          color: var(--sgivBlack-900, #0d0c0c);
          margin-top: 51px;
          font: 18px Lato, sans-serif;
        }
        @media (max-width: 991px) {
          .div-6 {
            margin-top: 40px;
          }
        }
        .div-7 {
          align-items: start;
          border-radius: 11.009px;
          border-color: rgba(194, 196, 196, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--sgivWhite-100, #fdfdfd);
          margin-top: 28px;
          color: var(--sgivGray-400, #c2c4c4);
          white-space: nowrap;
          justify-content: center;
          padding: 10px 22px;
          font: 20px Lato, sans-serif;
        }
        @media (max-width: 991px) {
          .div-7 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-8 {
          color: var(--sgivBlack-900, #0d0c0c);
          margin-top: 29px;
          font: 18px Lato, sans-serif;
        }
        .div-9 {
          align-items: start;
          border-radius: 11.009px;
          border-color: rgba(194, 196, 196, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--sgivWhite-100, #fdfdfd);
          margin-top: 28px;
          color: var(--sgivGray-400, #c2c4c4);
          white-space: nowrap;
          justify-content: center;
          padding: 10px 22px;
          font: 20px Lato, sans-serif;
        }
        @media (max-width: 991px) {
          .div-9 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-10 {
          justify-content: center;
          border-radius: 10px;
          background-color: var(--sgivBlue-700, #03318c);
          align-self: center;
          margin-top: 68px;
          color: var(--White-100, #fdfdfd);
          white-space: nowrap;
          padding: 6px 10px;
          font: 24px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            margin-top: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-11 {
          justify-content: center;
          display: flex;
          margin-top: 56px;
          width: 100%;
          gap: 20px;
          font-size: 14px;
          padding: 5px 4px;
        }
        @media (max-width: 991px) {
          .div-11 {
            margin-top: 40px;
          }
        }
        .div-12 {
          justify-content: center;
          display: flex;
          gap: 5px;
          color: #000;
        }
        .div-13 {
          border-radius: 5px;
          border-color: rgba(194, 196, 196, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--sgivWhite-100, #fdfdfd);
          width: 27px;
          height: 27px;
        }
        .div-14 {
          font-family: Lato, sans-serif;
          margin: auto 0;
        }
        .div-15 {
          color: var(--sgivBlue-700, #03318c);
          font-family: Lato, sans-serif;
          margin: auto 0;
        }
        .img {
          aspect-ratio: 0.77;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        @media (max-width: 991px) {
          .img {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default MyComponent;
