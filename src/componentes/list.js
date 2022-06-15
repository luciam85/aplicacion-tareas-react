import "../App.css";
import ListaDeTareas from "./ListaDeTareas";

function Lista() {
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1>Mis Tareas pendientes</h1>
        <br></br>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default Lista;
