import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar'; 

function DestinoHome() {
  const [destinos, setDestinos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar los destinos según el término de búsqueda
  const filteredDestinos = destinos.filter(destino =>
    destino.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <div className="div-4">
          <div className="div-5">
            <h1 className="div-8">Destinos</h1>
            <input type="text" placeholder="Buscar destinos..." value={searchTerm} onChange={handleSearchChange}/>
            <span>Agregar: </span><Link to="/DestinoAdd"><div className="button-style">+</div></Link>
          </div>  
          <div className="div-5 destino-list">
            {filteredDestinos.map((destino) => (
              <Link key={destino.idDestino} to={`/destino/${destino.idDestino}`} className="destino-link">
                <div className="destino-item">
                  <img className="destino-image" src={destino.fotoUrl} alt={destino.nombre} />
                  <div className="destino-name">{destino.nombre}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: #fdfdfd;
          display: flex;
          gap: 0px;
        }

        .content {
          flex: 1;
          padding-top: 80px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .div-4 {
          display: flex;
          flex-direction: column;
          padding: 0 60px;
          flex: 1;
        }

        .div-5 {
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin-top: 59px;
        }

        .div-8 {
          color: #03318c;
          font-size: 47px;
          font-weight: 900;
        }

        .destino-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
          justify-items: center;
          margin-top: 20px;
        }

        .destino-link {
          text-decoration: none;
          width: 100%;
        }

        .destino-item {
          text-align: center;
        }

        .destino-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
        }

        .destino-name {
          margin-top: 10px;
          font-size: 20px;
          color: #000;
        }

        .button-style {
          font-family: Poppins, sans-serif;
          filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
          background-color: var(--sgivWhite-100, #fdfdfd);
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          display: flex;
        }
      `}</style>
    </div>
  );
}

export default DestinoHome;
