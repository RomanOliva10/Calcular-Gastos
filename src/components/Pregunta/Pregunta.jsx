import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import Error from '../Error/Error';
export default function Pregunta({
  crearPresupuesto,
  presupuestoRestante,
  mostrarPregunta,
}) {
  // Crear State de Citas
  const [presupuesto, setPresupuesto] = useState(0);
  // Crear State de Errores
  const [error, setError] = useState(false);
  // Función que se ejecuta cada que el usuario escribe en un input
  const handleChange = (e) => {
    setPresupuesto(parseInt(e.target.value));
  };
  // Cuando el usuario presiona enviar presupuesto
  const addPresupuesto = (e) => {
    e.preventDefault();
    // Validacion
    if (presupuesto < 1 || isNaN(presupuesto)) {
      setError(true);
      return;
    }
    //Validacion hecha
    setError(false);
    //Crear presupuesto
    crearPresupuesto(presupuesto);
    presupuestoRestante(presupuesto);
    mostrarPregunta(false);
  };
  return (
    <Fragment>
      <h2>Ingrese su presupuesto</h2>
      {error ? <Error mensaje="Presupuesto no valido" /> : null}
      <form onSubmit={addPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ingrese su presupuesto"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Enviar Presupuesto"
        />
      </form>
    </Fragment>
  );
}
Pregunta.propTypes = {
  crearPresupuesto: PropTypes.func.isRequired,
  presupuestoRestante: PropTypes.func.isRequired,
  mostrarPregunta: PropTypes.func.isRequired,
};
