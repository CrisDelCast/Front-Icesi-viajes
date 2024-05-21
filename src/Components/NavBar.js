import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-header">
          <span className="nav-title">
            <span className="nav-title-bold">A</span>
            <span className="nav-title-light">t</span>
          </span>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0791ec8865c65f2d8e1bc6b80abb74921e9268f4bcc244d7c91456a14552788f?"
          className="nav-icon"
          alt="Icon 1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f34a1f5e4dbedde619f27c3991cfb66b4683e513de4c1bbac1608fe80f5731e?"
          className="nav-icon"
          alt="Icon 2"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d4665ad8fe15680a226493199bda22d567f69a56ad0313dc0d0b3ead79b0e4c?"
          className="nav-icon"
          alt="Icon 3"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/de0f415de8cf015bfe2d8f78a67e1f48819af8d99c583ca69932203743342885?"
          className="nav-icon"
          alt="Icon 4"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/29fd0db5ff96fb23d39652b9c9b1b1f8813f24a5d1b1ed5a426b08f094e42cdf?"
          className="nav-icon"
          alt="Icon 5"
        />
        <img
          loading="lazy"
          srcSet="..."
          className="nav-icon"
        />
        <img
          loading="lazy"
          srcSet="..."
          className="nav-icon nav-icon-bottom"
        />
      </div>
      <style jsx>{`
        .nav-container {
          align-items: center;
          background-color: #03318c;
          display: flex;
          flex-direction: column;
          font-size: 47px;
          color: #fdfdfd;
          font-weight: 900;
          padding: 30px 22px;
          width: 50px;
          max-width: 100px; /* Ancho máximo ajustado */
          margin: auto; /* Centrar la barra de navegación */

        }
        @media (max-width: 991px) {
          .nav-container {
            display: none;
          }
        }
        .nav-header {
          font-family: Lato, sans-serif;
          align-self: stretch;
          display: flex;
          align-items: center;
        }
        .nav-title {
          display: flex;
        }
        .nav-title-bold {
          font-family: Poppins, sans-serif;
          font-weight: 700;
          color: #fdfdfd;
        }
        .nav-title-light {
          font-family: Redressed, sans-serif;
          font-weight: 400;
          color: #fdfdfd;
        }
        .nav-icon {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 40px;
          margin-top: 30px;
        }
        .nav-icon:first-of-type {
          margin-top: 169px;
        }
        .nav-icon-bottom {
          aspect-ratio: 1.08;
          width: 58px;
          border-color: #eff4f5;
          border-style: solid;
          border-width: 2px;
          border-radius: 50%;
          align-self: center;
          margin-top: 316px;
        }
      `}</style>
    </>
  );
}

export default NavBar;
