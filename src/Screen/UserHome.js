import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar'; 

function UserHome() {
    const [usuarios, setUsuarios] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [rol, setRol] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetchUsuarios();

        // Obtener el rol del usuario desde el localStorage
        const storedRol = localStorage.getItem('rol');
        if (storedRol) {
        setRol(storedRol);
        }
        
    }, []);

    const fetchUsuarios = () => {
        axios.get('http://localhost:5433/api/usuarios/usuariostotal')
        .then(response => {
            setUsuarios(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error al obtener los usuarios disponibles:', error);
            setLoading(false);
        });
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const eliminarUsuario = async (id_usua) => {
        try {
        await axios.delete(`http://localhost:5433/api/usuarios/eliminar/${id_usua}`);
        // Actualizar la lista de usuarios después de la eliminación
        setUsuarios(usuarios.filter(usuario => usuario.id_usua !== id_usua));
        } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        }
    };


    // Filtrar los usuarios según el término de búsqueda
    const filteredUser = usuarios.filter(usuario =>
        usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    

    if (loading) {
        return <p>Cargando Usuarios...</p>;
    }


    return (
    <div className="container">
        <NavBar />
        <div className="content">
            <div className="div-4">
            <span>Viendo desde Rol: {rol}</span>
                <div className="div-5">
                    <h1 className="div-8">Usuarios</h1>
                    
                    <input type="text" placeholder="Buscar usuarios..." value={searchTerm} onChange={handleSearchChange}/>
                    {rol === 'Administrador' || rol === 'Agente' ? (
                    <>
                        <span>Agregar: </span>
                        <Link to="/UserAdd">
                        <div className="button-style">+</div>
                        </Link>
                    </>
                    ) : null}
                </div>
                

                <div className="div-14">
                <div className="table-wrapper">
                <table className="usuarios-table">
                    <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>ID</th>
                        <th>Estado</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredUser.map(usuario => (
                        <tr key={usuario.identificacion}>
                        <td>
                            <Link to={`/UserDetail/?id=${usuario.id}`}>{usuario.nombre}</Link>
                        </td>
                        <td>{usuario.identificacion}</td>
                        <td>{usuario.estado}</td>
                        <td>{usuario.rolesStr}</td>
                        <td>
                            <button onClick={() => eliminarUsuario(usuario.identificacion)}>Eliminar</button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>

            {/* <div className="usuario-category">
                <div className="usuario-list">
                {usuarios.map((usuario) => (
                    <div key={usuario.idUsua} className="usuario-item">
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

            .table-wrapper {
            overflow-x: auto;
            }
            .usuarios-table {
            width: 100%;
            border-collapse: collapse;
            }
            .usuarios-table th, .usuarios-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            }
            .usuarios-table th {
            background-color: #f2f2f2;
            color: #333;
            }
            .usuarios-table td {
            color: #686868;
            font-family: Poppins, sans-serif;
            font-size: 14px;
            font-weight: 500;
            }
        `}
        </style>
    </div>  
  );
}

export default UserHome;
