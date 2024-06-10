import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../Components/NavBar';

function ReservasScreen() {
  const [reservaData, setReservaData] = useState({
    idCliente: '',
    idPlan: '',
    idDestino: '',
    fechaInicio: '',
    fechaFin: '',
    numeroPersonas: '',
    precioTotal: '',
    estado: '',
    idAgente: '',
  });
  const [clientes, setClientes] = useState([]);
  const [planes, setPlanes] = useState([]);
  const [agentes, setAgentes] = useState([]);
  const [destinos,setDestinos] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get('http://localhost:5433/api/cliente/clientestotal');
        setClientes(response.data);
      } catch (error) {
        console.error('Error al obtener los clientes:', error);
      }
    };

    fetchClientes();
  }, []);

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const response = await axios.get('http://localhost:5433/api/planes/extraer');
        setPlanes(response.data);
      } catch (error) {
        console.error('Error al obtener los planes:', error);
      }
    };

    fetchPlanes();
  }, []);

  useEffect(() => {
    const fetchAgentes = async () => {
      try {
        const response = await axios.get('http://localhost:5433/api/usuarios/usuariostotal');
        setAgentes(response.data);
      } catch (error) {
        console.error('Error al obtener los agentes:', error);
      }
    };

    fetchAgentes();
  }, []);

  useEffect(() => {
    const fetchDestinos = async () => {
      try {
        const response = await axios.get('http://localhost:5433/api/destinos/disponibles');
        setDestinos(response.data);
      } catch (error) {
        console.error('Error al obtener los destinos:', error);
      }
    };

    fetchDestinos();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReservaData({ ...reservaData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        console.log(reservaData);
      const response = await axios.post('http://localhost:5433/api/reservas/crear', reservaData);
      console.log('Reserva creada:', response.data);
    } catch (error) {
      console.error('Error al crear la reserva:', error);
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="content">
        <h1>Crear Reserva</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="idCliente">Cliente:</label>
            <select id="idCliente" name="idCliente" value={reservaData.idCliente} onChange={handleInputChange} required>
              <option value="">Selecciona un cliente</option>
              {clientes.map(cliente => (
                <option key={cliente.idClie} value={cliente.idClie}>{cliente.nombre}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="idPlan">Plan:</label>
            <select id="idPlan" name="idPlan" value={reservaData.idPlan} onChange={handleInputChange} required>
              <option value="">Selecciona un plan</option>
              {planes.map((plan) => (
                <option key={plan.idPlan} value={plan.idPlan}>{plan.nombre}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="idDestino">Destino:</label>
            <select id="idDestino" name="idDestino" value={reservaData.idDestino} onChange={handleInputChange} required>
              <option value="">Selecciona un Destino</option>
              {destinos.map((destino) => (
                <option key={destino.idDest} value={destino.idDest}>{destino.nombre}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fechaInicio">Fecha de Inicio:</label>
            <input type="date" id="fechaInicio" name="fechaInicio" value={reservaData.fechaInicio} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="fechaFin">Fecha de Fin:</label>
            <input type="date" id="fechaFin" name="fechaFin" value={reservaData.fechaFin} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="numeroPersonas">Número de Personas:</label>
            <input type="number" id="numeroPersonas" name="numeroPersonas" value={reservaData.numeroPersonas} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="precioTotal">Precio Total:</label>
            <input type="number" id="precioTotal" name="precioTotal" value={reservaData.precioTotal} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="estado">Estado:</label>
            <input type="text" id="estado" name="estado" value={reservaData.estado} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="idAgente">Agente:</label>
            <select id="idAgente" name="idAgente" value={reservaData.idAgente} onChange={handleInputChange} required>
              <option value="">Selecciona un agente</option>
              {agentes.map((agente)=> (
                <option key={agente.id} value={agente.id}>{agente.nombre}</option>
              ))}
            </select>
          </div>
          <button type="submit">Crear Reserva</button>
        </form>
      </div>
      
      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
        }
        
        .sidebar {
          width: 250px;
          background: #f8f9fa;
        }
        
        .content {
          flex: 1;
          padding: 20px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        label {
          display: block;
          margin-bottom: 5px;
        }
        
        input,
        select {
          width: 100%;
          padding: 8px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        
        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default ReservasScreen;
