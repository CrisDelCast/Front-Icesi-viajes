import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';

function UserAdd() {
  const [userData, setUserData] = useState({
    login: '',
    password: '',
    nombre: '',
    identificacion: '',
    estado: '',
    rol:'',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserData((prevState) => ({
      ...prevState,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(userData).forEach((key) => {
        formData.append(key, userData[key]);
      });

      const response = await axios.post(
        'http://localhost:5433/api/usuarios/crear',
        formData,   
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Establecer el tipo de contenido como multipart/form-data
          },
        }
      );
      setMessage('Usuario creado exitosamente');
      navigate('/UserHome');
    } catch (error) {
      console.error('Error al crear Usuario:', error);
      setMessage('Error al crear Usuario');
    }
  };


  return (
    <>
      <div className="Usuarioadd-container">
        <NavBar />
        <div className="main-content">
          <div className="form-container">
            <div className="form-title">Crear Usuario</div>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label className="form-label">nombre login </label>
                <input
                  type="text"
                  name="nombre login"
                  value={userData.login}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">contraseña</label>
                <input
                  type="text"
                  name="contraseña"
                  value={userData.password}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">nombre </label>
                <input
                  type="text"
                  name="nombre"
                  value={userData.nombre}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Identificacion</label>
                <input
                  type="text"
                  name="Identificacion"
                  value={userData.identificacion}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Estado</label>
                <select
                  name="estado"
                  value={userData.estado}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Seleccione el estado</option>
                  <option value="A">activo</option>
                  <option value="I">inactivo</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">rol</label>
                <select
                  name="rol"
                  value={userData.rol}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Seleccione el rol</option>
                  <option value="V">viewer</option>
                  <option value="G">agente</option>
                  <option value="A">admin</option>
                </select>
              </div>
              
              
                            
              <button type="submit" className="form-button">Crear User</button>
            </form>
            {message && <div className="form-message">{message}</div>}
          </div>
        </div>
      </div>
      <style jsx>{`
                .clienteadd-container {
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
                .form-container {
                  justify-content: center;
                  background-color: var(--sgivWhite-100, #fdfdfd);
                  display: flex;
                  flex-direction: column;
                  flex: 1;
                  padding: 54px 0;
                }
                @media (max-width: 991px) {
                  .form-container {
                    max-width: 100%;
                  }
                }
                .form-title {
                  color: var(--sgivBlack-900, #0d0c0c);
                  align-self: center;
                  font: 500 70px Poppins, sans-serif;
                }
                @media (max-width: 991px) {
                  .form-title {
                    font-size: 40px;
                  }
                }
                .form {
                  display: flex;
                  flex-direction: column;
                  padding: 28px 60px;
                }
                @media (max-width: 991px) {
                  .form {
                    max-width: 100%;
                    padding: 0 20px;
                  }
                }
                .form-group {
                  margin-top: 20px;
                }
                .form-label {
                  color: var(--sgivBlack-900, #0d0c0c);
                  font: 18px Lato, sans-serif;
                }
                .form-input, .form-select {
                  align-items: start;
                  border-radius: 11.009px;
                  border-color: rgba(194, 196, 196, 1);
                  border-style: solid;
                  border-width: 1px;
                  background-color: var(--sgivWhite-100, #fdfdfd);
                  margin-top: 10px;
                  color: var(--sgivGray-400, #c2c4c4);
                  padding: 10px 22px;
                  font: 20px Lato, sans-serif;
                }
                @media (max-width: 991px) {
                  .form-input, .form-select {
                    white-space: initial;
                    padding: 0 20px;
                  }
                }
                .form-button {
                  justify-content: center;
                  border-radius: 10px;
                  background-color: var(--sgivBlue-700, #03318c);
                  align-self: center;
                  margin-top: 40px;
                  color: var(--White-100, #fdfdfd);
                  white-space: nowrap;
                  padding: 6px 10px;
                  font: 24px Poppins, sans-serif;
                }
                @media (max-width: 991px) {
                  .form-button {
                    margin-top: 20px;
                    white-space: initial;
                    padding: 0 20px;
                  }
                }
                .form-message {
                  color: red;
                  margin-top: 20px;
                  font: 18px Lato, sans-serif;
                  text-align: center;
                }
      `}</style>
    </>
  );
}

export default UserAdd;
