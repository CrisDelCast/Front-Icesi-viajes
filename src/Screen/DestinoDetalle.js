import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DestinoDetalle = () => {
    const { id } = useParams();
    const [destino, setDestino] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDestino = async () => {
            try {
                const response = await axios.get(`http://localhost:5433/api/destinos/${id}`);
                setDestino(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los detalles del destino:', error);
                setLoading(false);
            }
        };

        fetchDestino();
    }, [id]);

    if (loading) {
        return <p>Cargando detalles del destino...</p>;
    }

    return (
        <div>
            {destino && (
                <div>
                    <h2>{destino.nombre}</h2>
                    <p>Descripción: {destino.descripcion}</p>
                    <p>Ubicación: {destino.ubicacion}</p>
                    {/* Agrega más detalles según tu modelo de datos */}
                </div>
            )}
        </div>
    );
};

export default DestinoDetalle;
