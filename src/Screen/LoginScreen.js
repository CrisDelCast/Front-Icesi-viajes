import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loginData, setLoginData] = useState({
    login: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(loginData);
      const response = await axios.post('http://localhost:5433/api/usuarios/autenticar', loginData);
      const usuario = response.data;
      console.log('Usuario autenticado:', usuario);

      // Almacenar el token de autenticación y el rol en el localStorage
      localStorage.setItem('token', usuario.token);
      localStorage.setItem('rol', usuario.rol);

      // Redirigir al usuario a la página de inicio correspondiente a su rol
      navigate(getHomePageForRole(usuario.rol));
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      if (error.response && error.response.status === 401) {
        setMessage('Credenciales inválidas');
      } else {
        setMessage('Error de inicio de sesión');
      }
    }
  };

  const getHomePageForRole = (rol) => {
    switch (rol) {
      case 'Administrador':
        return '/home';
      case 'Viewer':
        return '/ViewerHome';
      case 'Agente':
          return '/AgenteHome';
    }
  };

  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">Atlasy</div>
            <div className="div-5">Ingresa a tu cuenta</div>
            <form onSubmit={handleSubmit}>
              <div className="div-6">E-mail</div>
              <input
                type="text"
                name="login"
                value={loginData.login} 
                onChange={handleChange}
                className="div-7"
              />
              <div className="div-8">Contraseña</div>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="div-9"
              />
              <div className="div-6"></div>
              <button type="submit" className="div-10">Ingresar</button>
            </form>
            {message && <div className="error-message">{message}</div>}
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
        .div-6,
        .div-8 {
          color: var(--sgivBlack-900, #0d0c0c);
          margin-top: 29px;
          font: 18px Lato, sans-serif;
        }
        .div-7,
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
          .div-7,
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
          margin-top: 10px; /* Modificado */
          color: var(--White-100, #fdfdfd);
          white-space: nowrap;
          padding: 6px 10px;
          font: 24px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            margin-top: 20px; /* Modificado */
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
          .error-message {
          color: red;
          margin-top: 10px;
        }

      `}</style>
    </>
  );
}

export default Login;