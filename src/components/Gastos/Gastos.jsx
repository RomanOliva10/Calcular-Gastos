import React from 'react';
import PropTypes from 'prop-types';

export default function Gastos({ nombre, cantidad }) {
  return (
    <li className="gastos">
      <p>
        {nombre}
        <span className="gasto">${cantidad}</span>
      </p>
    </li>
  );
}

Gastos.propTypes = {
  nombre: PropTypes.string.isRequired,
  cantidad: PropTypes.number.isRequired,
};
