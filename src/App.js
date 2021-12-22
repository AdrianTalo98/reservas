
import Header from "./components/Header/header";
import Login from "./components/login";
import Obtener from "./components/obtenerCanchas";
import Reservas from "./components/reservas";


const App = () => {





  return(
    
    <div className="container mt-4">


      {
        sessionStorage.getItem('id') ? (
          <div>
            
            <Obtener/>
            <Reservas/>
            
            </div>
        ) : (<Login/>)
      }
      
    </div>
  )
}

export default App;