import React, { useState, useEffect } from 'react';
import './style.css';
import Pregunta from './components/Pregunta/Pregunta';
import Form from './components/Form/Form';
import Gastos from './components/Gastos/Gastos';
import Control from './components/Control/Control';

export default function App() {
  //State para mostrar o no la pregunta inicial
  const [pregunta, setPregunta] = useState(true);
  //State para almacenar el presupuesto
  const [presupuesto, setPresupuesto] = useState(0);
  //State para almacenar el presupuesto restante
  const [restante, setRestante] = useState(0);
  //State para almacenar los gastos
  const [gastos, setGastos] = useState([]);
  //State para almacenar el gasto
  const [gasto, setGasto] = useState({});
  //State para crear gastos
  const [newGasto, setnewGasto] = useState(false);
  useEffect(() => {
    if (newGasto) {
      setGastos([...gastos, gasto]);
    }
    // Restar presupuesto a medida que se generan gastos
    const presupuestoRestante = restante - gasto.cantidad;
    setRestante(presupuestoRestante);
    setnewGasto(false);
  }, [gasto]);

  //Funcion para crear y almacenar los gastos
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal!</h1>
        <div className="contenido-principal contenido">
          {pregunta ? (
            <Pregunta
              crearPresupuesto={setPresupuesto}
              presupuestoRestante={setRestante}
              mostrarPregunta={setPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form crearGasto={setGasto} setnewGasto={setnewGasto} />
              </div>

              <div className="one-half column">
                <div className="gastos-realizados">
                  <h2>Listado de gastos</h2>
                  {gastos.map((gasto) => (
                    <Gastos
                      key={gasto.id}
                      nombre={gasto.nombre}
                      cantidad={gasto.cantidad}
                    />
                  ))}
                  <Control presupuesto={presupuesto} restante={restante} />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
