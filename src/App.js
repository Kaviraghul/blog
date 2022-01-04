import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
          <Route exact path='/settings' element={< Settings />}></Route>
          <Route exact path='/post/:id' element={< Single />}></Route>
          <Route exact path='/write' element={< Write />}></Route>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
