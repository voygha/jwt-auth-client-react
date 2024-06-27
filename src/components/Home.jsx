// src/components/Home.jsx
import React from 'react';
import  Login  from "./Login";


const Home = () => {
  return (
    <div className='container mx-auto px-4'>
      
      <h1 className='text-3xl font-bold py-9'>Inicia Sesion</h1>
      <Login />
      <h2 className="text-base font-semibold leading-7">Usuario y Password de Prueba</h2>
      <p className="mt-1 text-sm leading-6 text-white-600">usuario: admin</p>
      <p className="mt-1 text-sm leading-6 text-white-600">password: adminpassword</p>
      <h4 className="py-9 text-base font-semibold leading-7">Los usuarios son ficticios unicamente con el fin de probar una funcionalidad</h4>
    </div>
  );
};

export default Home;
