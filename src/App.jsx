import React from 'react';
import './App.css';
import Menu from './componentes-reutilizables/Menu';
import Combobox from "react-widgets/Combobox";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "react-widgets/styles.css";
import Inicio from "./pages/Inicio.jsx";
import Lupita from "./pages/Lupita.jsx";
import Login from "./pages/Login.jsx";
import Salir from "./pages/Salir.jsx";

function App() {
    const arrMenus = [
        { nombre: 'Inicio', enlace: '/' },
        { nombre: 'Login', enlace: '/login' },
        { nombre: 'Lupita', enlace: '/lupita' },
        { nombre: 'Salir', enlace: '/salir' }
    ];
    return (
        <>
            <Router>
                <Menu bgColor="#8e44ad" fontColor="white" arrMenus={arrMenus}/>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/lupita" element={<Lupita />} />
                    <Route path="/salir" element={<Salir />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
