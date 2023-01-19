import { BrowserRouter as Router, Route, Routes, Link, Navigate} from "react-router-dom";
import {useEffect} from 'react';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/profilePage";
import TaskPage from "./pages/tasks/TaskPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import PropsPage from "./pages/home/PropsPage";

function AppRoutingOne() {


  let logged = false;
  
  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task'
    }
  ]

  useEffect(() => {

    logged = localStorage.getItem('credentials');
   
  }, []);

  return (
    <div className="App">
      <main>

        <Router>
          <div>
            <aside className="d-flex gap-3 mb-3">
              <Link to='/'> HOME </Link>
              <Link to='/about'> ABOUT </Link>
              <Link to='/profile'> PROFILE </Link>
              <Link to='/login'> LOGIN </Link>
              <Link to="/tasks/1">Task 1</Link>
              <Link to='/tasks/2'>Task 2</Link>
              <Link to='*'> 404 </Link>
            </aside>
          </div>

            <Routes>
              <Route exact path="/" element={<HomePage></HomePage>}> </Route>
              <Route path="/online-state" element={<PropsPage/>}> </Route>

              <Route path="/about" element={<AboutPage></AboutPage>}></Route>
              <Route path="/login" element={ logged ? <Navigate to={"/"}/> : <LoginPage></LoginPage>}></Route>

              <Route path="/profile" 
              element={logged ? <ProfilePage/> : <Navigate to={"/login"}></Navigate> }>
              </Route>

              <Route path='/tasks' element={<TaskPage />} />
              <Route path="/tasks/:id" element={<TaskDetailPage task={taskList}/>}> </Route>
              <Route path="/404" element={<NotFoundPage></NotFoundPage>}></Route>
              <Route path='*' element={<NotFoundPage></NotFoundPage>}> </Route>
            </Routes>
          </Router>
      </main>
   
    </div>
  );
}

export default AppRoutingOne;
