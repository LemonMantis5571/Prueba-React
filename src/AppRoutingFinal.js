import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

import NotFoundPage from './pages/404/NotFoundPage';

import LoginPage from "./pages/auth/LoginPage";

import DashBoardPage from "./pages/dashboard/DashBoard";

function AppRoutingFinal() {

  let loggedIn = true

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = '/' 
          element={loggedIn ? <Navigate to={'/dashboard'}/> : <Navigate to={'/login'}/>} />

          <Route exact path="/login" element={<LoginPage/>}/>

          <Route exact path="/dashboard" 
          element={loggedIn ? <DashBoardPage/> : <LoginPage/>}/>

          <Route element={ <NotFoundPage/> } > </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutingFinal;
