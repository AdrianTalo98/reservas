import { useState } from "react"

import Registrar from "./register"


function Login() {

    const [state , setState] = useState({
        correo : "",
        password : ""

    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        

        async function postName() {
            
            const response = await fetch('http://localhost:5000/login', {
              method: 'POST',
              body: JSON.stringify(state),
              headers: {
                'Content-Type': 'application/json'}
            });
            const responseText = await response.text();
            //console.log(JSON.parse(responseText))
            sessionStorage.setItem('id',JSON.parse(responseText))
          }

          postName()
          window.location.reload();
        
        //console.log(state)
    }

    return(
          <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
              <form>
                  <div className="form-group text-left">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" 
                         className="form-control" 
                         id="correo" 
                         aria-describedby="emailHelp" 
                         placeholder="Enter correo"
                         value={state.correo}
                         onChange={handleChange}


                  />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group text-left">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" 
                          className="form-control" 
                          id="password" 
                          placeholder="Password"
                          value={state.password}
                          onChange={handleChange}
                      />
                  </div>               
                  

                  <button 
                      type="submit" 
                      className="btn btn-primary"
                      onClick={handleSubmitClick}
                  >
                      Ingresar
                  </button>
              </form>           
 
           </div>
      )
  }

export default Login;