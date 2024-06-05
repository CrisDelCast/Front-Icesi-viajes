import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';

function ServiciosHome() {
  const [serviceData, setServiceData] = useState({
    idServicio: '',
    nombre: '',
    idTipoServicio: '',
    descripcion: '',
    precio: 0,
  });
  const [tiposServicioDisponibles, setTiposServicioDisponibles] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Petición al servidor para obtener los tipos de servicio disponibles
    const fetchTiposServicioDisponibles = async () => {
      try {
        const response = await axios.get('http://localhost:5433/api/tiposservicio/disponibles');
        setTiposServicioDisponibles(response.data); // Asignas los tipos de servicio obtenidos al estado
      } catch (error) {
        console.error('Error al obtener los tipos de servicio disponibles:', error);
      }
    };

    fetchTiposServicioDisponibles(); // Llamada a la función para obtener los tipos de servicio disponibles al cargar el componente
  }, []); // El segundo argumento [] indica que el efecto se ejecutará solo una vez al montar el componente

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(serviceData);
      const response = await axios.post('http://localhost:5433/api/servicios/crear', serviceData);
      const nuevoServicio = response.data;
      console.log('Nuevo servicio creado:', nuevoServicio);

      // Navegar a otra página después de crear el servicio, si es necesario
      // navigate('/ruta-a-donde-navegar');

    } catch (error) {
      console.error('Error al crear el servicio:', error);
      setMessage('Error al crear el servicio');
    }
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="form-container">
          <h2>Crear Nuevo Servicio</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>ID Servicio:</label>
              <input
                type="text"
                name="idServicio"
                value={serviceData.idServicio}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={serviceData.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Tipo de Servicio:</label>
              <select
                name="idTipoServicio"
                value={serviceData.idTipoServicio}
                onChange={handleChange}
              >
                <option value="">Selecciona un tipo de servicio</option>
                {tiposServicioDisponibles.map((tipo) => (
                  <option key={tipo.id} value={tipo.id}>
                    {tipo.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Descripción:</label>
              <textarea
                name="descripcion"
                value={serviceData.descripcion}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Precio:</label>
              <input
                type="number"
                name="precio"
                value={serviceData.precio}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Crear Servicio</button>
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
        input, textarea, select {
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

export default ServiciosHome;
