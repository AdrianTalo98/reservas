import { useEffect, useState } from "react";


const MisReservas = (props) => {

    
    const state = {
        id : props.usuario
    }

    const [res,setRes] = useState('')

    async function obtener() {        
            
        const response = await fetch('http://localhost:5000/misReservas', {//cambiar /register a /newUser
          method: 'POST',
          body: JSON.stringify(state),
          headers: {
            'Content-Type': 'application/json'}
        });
        const responseText = await response.json();

        //console.log(responseText)
        setRes(responseText)
        //console.log(responseText); // logs 'OK'
        
        return responseText

    }    
    useEffect(()=>{
        obtener() 
    },[]) 

    

    

    return(
        <div>
            {
                res ? (

                    <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Codigo de reserva</th>
                            <th scope="col">Cancha Numero</th>
                            <th scope="col">Rut cliente</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                res.map((data,key)=>(
                                    <tr key={key}>
                                        <th scope="row">{data.codigo_reserva}</th>
                                        <td>{data.id_cancha}</td>
                                        <td>{data.rut_cliente}</td>
                                        <td>{data.fecha.substr(0,10)}</td>
                                        <td>{data.hora}</td>
                                    </tr>
                                ))
                            }
                        </tbody>



                    </table>
                    </div>

                    
                ) : (<div>No hay data </div>)
            }
        </div>
    )

}

export default MisReservas;