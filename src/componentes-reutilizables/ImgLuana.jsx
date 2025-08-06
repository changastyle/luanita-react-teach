import React from 'react';
import PropTypes from 'prop-types';

const ImgLuana = ({ src, ancho, alto, alt = '', className = '' }) => {
    const style = {
        width: typeof w === 'number' ? `${ancho}px` : ancho,
        height: typeof h === 'number' ? `${alto}px` : alto,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div
            style={style}
            className={className}
            role="img"
            aria-label={alt}
        />
    );
};

ImgLuana.propTypes = {
    src: PropTypes.string.isRequired,
    ancho: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    alto: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    alt: PropTypes.string,
    className: PropTypes.string
};

export default ImgLuana;