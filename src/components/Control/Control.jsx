import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { revisarRestante } from '../../functions';
export default function Control({ presupuesto, restante }) {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: $ {presupuesto}</div>
      <div className={revisarRestante(presupuesto, restante)}>
        Restante: $ {restante}
      </div>
    </Fragment>
  );
}
Control.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};
