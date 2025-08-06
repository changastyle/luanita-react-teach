// src/componentes/Menu.jsx

import React from 'react';

const arrMenus = [
    { nombre: 'Inicio', enlace: '/' },
    { nombre: 'Lupita', enlace: '/lupita' },
    { nombre: 'Salir', enlace: '/salir' }
];
const menuStyle = {
    padding: '10px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    gap: '20px',
    // border: '1px solid red',
};

const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
};
export default function Menu() {
    return (
        <div className="cont-menu" style={menuStyle}>
            {arrMenus.map((menuLoop , index) => (
                <a key={index} href={menuLoop.enlace} style={linkStyle}>
                    {menuLoop.nombre}
                </a>
            ))}
        </div>
    );
}
