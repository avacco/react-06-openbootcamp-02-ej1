import React from 'react';
import PropTypes from 'prop-types';
import Contenedorcontactos from './contenedorcontactos';


const Contacto = (props) => {

  return (
    <div>
      <Contenedorcontactos 
        estado={props.estado}
      />
      <h5> Nombre: {props.nombre} </h5>
      <h5> Apellido: {props.apellido} </h5>
      <h5> Email: {props.email} </h5>
    </div>
  );
};


Contacto.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string,
  email: PropTypes.string,
  estado: PropTypes.bool
};


export default Contacto;
