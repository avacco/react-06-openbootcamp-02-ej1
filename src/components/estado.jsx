import React from 'react';

import { useState } from 'react';

const Estado = (props) => {
  
  const [estado, setEstado] = useState(props.estado);

  const cambiarEstado = () => {
    if (estado === false) {
      setEstado(true);
    } else {
      setEstado(false);
    }
  }
  
  return (
    <div>
      <h5> Estado: {estado ? 'Contacto En Línea':'Contacto No Disponible'} </h5>
      <button onClick={cambiarEstado}>Cambiar estado</button>
    </div>
  );
};



export default Estado;
