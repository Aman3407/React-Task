// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

const Navbar = () => {
  const navigate = useNavigate();
  const {isAuthenticated} = useGlobalContext();

  const logHandler = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <nav className="w-screen fixed top-0 bg-gray-800 p-4 flex justify-between items-center">
      <div>
        <Link to="/home" className="text-white text-2xl font-bold">
          Employee Manager
        </Link>
      </div>
      <div>
        <button
          onClick={()=>logHandler()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
