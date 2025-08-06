import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImgLuana from "../componentes-reutilizables/ImgLuana.jsx";
import PropTypes from 'prop-types';

export default function TiraDeTarjetas({ arr, ancho, alto, colorFondo }) {
    return (
        <div style={{
            display: 'flex',
            gap: '20px',
            padding: '20px',
            backgroundColor: colorFondo || 'transparent',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}>
            {arr.map((tarjeta, index) => (
                <Card key={index} style={{ width: ancho || '18rem' }}>
                    <ImgLuana
                        src={tarjeta.imagen}
                        alto={alto || '250px'}
                        ancho="100%"
                        alt={tarjeta.titulo}
                    />
                    <Card.Body>
                        <Card.Title>{tarjeta.titulo}</Card.Title>
                        <Card.Text>
                            {tarjeta.descripcion}
                        </Card.Text>
                        {tarjeta.botonTexto && (
                            <Button variant={tarjeta.botonVariant || 'primary'}>
                                {tarjeta.botonTexto}
                            </Button>
                        )}
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

TiraDeTarjetas.propTypes = {
    arr: PropTypes.arrayOf(
        PropTypes.shape({
            imagen: PropTypes.string.isRequired,
            titulo: PropTypes.string.isRequired,
            descripcion: PropTypes.string.isRequired,
            botonTexto: PropTypes.string,
            botonVariant: PropTypes.string
        })
    ).isRequired,
    ancho: PropTypes.string,
    alto: PropTypes.string,
    colorFondo: PropTypes.string
};
