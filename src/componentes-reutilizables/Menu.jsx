// src/componentes/Menu.jsx

import React from 'react';
import { useApp } from '../contexto/AppContext';

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
    const { bannerHeight } = useApp();

    const contMenuStyle = {
        padding: '10px',
        backgroundColor: bgColor,
        display: 'flex',
        height: bannerHeight,
        // gap: '20px',
        // border: '1px solid red',
    };

    const enlaceStyle = {
        textDecoration: 'none',
        color: fontColor,
        fontWeight: 'bold',
        padding: '10px',
    };


    return (
        <div className="cont-menu" style={contMenuStyle}>
            {arrMenus.map((menuLoop , index) => (
                <a key={index} href={menuLoop.enlace} class="flex-center-v" style={enlaceStyle}>
                    {menuLoop.nombre}
                </a>
            ))}
        </div>
    );
}
