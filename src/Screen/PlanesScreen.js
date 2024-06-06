import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar'; 

function PlanesHome() {
  const [planData, setPlanData] = useState({
    codigo: '',
    nombre: '',
    cantidadPersonas: 0,
    fechaInicioViaje: '',
    fechaFinViaje: '',
    valorTotal: 0,
    idDestinos: [],
    idServicio: []
  });
  const [destinosDisponibles, setDestinosDisponibles] = useState([]); 
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setPlanData((prevState) => {
      if (checked) {
        return {
          ...prevState,
          idDestinos: [...prevState.idDestinos, parseInt(value)],
          idServicio: [...prevState.idServicio, parseInt(value)],
        };
      } else {
        return {
          ...prevState,
          idDestinos: prevState.idDestinos.filter((id) => id !== parseInt(value)),
          idServicio: prevState.idServicio.filter((id) => id !== parseInt(value)),
        };
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Petición al servidor para obtener los destinos disponibles
    const fetchDestinosDisponibles = async () => {
      try {
        const response = await axios.get('http://localhost:5433/api/destinos/disponibles');
        setDestinosDisponibles(response.data); // Asignas los destinos obtenidos al estado
      } catch (error) {
        console.error('Error al obtener los destinos disponibles:', error);
      }
    };

    fetchDestinosDisponibles(); // Llamada a la función para obtener los destinos disponibles al cargar el componente
  }, []); // El segundo argumento [] indica que el efecto se ejecutará solo una vez al montar el componente

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(planData);
      const response = await axios.post('http://localhost:5433/api/planes/crear', planData);
      const nuevoPlan = response.data;
      console.log('Nuevo plan creado:', nuevoPlan);

      // Navegar a otra página después de crear el plan, si es necesario
      // navigate('/ruta-a-donde-navegar');

    } catch (error) {
      console.error('Error al crear el plan:', error);
      setMessage('Error al crear el plan');
    }
  };
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await axios.get('http://localhost:5433/api/servicios/extraer');
        setServicios(response.data); // Suponiendo que la respuesta contiene la lista de servicios
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };

    fetchServicios();
  }, []);


  
  return (
    <>
      <div className="container">
        <div className="form-container">
          <h2>Crear Nuevo Plan</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Código:</label>
              <input
                type="text"
                name="codigo"
                value={planData.codigo} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={planData.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Cantidad de Personas:</label>
              <input
                type="number"
                name="cantidadPersonas"
                value={planData.cantidadPersonas}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Fecha de Inicio del Viaje:</label>
              <input
                type="date"
                name="fechaInicioViaje"
                value={planData.fechaInicioViaje}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Fecha de Fin del Viaje:</label>
              <input
                type="date"
                name="fechaFinViaje"
                value={planData.fechaFinViaje}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Valor Total:</label>
              <input
                type="number"
                name="valorTotal"
                value={planData.valorTotal}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
          <label>Destinos:</label>
          {destinosDisponibles.map((destino) => {
            console.log(`Renderizando destino: ${destino.idDest}, ${destino.nombre}`); // Verifica cada destino antes de renderizar
            return (
              <div key={destino.idDest}>
                <input
                  type="checkbox"
                  value={destino.idDest}
                  checked={planData.idDestinos.includes(destino.idDest)}
                  onChange={handleCheckboxChange}
                />
                <label>{destino.nombre}</label>
              </div>
            );
          })}
        </div>
        <div className="form-group">
          <label>Servicios:</label>
          {servicios.map((servicio) => {
            console.log(`Renderizando servicio: ${servicio.id}, ${servicio.nombre}`); // Verifica cada destino antes de renderizar
            return (
              <div key={servicio.id}>
                <input
                  type="checkbox"
                  value={servicio.id}
                  checked={planData.idServicio.includes(servicio.id)}
                  onChange={handleCheckboxChange}
                />
                <label>{servicio.nombre}</label>
              </div>
            );
          })}
        </div>

            <button type="submit">Crear Plan</button>
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

export default PlanesHome;
