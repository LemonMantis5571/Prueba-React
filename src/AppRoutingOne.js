import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/profilePage";
import TaskPage from "./pages/tasks/TaskPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";

function AppRoutingOne() {
  return (
    <div className="App">
      <main>

        <Router>
          <div>
            <aside>
              <Link to='/'> HOME </Link>
              <Link to='/about'> About </Link>
              <Link to='/profile'> Profile </Link>
              <Link to='*'> 404 </Link>
            </aside>
          </div>

            <Routes>
              <Route exact path="/" element={<HomePage></HomePage>}> </Route>
              <Route path="/about" element={<AboutPage></AboutPage>}></Route>
              <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
              <Route path="/tasks" element = {<TaskPage></TaskPage>}></Route>
              <Route path="/tasks/:id" element = {<TaskDetailPage></TaskDetailPage>}></Route>
              
              <Route path="/404" element={<NotFoundPage></NotFoundPage>}></Route>
              <Route path='*' element={<NotFoundPage></NotFoundPage>}> </Route>
            </Routes>
          </Router>
      </main>
   
    </div>
  );
}

export default AppRoutingOne;
