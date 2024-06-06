import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DestinoEditScreen() {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchDestino = async () => {
      try {
        const response = await axios.get(`http://localhost:5433/api/destinos/${id}`);
        setDestinoData(response.data);
      } catch (error) {
        console.error('Error fetching destino:', error.response);
        setMessage(`Error al obtener los datos del destino: ${error.response ? error.response.data.message : error.message}`);
      }
    };
    fetchDestino();
  }, [id]);

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
      const response = await axios.put(`http://localhost:5433/api/destinos/editar`, destinoData);
      const destinoActualizado = response.data;
      console.log('Destino actualizado:', destinoActualizado);
      setMessage('Destino actualizado exitosamente');
    } catch (error) {
      console.error('Error al actualizar el destino:', error.response);
      setMessage(`Error al actualizar el destino: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <h2>Editar Destino</h2>
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
              <label>Descripción:</label>
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
              <label>Aire:</label>
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
              <label>Mar:</label>
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
              <label>Estado:</label>
              <select
                name="estado"
                value={destinoData.estado}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="A">Activo</option>
                <option value="I">Inactivo</option>
              </select>
            </div>
            <button type="submit">Guardar Cambios</button>
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
        input,
        select {
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

export default DestinoEditScreen;
