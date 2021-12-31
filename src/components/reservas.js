import { useEffect, useState } from "react";

const Reservas = () => {

    const [data,setData] = useState('');

    const historial = async() =>{
        
        await fetch('/reservas')
        .then(resp => resp.json())
        .then(data => setData(data))

    }

    useEffect(()=>{
        historial()
        //console.log(data)
    })





    


    return(
        <div>Reservas en general
        {
            data ? (
                <div>
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
                                data.map((data,key)=>(
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
                </div>



            ) : (<div>No hay na</div>)
        }
        </div>
    )
}

export default Reservas;