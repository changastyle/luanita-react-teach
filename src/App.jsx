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
import {AppProvider} from "./contexto/AppContext.jsx";

function App() {
    const arrMenus = [
        { nombre: 'Inicio', enlace: '/' , element: <Inicio />},
        { nombre: 'Login', enlace: '/login' , element: <Login /> },
        { nombre: 'Lupita', enlace: '/lupita' , element: <Lupita /> },
        { nombre: 'Salir', enlace: '/salir' , element: <Salir /> }
    ];
    return (
        <>
            <AppProvider>
                <Router>
                    <Menu bgColor="#8e44ad" fontColor="white" arrMenus={arrMenus}/>
                    <Routes>
                        {arrMenus.map(({ enlace, element }, i) => (
                            <Route key={i} path={enlace} element={element} />
                        ))}
                    </Routes>
                </Router>
            </AppProvider>
        </>
    );
}

export default App;
