import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';

function ClienteAdd() {
  const [userData, setUserData] = useState({
    nombre: '',
    numeroIdentificacion: '',
    primerApellido: '',
    segundoApellido: '',
    telefono1: '',
    telefono2: '',
    correo: '',
    sexo: '',
    fechaNacimiento:'' ,
    idTiid: '',
    foto: null, // Nuevo campo para la foto
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

  const handleDateChange = (event) => {
    setUserData({ ...userData, fechaNacimiento: new Date(event.target.value) });
}


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserData((prevState) => ({
      ...prevState,
      foto: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(userData).forEach((key) => {
        formData.append(key, userData[key]);
      });
      // Agregar el archivo de imagen al FormData
      formData.append('foto', userData.foto);

      const response = await axios.post(
        'http://localhost:5433/api/cliente/crearClienteConFoto',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Establecer el tipo de contenido como multipart/form-data
          },
        }
      );
      setMessage('Cliente creado exitosamente');
      navigate('/ClienteScreen');
    } catch (error) {
      console.error('Error al crear cliente:', error);
      setMessage('Error al crear cliente');
    }
  };


  return (
    <>
      <div className="clienteadd-container">
        <NavBar />
        <div className="main-content">
          <div className="form-container">
            <div className="form-title">Crear Cliente</div>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={userData.nombre}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Número de Identificación</label>
                <input
                  type="text"
                  name="numeroIdentificacion"
                  value={userData.numeroIdentificacion}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Primer Apellido</label>
                <input
                  type="text"
                  name="primerApellido"
                  value={userData.primerApellido}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Segundo Apellido</label>
                <input
                  type="text"
                  name="segundoApellido"
                  value={userData.segundoApellido}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Teléfono 1</label>
                <input
                  type="text"
                  name="telefono1"
                  value={userData.telefono1}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Teléfono 2</label>
                <input
                  type="text"
                  name="telefono2"
                  value={userData.telefono2}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Correo Electrónico</label>
                <input
                  type="email"
                  name="correo"
                  value={userData.correo}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Sexo</label>
                <select
                  name="sexo"
                  value={userData.sexo}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Seleccione el sexo</option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Fecha de Nacimiento</label>
                <input
                  type="date"
                  name="fechaNacimiento"
                  value={userData.fechaNacimiento}
                  onChange={handleDateChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Tipo de Identificación</label>
                <select
                  name="idTiid"
                  value={userData.idTiid}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Seleccione el tipo de identificación</option>
                  <option value="1">Cédula de Ciudadanía</option>
                  <option value="2">Cédula de Extranjería</option>
                  <option value="3">Pasaporte</option>
                </select>
              </div>
                            <div className="form-group">
                <label className="form-label">Foto</label>
                <input
                  type="file"
                  name="foto"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="form-input"
                />
              </div>
              <button type="submit" className="form-button">Crear Cliente</button>
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

export default ClienteAdd;