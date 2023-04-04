import Equipo from './Equipo';
import { useState } from 'react';
import Arg from "../img/arg.svg";
import Usa from "../img/usa.svg";

function Tablero(props) {

  const [local, setLocal] = useState(0)
  const [visitante, setVisitante] = useState(0)

  return (
    <>
      <h4>{props.children}</h4>
      <div className='tablero_grupo'>
        <div className='contenedor_local'>
          {/* Inyección de componente */}
          <Equipo title="Local: " contador={local} bandera={Arg} />

          <button className='btn_inc' onClick={setLocal(local + 1)}>+ 1</button>
          <button className='btn_inc' onClick={setLocal(local + 2)}>+ 2</button>
          <button className='btn_inc' onClick={setLocal(local + 3)}>+ 3</button>
          <button className='btn_dec' onClick={setLocal(local - 1)}>- 1</button>
          <button className='btn_dec' onClick={setLocal(local -2)}>- 2</button>
          <button className='btn_dec' onClick={setLocal(local -3)}>- 3</button>
        </div>
        <div className='contenedor_visitante'>
          {/* Inyección de componente */}
          <Equipo title="Visitante: " contador={visitante} bandera={Usa} />

          <button className='btn_inc' onClick={setVisitante(visitante + 1)}>+ 1</button>
          <button className='btn_inc' onClick={setVisitante(visitante + 2)}>+ 2</button>
          <button className='btn_inc' onClick={setVisitante(visitante + 3)}>+ 3</button>
          <button className='btn_dec' onClick={setVisitante(visitante - 1)}>- 1</button>
          <button className='btn_dec' onClick={setVisitante(visitante - 2)}>- 2</button>
          <button className='btn_dec' onClick={setVisitante(visitante - 3)}>- 3</button>

        </div>
      </div>
      <button onClick={setVisitante(setVisitante(0), setLocal(0))}>Reiniciar tablero</button>
    </>
  )
  
}


export default Tablero;