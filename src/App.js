
import LoginTodo from "./components/loginTodo";
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
        ) : (<LoginTodo/>)
      }
      
    </div>
  )
}

export default App;