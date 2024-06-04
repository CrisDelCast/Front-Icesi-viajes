import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';

function ServiciosHome() {
  const [serviceData, setServiceData] = useState({
    codigo: '',
    nombre: '',
    descripcion: '',
    fechaInicio: '',
    fechaFin: '',
    precio: 0,
    idCategorias: [],
  });
  const [categoriasDisponibles, setCategoriasDisponibles] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setServiceData((prevState) => {
      if (checked) {
        return {
          ...prevState,
          idCategorias: [...prevState.idCategorias, parseInt(value)],
        };
      } else {
        return {
          ...prevState,
          idCategorias: prevState.idCategorias.filter((id) => id !== parseInt(value)),
        };
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Petición al servidor para obtener las categorías disponibles
    const fetchCategoriasDisponibles = async () => {
      try {
        const response = await axios.get('http://localhost:5433/api/categorias/disponibles');
        setCategoriasDisponibles(response.data); // Asignas las categorías obtenidas al estado
      } catch (error) {
        console.error('Error al obtener las categorías disponibles:', error);
      }
    };

    fetchCategoriasDisponibles(); // Llamada a la función para obtener las categorías disponibles al cargar el componente
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
      <div className="container">
        <div className="form-container">
          <h2>Crear Nuevo Servicio</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Código:</label>
              <input
                type="text"
                name="codigo"
                value={serviceData.codigo}
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
              <label>Descripción:</label>
              <textarea
                name="descripcion"
                value={serviceData.descripcion}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Fecha de Inicio:</label>
              <input
                type="date"
                name="fechaInicio"
                value={serviceData.fechaInicio}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Fecha de Fin:</label>
              <input
                type="date"
                name="fechaFin"
                value={serviceData.fechaFin}
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
            <div className="form-group">
              <label>Categorías:</label>
              {categoriasDisponibles.map((categoria) => {
                console.log(`Renderizando categoría: ${categoria.idCat}, ${categoria.nombre}`);
                return (
                  <div key={categoria.idCat}>
                    <input
                      type="checkbox"
                      value={categoria.idCat}
                      checked={serviceData.idCategorias.includes(categoria.idCat)}
                      onChange={handleCheckboxChange}
                    />
                    <label>{categoria.nombre}</label>
                  </div>
                );
              })}
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
        input, textarea {
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
