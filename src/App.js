import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact._list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplol2 from './hooks/ejemplol2';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';
import GreeingStyled from './components/pure/greeingStyled';
import ClockComponent from './hooks/lifecycle/clockComponent';
import Father from './components/container/father';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* {Componente Propio} */}
        {/* <Greeting name="Leonel"></Greeting> */}
        {/* <GreetingF name={"Leonel"}></GreetingF> */}
        {/* Componente de Listado de Tareas */}
       
        {/* Tarea de ejercicio 1, 2,3 */}
        {/* <ContactListComponent></ContactListComponent> */}
        {/* Ejemplo de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplol2></Ejemplol2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* Todo lo que hay aqui dentro es tratado como props.children */}
        {/* <Ejemplo4 nombre='Leonel'>
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreeingStyled name='Leonel'></GreeingStyled> */}
        {/* <ClockComponent></ClockComponent> */}
      {/* </header> */}
      {/* <Father></Father> */}
      <TaskListComponent></TaskListComponent>

    </div>
  );
}

export default App;
