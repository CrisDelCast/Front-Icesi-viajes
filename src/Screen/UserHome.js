import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar'; 

function UserHome() {
  //const [usuarios, setusuarios] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [rol, setRol] = useState('');

  useEffect(() => {
    // Obtener el rol del usuario desde el localStorage
    const storedRol = localStorage.getItem('rol');
    if (storedRol) {
      setRol(storedRol);
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = async (id_usu) => {
    try {
      await axios.delete(`http://localhost:5433/api/usuarios/eliminar/${id_dest}`);
      // Actualizar la lista de usuarios después de la eliminación
      setUsuarios(usuarios.filter(usuario => usuario.id_usu !== id_usu));
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };

  // Filtrar los usuarios según el término de búsqueda
  const filteredUser = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <div className="div-4">
          <div className="div-5">
            <h1 className="div-8">Usuarios</h1>
            <input type="text" placeholder="Buscar usuarios..." value={searchTerm} onChange={handleSearchChange}/>
            {rol === 'Administrador' || rol === 'Agente' ? (
              <>
                <span>Agregar: </span>
                {/* <Link to="/UserAdd">
                  <div className="button-style">+</div>
                </Link> */}
              </>
            ) : null}
          </div>

          {/* <div className="usuario-category">
            <h2>Tierra</h2>
            <div className="usuario-list">
              {tierrausuarios.map((usuario) => (
                <div key={usuario.idusuario} className="usuario-item">
                  <Link to={`/usuarioDetalle/?id=${usuario.codigo}`} className="usuario-link">
                    <img className="usuario-image" src={usuario.fotoUrl} alt={usuario.nombre} />
                    <div className="usuario-name">{usuario.nombre}</div>
                  </Link>
                  {rol === 'Administrador' ? (
                    <button className="delete-button" onClick={() => handleDelete(usuario.codigo)}>Eliminar</button>
                  ) : null}
                </div>
              ))}
            </div>
          </div> */}

          
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
          color: var(--sgivBlue-700, #03318c);
          font: 500 128px Poppins, sans-serif;
          
        }

        .usuario-category {
          margin-top: 40px;
        }

        .usuario-category h2 {
          font-size: 30px;
          color: #03318c;
          margin-bottom: 20px;
        }

        .usuario-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
          justify-items: center;
        }

        .usuario-link {
          text-decoration: none;
          width: 100%;
        }

        .usuario-item {
          text-align: center;
        }

        .usuario-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
        }

        .usuario-name {
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

        .delete-button {
          background-color: red;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}

export default UserHome;
