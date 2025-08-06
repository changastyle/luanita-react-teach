// src/pages/Lupita.jsx

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImgLuana from "../componentes-reutilizables/ImgLuana.jsx";

export default function Lupita() {
    // return <h2>Hola, soy Lupita 🐶</h2>;
    return (
        <>
            <Card style={{ width: '18rem' }}>
                {/*<Card.Img variant="top" src="src/assets/imgs/lupita-1.jpg" />*/}
                <ImgLuana src="src/assets/imgs/lupita-1.jpg" alto="250px" ancho="100%"></ImgLuana>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                {/*<Card.Img variant="top" src="src/assets/imgs/lupita-1.jpg" />*/}
                <ImgLuana src="src/assets/imgs/lupita-1.jpg" alto="250px" ancho="100%"></ImgLuana>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>


    );
}
