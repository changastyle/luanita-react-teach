// src/componentes/FormLogin.jsx
import React, { useState } from 'react';

const FormLogin = () => {
    // Estados del formulario
    const [email, setEmail] = useState('lupita@gmail.com');
    const [password, setPassword] = useState('');

    // Variables de estilo
    const containerStyles = {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    };

    const titleStyles = {
        textAlign: 'left',
        fontWeight: '300',
        color: '#797878',
        marginBottom: '30px',
        textTransform: 'uppercase',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '40px'
    };

    const formGroupStyles = {
        marginBottom: '20px'
    };

    const labelStyles = {
        display: 'block',
        marginBottom: '8px',
        fontWeight: 'bold',
        color: '#333'
    };

    const inputStyles = {
        width: '100%',
        padding: '10px',
        backgroundColor: 'transparent',
        border: '1px solid #ddd',
        borderRadius: '50px',
        fontSize: '16px'
    };

    const inputHintStyles = {
        fontSize: '12px',
        color: '#666',
        marginTop: '5px',
        fontStyle: 'italic'
    };

    const actionsStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30px'
    };

    const loginButtonStyles = {
        backgroundColor: '#4285f4',
        color: 'white',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
        marginBottom: '15px',
        transition: 'background-color 0.3s'
    };

    const loginButtonHoverStyles = {
        backgroundColor: '#3367d6'
    };

    const forgotPasswordStyles = {
        color: '#4285f4',
        textDecoration: 'none',
        fontSize: '14px'
    };

    const forgotPasswordHoverStyles = {
        textDecoration: 'underline'
    };

    // Manejar hover del botón
    const handleButtonHover = (e) => {
        e.currentTarget.style.backgroundColor = loginButtonHoverStyles.backgroundColor;
    };

    const handleButtonLeave = (e) => {
        e.currentTarget.style.backgroundColor = loginButtonStyles.backgroundColor;
    };

    // Manejar hover del enlace
    const handleLinkHover = (e) => {
        e.currentTarget.style.textDecoration = forgotPasswordHoverStyles.textDecoration;
    };

    const handleLinkLeave = (e) => {
        e.currentTarget.style.textDecoration = forgotPasswordStyles.textDecoration;
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Email: ' + email + '\nPassword: ' + password);
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div style={containerStyles}>
            <h1 style={titleStyles}>INICIAR SESIÓN</h1>

            <form onSubmit={handleSubmit}>
                <div style={formGroupStyles}>
                    <label htmlFor="email" style={labelStyles}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ejemplo@gmail.com"
                        style={inputStyles}
                    />
                    <p style={inputHintStyles}>Ingresa el correo asociado con tu cuenta</p>
                </div>

                <div style={formGroupStyles}>
                    <label htmlFor="password" style={labelStyles}>Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Escribe tu contraseña"
                        style={inputStyles}
                    />
                </div>

                <div style={actionsStyles}>
                    <button
                        type="submit"
                        style={loginButtonStyles}
                        onMouseEnter={handleButtonHover}
                        onMouseLeave={handleButtonLeave}
                    >
                        Iniciar Sesión
                    </button>
                    <a
                        href="#forgot-password"
                        style={forgotPasswordStyles}
                        onMouseEnter={handleLinkHover}
                        onMouseLeave={handleLinkLeave}
                    >
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
            </form>
        </div>
    );
};

export default FormLogin;