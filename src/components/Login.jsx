import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    //Inicializa el usuario, password y error en vacio
    //posteriormente setea dependiendo de los datos del formulario
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();  // Evitar el comportamiento predeterminado del formulario
        try {
            //cambiar a localhost en el puerto 5000 en caso de ejecutar de forma local
            //http://localhost:5000/api/auth/login
            const response = await axios.post('https://jwt-auth-server-node-js.vercel.app/api/auth/login', {
                username: username,
                password: password
            });
            console.log('Login success:', response.data);
            // Manejar el token JWT recibido aquí
            // Almacena el token JWT en localStorage
            localStorage.setItem('token', response.data.token);
            // Redirige al usuario a la página de Dashboard 
            navigate('/dashboard');

        } catch (error) {
            if (error.response) {
                setError('Credenciales inválidas. Por favor, verifica tu usuario y contraseña.');
            } else if (error.request) {
                setError('No se pudo conectar con el servidor. Por favor, intenta nuevamente más tarde.');
            } else {
                setError('Ocurrió un error al enviar la solicitud.');
            }
            console.error('Error general:', error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">

                        <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label for="username" className="block text-sm font-medium leading-6">Username</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" autocomplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white-900 placeholder:text-white-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label for="username" className="block text-sm font-medium leading-6">Password</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md text-center">

                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" autocomplete="password" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white-900 placeholder:text-white-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="password" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container mx-auto py-3">
                        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Login</button>
                        </div>
                    </div>
                </div>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
