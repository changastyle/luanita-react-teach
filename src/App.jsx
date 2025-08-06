import React from 'react';
import './App.css';
import Menu from './componentes-reutilizables/Menu';
import Combobox from "react-widgets/Combobox";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "react-widgets/styles.css";
import Inicio from "./pages/Inicio.jsx";
import Lupita from "./pages/Lupita.jsx";
import Salir from "./pages/Salir.jsx";

function App() {
    return (
        <>
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/lupita" element={<Lupita />} />
                    <Route path="/salir" element={<Salir />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
