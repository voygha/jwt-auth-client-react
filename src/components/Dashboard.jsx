import React from 'react';
import axios from 'axios';

const Dashboard = () => {
    const handleLogout = async () => {
        try {
            await axios.post('https://jwt-auth-server-node-js.vercel.app/api/auth/logout');
            localStorage.removeItem('token'); // Limpiar token almacenado
            window.location.href = '/'; // Despues de cerrar sesion, redirigir a la ruta por default
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            // Manejar errores de cerrar sesión
        }
    };

    return (
        <div>
            <h1 className='text-3xl font-bold underline text-white'>Dashboard</h1>
            {/* Ejecutar  handleLogout para cerrar la sesion */}
            <div className="container mx-auto py-3">
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleLogout}>Cerrar sesión</button>
            </div>
            
        </div>
    );
};

export default Dashboard;
