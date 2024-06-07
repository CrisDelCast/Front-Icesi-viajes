import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function NavBar() {
  const [rol, setRol] = useState('');

  useEffect(() => {
    // Obtener el rol del usuario desde el localStorage
    const storedRol = localStorage.getItem('rol');
    if (storedRol) {
      setRol(storedRol);
    }
  }, []);

  const handleLogoClick = () => {
    // Redirigir al usuario a la página correspondiente según su rol
    if (rol === 'Administrador') {
      return <Link to="/HomeScreen" />;
    } else if (rol === 'Agente') {
      return <Link to="/AgenteHome" />;
    } else if (rol === 'Viewer') {
      return <Link to="/ViewerHome" />;
    }
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-header" onClick={handleLogoClick}>
          <span className="nav-title-bold">A</span>
          <span className="nav-title-light">t</span>
        </div>
        
        <Link to="/DestinoHome">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0791ec8865c65f2d8e1bc6b80abb74921e9268f4bcc244d7c91456a14552788f?"
            className="nav-icon"
            alt="Icon 1"
          />
        </Link>

        {(rol === 'Administrador' || rol === 'Agente') && (
          <Link to="/ClientesScreen">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f34a1f5e4dbedde619f27c3991cfb66b4683e513de4c1bbac1608fe80f5731e?"
              className="nav-icon"
              alt="Icon 2"
            />
          </Link>
        )}

        {(rol === 'Administrador' || rol === 'Agente') && (
          <Link to="/ReservasScreen">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d4665ad8fe15680a226493199bda22d567f69a56ad0313dc0d0b3ead79b0e4c?"
              className="nav-icon"
              alt="Icon 3"
            />
          </Link>
        )}

        <Link to="/ServiciosScreen">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/de0f415de8cf015bfe2d8f78a67e1f48819af8d99c583ca69932203743342885?"
            className="nav-icon"
            alt="Icon 4"
          />
        </Link>

        <Link to="/PlanesScreen">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/29fd0db5ff96fb23d39652b9c9b1b1f8813f24a5d1b1ed5a426b08f094e42cdf?"
            className="nav-icon"
            alt="Icon 5"
          />
        </Link>

        <img
          loading="lazy"
          src="./PFP.png"
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
          height: 100vh;
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
        .nav-icon-bottom {
          aspect-ratio: 1.08;
          width: 58px;
          border-color: #eff4f5;
          border-style: solid;
          border-width: 2px;
          border-radius: 50%;
          align-self: center;
          margin-top: 100px;
        }
      `}</style>
    </>
  );
}

export default NavBar;
