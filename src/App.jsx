import React from 'react';
import './App.css';
import Menu from './componentes-reutilizables/Menu';
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";

function App() {
    return (
        <>
            <Menu />

            <Combobox
                hideCaret
                hideEmptyPopup
                data={["Red", "Yellow", "Blue", "Orange"]}
                placeholder="Search for a color"
            />
        </>
    );
}

export default App;
