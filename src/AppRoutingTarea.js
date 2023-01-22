import {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from "react-router-dom";
import TaskListComponent from "./components/container/task_list";


import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

import HomePage from "./pages/home/HomePage";

function AppRoutingTarea() {

  let loggedIn = localStorage.getItem('credentials');

  useEffect(() => {

    loggedIn = localStorage.getItem('credentials');
   
  }, []);

  console.log(loggedIn);

  return (
    <div className="App">
      <Router>
          <div>
            <aside className="d-flex gap-3 mb-3">
              <Link to='/'> HOME </Link>
              <Link to='/login'> LOGIN </Link>
              <Link to='/register'> Register </Link>
              <Link to='/taskList'> Task </Link>
            </aside>
          </div>
        <Routes>

       
          <Route exact path='/' element={<HomePage></HomePage>}/>
          <Route path="/login" element={<LoginPage></LoginPage>}/>
          <Route path="/register" element={<RegisterPage></RegisterPage>}/>
          <Route path='/task' element={loggedIn ? <TaskListComponent/> : <Navigate to={'/login'}/>}/>
          <Route exact path='/taskList' element={loggedIn ? <Navigate to={'/task'}/>: <Navigate to={'/login'}/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutingTarea;
