import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact._list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {Componente Propio} */}
        {/* <Greeting name="Leonel"></Greeting> */}
        {/* <GreetingF name={"Leonel"}></GreetingF> */}
        {/* Componente de Listado de Tareas */}
        <TaskListComponent></TaskListComponent>
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;
