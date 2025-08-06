// src/pages/Lupita.jsx

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImgLuana from "../componentes-reutilizables/ImgLuana.jsx";
import TiraDeTarjetas from "../componentes-reutilizables/TiraDeTarjetas.jsx";

export default function Lupita() {
    // return <h2>Hola, soy Lupita 🐶</h2>;

    const arrTarjetas =[
        {
            imagen: "src/assets/imgs/lupita-1.jpg",
            titulo: "Lupita en el Mar",
            descripcion: "Descripción de la tarjeta 1",
            botonTexto: "Botón 1",
            botonVariant: "primary"
        },{
            imagen: "src/assets/imgs/lupita-1.jpg",
            titulo: "Lupita en el Mar",
            descripcion: "Descripción de la tarjeta 1",
            botonTexto: "Botón 1",
            botonVariant: "primary"
        },{
            imagen: "src/assets/imgs/lupita-1.jpg",
            titulo: "Lupita en el Mar",
            descripcion: "Descripción de la tarjeta 1",
            botonTexto: "Botón 1",
            botonVariant: "primary"
        },{
            imagen: "src/assets/imgs/lupita-1.jpg",
            titulo: "Lupita en el Mar",
            descripcion: "Descripción de la tarjeta 1",
            botonTexto: "Botón 1",
            botonVariant: "primary"
        },{
            imagen: "src/assets/imgs/lupita-1.jpg",
            titulo: "Lupita en el Mar",
            descripcion: "Descripción de la tarjeta 1",
            botonTexto: "Botón 1",
            botonVariant: "primary"
        },{
            imagen: "src/assets/imgs/lupita-1.jpg",
            titulo: "Lupita en el Mar",
            descripcion: "Descripción de la tarjeta 1",
            botonTexto: "Botón 1",
            botonVariant: "primary"
        },{
            imagen: "src/assets/imgs/lupita-1.jpg",
            titulo: "Lupita en el Mar",
            descripcion: "Descripción de la tarjeta 1",
            botonTexto: "Botón 1",
            botonVariant: "primary"
        },{
            imagen: "src/assets/imgs/lupita-1.jpg",
            titulo: "Lupita en el Mar",
            descripcion: "Descripción de la tarjeta 1",
            botonTexto: "Botón 1",
            botonVariant: "primary"
        },{
            imagen: "src/assets/imgs/lupita-1.jpg",
            titulo: "Lupita en el Mar",
            descripcion: "Descripción de la tarjeta 1",
            botonTexto: "Botón 1",
            botonVariant: "primary"
        },{
            imagen: "src/assets/imgs/lupita-1.jpg",
            titulo: "Lupita en el Mar",
            descripcion: "Descripción de la tarjeta 1",
            botonTexto: "Botón 1",
            botonVariant: "primary"
        },
        {
            imagen: "src/assets/imgs/lupita-2.png",
            titulo: "Lupita Durmiendo la Siesta",
            descripcion: "Descripción de la tarjeta 2",
            botonTexto: "Botón 2",
            botonVariant: "success"
        }
    ]

    return (
        <TiraDeTarjetas
            arr={arrTarjetas}
            ancho="20rem"
            alto="300px"
            colorFondo="#f0f0f0"
        />
    )

}
