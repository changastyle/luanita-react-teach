import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImgLuana from "../componentes-reutilizables/ImgLuana.jsx";
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function TiraDeTarjetas({
                                           arr,
                                           ancho = '18rem',
                                           alto = '250px',
                                           colorFondo = 'transparent',
                                           scrollPixeles = 500,
                                           mostrarFlechas = true,
                                           mostrarScrollBar = true
                                       }) {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const scrollRef = useRef(null);

    // Estilos como variables JavaScript
    const styles = {
        container: {
            padding: '20px',
            position: 'relative',
            backgroundColor: colorFondo
        },
        wrapper: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
        },
        scrollContainer: {
            overflowX: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: '#ccc transparent',
            flexGrow: 1,
            paddingBottom: mostrarScrollBar ? '8px' : '0px',
            scrollbarHeight: mostrarScrollBar ? '8px' : '0px'
        },
        innerContainer: {
            display: 'inline-flex',
            gap: '20px',
            padding: '10px 5px'
        },
        scrollArrow: {
            background: 'rgba(255, 255, 255, 0.7)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 1,
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease'
        },
        scrollArrowHover: {
            background: 'rgba(255, 255, 255, 0.9)',
            transform: 'scale(1.1)'
        },
        leftArrow: {
            marginRight: '10px'
        },
        rightArrow: {
            marginLeft: '10px'
        },
        // Estilos para la barra de scroll (solo WebKit)
        scrollBar: {
            '&::-webkit-scrollbar': {
                height: mostrarScrollBar ? '8px' : '0px'
            },
            '&::-webkit-scrollbar-track': {
                background: 'transparent'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
                borderRadius: '4px'
            }
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const currentScroll = scrollRef.current.scrollLeft;
            const newScroll = direction === 'left'
                ? currentScroll - scrollPixeles
                : currentScroll + scrollPixeles;

            scrollRef.current.scrollTo({
                left: newScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.wrapper}>
                {mostrarFlechas && showLeftArrow && (
                    <button
                        style={{ ...styles.scrollArrow, ...styles.leftArrow }}
                        onMouseOver={e => e.currentTarget.style = { ...styles.scrollArrow, ...styles.scrollArrowHover, ...styles.leftArrow }}
                        onMouseOut={e => e.currentTarget.style = { ...styles.scrollArrow, ...styles.leftArrow }}
                        onClick={() => scroll('left')}
                        aria-label="Scroll izquierda"
                    >
                        <FaChevronLeft />
                    </button>
                )}

                <div
                    ref={scrollRef}
                    style={{ ...styles.scrollContainer, ...styles.scrollBar }}
                    onScroll={handleScroll}
                >
                    <div style={styles.innerContainer}>
                        {arr.map((tarjeta, index) => (
                            <Card key={index} style={{ width: ancho }}>
                                <ImgLuana
                                    src={tarjeta.imagen}
                                    alto={alto}
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
                </div>

                {mostrarFlechas && showRightArrow && (
                    <button
                        style={{ ...styles.scrollArrow, ...styles.rightArrow }}
                        onMouseOver={e => e.currentTarget.style = { ...styles.scrollArrow, ...styles.scrollArrowHover, ...styles.rightArrow }}
                        onMouseOut={e => e.currentTarget.style = { ...styles.scrollArrow, ...styles.rightArrow }}
                        onClick={() => scroll('right')}
                        aria-label="Scroll derecha"
                    >
                        <FaChevronRight />
                    </button>
                )}
            </div>
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
    colorFondo: PropTypes.string,
    scrollPixeles: PropTypes.number,
    mostrarFlechas: PropTypes.bool,
    mostrarScrollBar: PropTypes.bool
};