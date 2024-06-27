import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    //obtener el token
    const token = localStorage.getItem('token');
    //si el token es valido permite navegar entre paginas que esten protegidas
    //si no, redirecciona al index
    return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
