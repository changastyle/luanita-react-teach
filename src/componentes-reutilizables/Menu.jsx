// src/componentes/Menu.jsx

import React from 'react';

export default function Menu(
    {
        bgColor = "red",
        fontColor = "#333",
        arrMenus = [
            { nombre: 'Home', enlace: '/' },
            { nombre: 'Login', enlace: '/login' },
        ]
    }
) {

    const menuStyle = {
        padding: '10px',
        backgroundColor: bgColor,
        display: 'flex',
        gap: '20px',
        // border: '1px solid red',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: fontColor,
        fontWeight: 'bold',
    };


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
