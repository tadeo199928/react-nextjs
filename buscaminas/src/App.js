import logo from './logo.svg';
import './App.css';
import Celda from './Celda'
import Marcador from './Marcado';

function App() {
  //Def val/ props
  const mapaValores=["1","1","1","0","0","1","*","1","0","0","1","1","2","2","1","0","1","*","*","1","0","1","2","2","1"];
  const celdas=mapaValores.map((item,index)=>
    <div className="col-auto p-0" key={index}><Celda valor={item}/></div> 
  );
  return (
    <div className="container text-center" style={{ width: 340 }}>
      <div className="grid bg-body-secondary py-2 px-4 borderOutSide m-0">
        <div className="row bg-body-secondary borderInside ">
          <div className="d-flex flex-wrap justify-content-around">
            <Marcador Minas="100"/>
            <div className="align-self-center m-2 borderInsideS">
              <img src="acierto.png" style={{ width: 50 }} />
            </div>
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
    </div>
  );
}

export default App;
