import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';

function ServiciosScreen() {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await axios.get('http://localhost:5433/api/servicios/extraer');
        setServicios(response.data);
      } catch (error) {
        setError('Error al obtener los servicios');
        console.error('Error al obtener los servicios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServicios();
  }, []);

  const filteredServicios = servicios.filter(servicio =>
    servicio.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const eliminarServicio = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5433/api/servicios/eliminar/${id}`);
      setServicios(servicios.filter(servicio => servicio.id !== id));
      console.log(response.data); 
    } catch (error) {
      console.error('Error al eliminar el servicio:', error);
      setError('Error al eliminar el servicio');
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="div">
        <NavBar />
        <div className="div-4">
          <div className="div-5">
            <div className="div-6">
              <div className="div-7">
                <div className="column">
                  <div className="div-8">Servicios</div>
                </div>
                <div className="column-2">
                  <input
                    type="text"
                    placeholder="Buscar Servicios..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <span>Agregar: </span>
                  <Link to="/ServiciosHome"><div className="button-style">+</div></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="div-14">
            <div className="table-wrapper">
              <table className="servicios-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServicios.map(servicio => (
                    <tr key={servicio.id}>
                      <td>
                      <Link to={`/ServicioEditScreen/?id=${servicio.id}`}>{servicio.id}</Link>
                      </td>
                      <td>{servicio.nombre}</td>
                      <td>{servicio.descripcion}</td>
                      <td>${servicio.precio}</td>
                      <td>
                        <button onClick={() => eliminarServicio(servicio.id)}>Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .button-style {
          font-family: Poppins, sans-serif;
          filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
          background-color: var(--sgivWhite-100, #fdfdfd);
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          margin: 20px;
          display: flex;
        }
        .div {
          background-color: var(--sgivWhite-100, #fdfdfd);
          display: flex;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div {
            flex-wrap: wrap;
          }
        }
        .div-2 {
          align-items: center;
          background-color: #03318c;
          display: flex;
          flex-direction: column;
          font-size: 47px;
          color: var(--sgivWhite-100, #fdfdfd);
          font-weight: 900;
          padding: 30px 20px;
        }
        @media (max-width: 991px) {
          .div-2 {
            display: none;
            font-size: 40px;
          }
        }
        .div-3 {
          font-family: Lato, sans-serif;
          align-self: stretch;
        }
        @media (max-width: 991px) {
          .div-3 {
            font-size: 40px;
          }
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          margin-top: 169px;
        }
        @media (max-width: 991px) {
          .img {
            margin-top: 40px;
          }
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          margin-top: 30px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          margin-top: 30px;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          margin-top: 30px;
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          margin-top: 30px;
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          margin-top: 30px;
        }
        .div-4 {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 75px 0;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
          }
        }
        .div-5 {
          align-items: center;
          display: flex;
          margin-top: 59px;
          justify-content: center;
          padding: 0 60px;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-6 {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
          }
        }
        .div-7 {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }
        .column {
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 16px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .column {
            max-width: 100%;
          }
        }
        .div-8 {
          color: var(--sgivBlue-700, #03318c);
          font: 500 128px Poppins, sans-serif;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          flex: 1;
          max-width: 100%;
        }
        .div-9 {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .img-7 {
          object-fit: cover;
        }
        .div-10 {
          align-items: flex-start;
          border-radius: 50%;
          display: flex;
          justify-content: flex-start;
        }
        .div-11 {
          background-color: #eff4ff;
          display: flex;
          font-size: 12px;
          font-weight: 600;
          padding: 8px 24px;
        }
        .div-12 {
          border-radius: 50%;
          display: flex;
          font-size: 12px;
          font-weight: 600;
          position: absolute;
          flex-direction: column;
          align-items: flex-start;
        }
        .div-13 {
          background-color: #eff4ff;
          display: flex;
          font-size: 12px;
          font-weight: 600;
          padding: 8px 24px;
        }
        .div-14 {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin-top: 19px;
          padding: 0 60px;
          gap: 12px;
        }
        @media (max-width: 991px) {
          .div-14 {
            padding: 0 20px;
          }
        }
        .table-wrapper {
          overflow-x: auto;
        }
        .servicios-table {
          width: 100%;
          border-collapse: collapse;
        }
        .servicios-table th, .servicios-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        .servicios-table th {
          background-color: #f2f2f2;
          color: #333;
        }
        .servicios-table td {
          color: #686868;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

export default ServiciosScreen;
