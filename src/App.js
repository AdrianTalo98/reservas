
import LoginTodo from "./components/loginTodo";
import Obtener from "./components/obtenerCanchas";
import Reservas from "./components/reservas";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MisReservas from "./components/misReservas";

const App = () => {


  const Logout = () => {
    sessionStorage.clear()
    window.location.reload();
  }



  return(

    <Router>
      
      <div className="container mt-4">


        {
          sessionStorage.getItem('id') ? (
            <div>

            <div className="btn-group">
              <Link to="/" className="btn btn-dark">
                Inicio
              </Link>
              <Link to="/reservar" className="btn btn-dark">
                Reservar
              </Link>

              <Link to="reservas" className="btn btn-dark">
                Mis reservas
              </Link>

              <button className="btn btn-danger" onClick={Logout}> Cerrar sesion</button>
              
              </div>  
                          
              <Routes>
              <Route path="/" element={ <Reservas/>} />
              <Route path="/reservar" element={<Obtener/>}/>
              <Route path="/reservas" element={<MisReservas usuario={sessionStorage.getItem('id')}/>}/>
              </Routes>

                      
                
                
              
              
            </div>
          ) : (<LoginTodo/>)
        }
        
      </div>
    </Router>
  )
}

export default App;