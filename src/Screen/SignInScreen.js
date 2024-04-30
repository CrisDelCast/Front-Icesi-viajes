import * as React from "react";

function SignIn() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="column">
              <div className="div-4">
                <div className="div-5">Atlasy</div>
                <div className="div-6">Registrate</div>
                <div className="div-7">E-mail</div>
                <div className="div-8">mi.correo@mail.com</div>
                <div className="div-9">Contraseña</div>
                <div className="div-10">contraseña-segura</div>
                <div className="div-11">
                  <div className="div-12">Registrarse</div>
                  <div className="div-13">
                  <span style={{ color: 'rgba(13,12,12,1)' }}>
                    Ya tienes una cuenta?
                  </span>{" "}
                  <span style={{ color: 'rgba(3,49,140,1)' }}>Ingresa Aquí</span>
                </div>
                </div>
              </div>
            </div>
            <div className="column-2">
              <div className="div-14">
                <img
                loading="lazy"
                src="/PAISAJE.png"
                alt="Descripción de la imagen"
                className="img"
                style={{ maxWidth: "50%", height: "auto", maxHeight: "740px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          justify-content: space-between;
          align-items: center;
          background-color: var(--White-100, #fdfdfd);
          display: flex;
          flex-direction: column;
          padding: 45px 50px 35px 60px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          margin-top: 31px;
          width: 100%;
          max-width: 1699px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
          }
        }
        .div-3 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-3 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 31%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-4 {
          display: flex;
          padding-bottom: 80px;
          flex-direction: column;
          align-self: stretch;
          font-weight: 400;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-5 {
          color: var(--sgivBlack-900, #0d0c0c);
          align-self: center;
          font: 500 70px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-5 {
            font-size: 40px;
          }
        }
        .div-6 {
          color: var(--sgivBlack-900, #0d0c0c);
          align-self: center;
          margin-top: 65px;
          font: 40px Lato, sans-serif;
        }
        @media (max-width: 991px) {
          .div-6 {
            margin-top: 40px;
          }
        }
        .div-7 {
          color: var(--sgivBlack-900, #0d0c0c);
          margin-top: 65px;
          font: 20px Lato, sans-serif;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-8 {
          align-items: start;
          border-radius: 10px;
          border-color: rgba(194, 196, 196, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--Gray-100, #eff4f5);
          margin-top: 28px;
          color: var(--sgivGray-400, #c2c4c4);
          white-space: nowrap;
          justify-content: center;
          padding: 9px 20px;
          font: 20px Lato, sans-serif;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
            white-space: initial;
          }
        }
        .div-9 {
          color: var(--sgivBlack-900, #0d0c0c);
          margin-top: 28px;
          font: 20px Lato, sans-serif;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
          }
        }
        .div-10 {
          align-items: start;
          border-radius: 10px;
          border-color: rgba(194, 196, 196, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--Gray-100, #eff4f5);
          margin-top: 28px;
          color: var(--sgivGray-400, #c2c4c4);
          white-space: nowrap;
          justify-content: center;
          padding: 8px 20px;
          font: 20px Lato, sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            max-width: 100%;
            white-space: initial;
          }
        }
        .div-11 {
          justify-content: center;
          display: flex;
          margin-top: 65px;
          flex-direction: column;
          padding: 13px 34px 13px 31px;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-12 {
          justify-content: center;
          border-radius: 10px;
          background-color: var(--sgivBlue-700, #03318c);
          align-self: center;
          color: var(--White-100, #fdfdfd);
          white-space: nowrap;
          padding: 6px 10px;
          font: 24px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-12 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-13 {
          color: var(--sgivBlue-700, #03318c);
          margin: 30px 12px 0;
          font: 18px Lato, sans-serif;
        }
        @media (max-width: 991px) {
          .div-13 {
            margin: 0 10px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 69%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-14 {
          align-items: center;
          border-radius: var(--Border-radious-strong, 40px);
          background-color: #fff;
          display: flex;
          flex-grow: 1;
          justify-content: center;
          width: 100%;
          padding: 10px 26px;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .img {
          aspect-ratio: 0.77;
          object-fit: auto;
          object-position: center;
          width: 648px;
          max-width: 100%;
        }
      `}</style>
    </>
  );
}

export default SignIn;


