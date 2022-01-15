import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from '../Error/Error';
import { v4 } from 'uuid';
export default function Form({ crearGasto, setnewGasto }) {
  const initialValue = {
    nombre: '',
    cantidad: 0,
    id: v4(),
  };
  // Crear State de gasto
  const [gasto, setGasto] = useState(initialValue);
  // Crear State de Errores
  const [error, setError] = useState(false);
  // Función que se ejecuta cada que el usuario escribe en un input
  const handleChange = (e) => {
    setGasto({
      ...gasto,
      [e.target.name]: e.target.value,
    });
  };
  // Extraer los valores
  const { nombre, cantidad } = gasto;
  // Cuando el usuario presiona Agregar Gasto
  const addGasto = (e) => {
    e.preventDefault();
    // Validar que los campos no esten vacios
    if (nombre.trim() === '' || cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    // Eliminar el mensaje previo cuando los campos esten llenos
    setError(false);
    //Crear cita
    crearGasto(gasto);
    setnewGasto(true);
    //Reiniciar formulario despues de agregar una cita
    setGasto(initialValue);
  };

  return (
    <form onSubmit={addGasto}>
      <h2>Agregar gastos</h2>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <div className="campo">
        <label>Ingrese el nombre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={handleChange}
          name="nombre"
          value={nombre}
        />
      </div>
      <div className="campo">
        <label>Ingrese el gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. $300"
          onChange={handleChange}
          name="cantidad"
          value={cantidad}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
}

Form.propTypes = {
  crearGasto: PropTypes.func.isRequired,
  crearGasto: PropTypes.func.isRequired,
};
