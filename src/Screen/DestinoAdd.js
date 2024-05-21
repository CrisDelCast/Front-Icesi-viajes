import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function DestinoAdd() {
  const [destinoData, setDestinoData] = useState({
    codigo: '',
    nombre: '',
    descripcion: '',
    tierra: '',
    aire: '',
    mar: '',
    estado: '',
  }); 
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDestinoData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(destinoData);
      const response = await axios.post('http://localhost:5433/api/destinos/crear', destinoData);
      const nuevoDestino = response.data;
      console.log('Nuevo destino creado:', nuevoDestino);

    } catch (error) {
      console.error('Error al crear el destino:', error);
      setMessage('Error al crear el destino');
    }
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <h2>Crear Nuevo Destino</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Código:</label>
              <input
                type="text"
                name="codigo"
                value={destinoData.codigo} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={destinoData.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Descripcion:</label>
              <input
                type="text"
                name="descripcion"
                value={destinoData.descripcion}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
                <label>Tierra:</label>
                <select
                    name="tierra"
                    value={destinoData.tierra}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seleccione una opción</option>
                    <option value="Y">Sí</option>
                    <option value="N">No</option>
                </select>
            </div>
            <div className="form-group">
                <label>Aire :</label>
                <select
                    name="aire"
                    value={destinoData.aire}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seleccione una opción</option>
                    <option value="Y">Sí</option>
                    <option value="N">No</option>
                </select>
            </div>
            <div className="form-group">
                <label>Mar :</label>
                <select
                    name="mar"
                    value={destinoData.mar}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seleccione una opción</option>
                    <option value="Y">Sí</option>
                    <option value="N">No</option>
                </select>
            </div>
            <div className="form-group">
                <label>Estado :</label>
                <select
                    name="estado"
                    value={destinoData.estado}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seleccione una opción</option>
                    <option value="A">Sí</option>
                    <option value="I">No</option>
                </select>
            </div>
           
            <button type="submit">Crear Destino</button>
          </form>
          {message && <div className="error-message">{message}</div>}
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .form-container {
          width: 400px;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          font-weight: bold;
        }
        input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        button {
          background-color: #007bff;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .error-message {
          color: red;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}

export default DestinoAdd;
