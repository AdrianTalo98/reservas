import { useState } from "react/cjs/react.development";
import Login from "./login"
import Registrar from "./register";


const LoginTodo = () => {

    const [estado,setEstado] = useState(<Login/>)

    const handleLog = () => {
        setEstado(<Registrar/>)
        document.getElementById("test").style.display="none"
    }


    return(
        <div>
            {estado}
            <button id="test" onClick={handleLog} className="btn btn-success">Registrar</button>
        </div>
    )
}



export default LoginTodo;
