
function Equipo(props) {


  return (
    <div className="tablero_cabecera">
        <h3>{props.title}</h3>
        <h3>{props.contador}</h3>

        <img className='img_sel' src={props.bandera} alt="" />
      </div>
  );
}

export default Equipo;