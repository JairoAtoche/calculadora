import React from 'react';
import '../css/botonLimpiar.css';

const BotonLimpiar = props => (
    <button className='boton-limpiar' onClick={() => props.manejarClick()}> 
        {props.children}
    </button>
);

export default BotonLimpiar;