import { useState } from 'react';
import './App.css';
import Celda from './Celda'
import Marcador from './Marcado';
import Emoji from './emoji';

function App() {
  //Def val/ props
  const valores= ["1","1","1","0","0","1","*","1","0","0","1","1","2","2","1","0","1","*","*","1","0","1","2","2","1"]
  const [mapaValores, setMapaValores]=useState(Array(25).fill(" "));
  const celdas=mapaValores.map((item,index)=>
    <div className="col-auto p-0" key={index}><Celda valor={item} onCeldaClick=
  {()=>mostrarValor(index)}/></div> 
  );
  const [juegoEnCurso, setJuegoEnCurso] = useState(false);
 
  const mostrarValor= (index)=>{
    const valoresNuevos = mapaValores.slice();
    valoresNuevos[index] = valores[index];
    setMapaValores(valoresNuevos);
}

  // function answer button
  const btnComenzar= ()=>{
    setMapaValores(Array(25).fill(" "));
    setJuegoEnCurso(true);
  }

  const btnRestart = ()=>{
    setMapaValores(Array(25).fill(" ")); 
    setJuegoEnCurso(false);
  }

  return (
    <div className="container text-center" style={{ width: 340 }}>
      <div className="grid bg-body-secondary py-2 px-4 borderOutSide m-0">
        <div className="row bg-body-secondary borderInside ">
          <div className="d-flex flex-wrap justify-content-around">
            <Marcador Minas="100"/>
            <Emoji juegoEnCurso={juegoEnCurso} />
            <div
              className="lcdText text-danger pe-2 m-2 borderInsideS"
              style={{ width: 54 }}
            >
              00
            </div>
          </div>
        </div>
        <div className="row borderInside bg-body-secondary text-center justify-content-center">
          <div className="col my-1 p-0">
            <div className="d-flex flex-wrap justify-content-center">
              {celdas}
            </div>
          </div>
        </div>
      </div>
      <div><button className="btn btn-outline-secondary mt-2" onClick={btnComenzar}>Comienza la Partida</button></div>
      <div><button className="btn btn-outline-secondary mt-2" onClick={btnRestart}>Reinicio</button></div>
  
    </div>
  );
}

export default App;
