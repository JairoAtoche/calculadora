import React from 'react';
import '../css/boton.css';

function Boton(props) {
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }; 
    return(
        <button className={`boton boton--${esOperador(props.children) ? 'operador' : 'numero'}`} onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </button>
    );
}

export default Boton;