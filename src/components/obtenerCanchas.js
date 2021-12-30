import {React, useEffect, useState} from 'react';
import makeRandomId from './generateID';


const Obtener = () => {

    const [canchas1,setCanchas1] = useState([]);
    const [canchas2,setCanchas2] = useState([]);
    const [canchas3,setCanchas3] = useState([]);

    const [selcancha1,setSelcancha1] = useState('');
    const [selcancha2,setSelcancha2] = useState('');
    const [selcancha3,setSelcancha3] = useState('');

    const Canchas1 = async() =>{
        
        await fetch('http://localhost:5000/canchas1')//localhost recoradr añadir la wea al proxy en packet json
        //.then(resp => resp.json())
        .then(resp => resp.json())
        .then(data => setCanchas1(data))

    }
    const Canchas2 = async() =>{
        
        await fetch('http://localhost:5000/canchas2')
        .then(resp => resp.json())
        .then(data => setCanchas2(data))

    }
    const Canchas3 = async() =>{
        
        await fetch('http://localhost:5000/canchas3')
        .then(resp => resp.json())
        .then(data => setCanchas3(data))

    }


    const handleSubmit1 = async (e) => {
        e.preventDefault();

        const rut = sessionStorage.getItem('id');

        const dataCancha = JSON.parse(selcancha1)
        

        const data = {
            Codigo_reserva : makeRandomId(15),
            id_cancha : dataCancha.id_cancha,
            rut_cliente : rut,
            fecha : dataCancha.fecha.substring(0,10),
            hora : dataCancha.hora
        }        
        

        async function postName() {
            
            const response = await fetch('http://localhost:5000/reservar', {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'}
            });
            const responseText = await response.text();
            console.log(responseText); // logs 'OK'
          }
          postName();

          alert("Reservado con exito");
          window.location.reload();
        
        //console.log(data)
        //console.log(JSON.stringify(data))
    }


    const handleSubmit2 = async (e) => {
        e.preventDefault();

        const rut = sessionStorage.getItem('id');

        const dataCancha = JSON.parse(selcancha2)
        

        const data = {
            Codigo_reserva : makeRandomId(15),
            id_cancha : dataCancha.id_cancha,
            rut_cliente : rut,
            fecha : dataCancha.fecha.substring(0,10),
            hora : dataCancha.hora
        }        
        

        async function postName() {
            
            const response = await fetch('http://localhost:5000/reservar', {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'}
            });
            const responseText = await response.text();
            console.log(responseText); // logs 'OK'
          }
          postName();

          alert("Reservado con exito");
          window.location.reload();
        
        //console.log(data)
        //console.log(JSON.stringify(data))
    }
    const handleSubmit3 = async (e) => {
        e.preventDefault();

        const rut = sessionStorage.getItem('id');

        const dataCancha = JSON.parse(selcancha3)        

        const data = {
            Codigo_reserva : makeRandomId(15),
            id_cancha : dataCancha.id_cancha,
            rut_cliente : rut,
            fecha : dataCancha.fecha.substring(0,10),
            hora : dataCancha.hora
        }        
        
        console.log(data)

        async function postName() {
            
            const response = await fetch('http://localhost:5000/reservar', {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'}
            });
            const responseText = await response.text();
            console.log(responseText); // logs 'OK'
          }
          postName();

          alert("Reservado con exito");
          window.location.reload();
        
        //console.log(data)
        //console.log(JSON.stringify(data))
    }
    useEffect(()=>{
        Canchas1();
        Canchas2();
        Canchas3();

    },[])
        
    return(
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                
                canchas1 ? (
                    
                    
                                
                                <div className="col">
                                <div className="card">
                                    <img src="https://terrasoccer.cl/wp-content/uploads/2019/09/football-field.png" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                    <h5 className="card-title">Cancha 000001</h5>

                                    <p className="card-text">Capacidad: 14 jugadores</p>
                                    <p className="card-text">Costo: $25000.</p>
                                    </div>
                                    <div className="card-footer">

                                        <select className="form-select" aria-label="Default select example" onChange={e => setSelcancha1(e.target.value)}>   
                                        <option value={''} selected>Horarios disponibles.</option>    
                                         

                                        
                                        {

                                            canchas1.map((data,key)=>(
                                                
                                                <option key={key} value={JSON.stringify(data)}>Hora: {data.hora}  Fecha: {data.fecha.substr(0,10)}</option>
                                                
                                            ))
                                            
                                            
                                        }
                                        
                                        
                                        </select>            
                                        

                                    </div>
                                    {
                                        selcancha1 ? (
                                            <button onClick={handleSubmit1} className='btn btn-outline-success'>Agendar</button>
                                        ) : (
                                            <button className='btn btn-outline-success' disabled>Agendar</button>
                                        )
                                    }
                                </div>
                                
                    </div>
                ) : (
                    <div>Waiting...</div>
                )
            }
                        {
                canchas2 ? (
                    

                                <div className="col">
                                <div className="card">
                                    <img src="https://terrasoccer.cl/wp-content/uploads/2019/09/football-field.png" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                    <h5 className="card-title">Cancha 000002</h5>

                                    <p className="card-text">Capacidad: 12 jugadores</p>
                                    <p className="card-text">Costo: $22000.</p>
                                    </div>
                                    <div className="card-footer">
                                    <select className="form-select" aria-label="Default select example"  onChange={e => setSelcancha2(e.target.value)}>   
                                        <option value={''} selected>Horarios disponibles.</option>      
                                                                                                       
                                        {

                                            canchas2.map((data,key)=>(
                                                //<button key={key} className="btn btn-outline-dark mb-1">Hora: {data[2]}  Fecha: {data[1].substr(5,7)}</button>
                                                <option key={key} value={JSON.stringify(data)}>Hora: {data.hora}  Fecha: {data.fecha.substr(5,7)}</option>
                                            ))
                                        }
                                        </select>            

                                    </div>
                                    {
                                        selcancha2 ? (
                                            <button onClick={handleSubmit2} className='btn btn-outline-success'>Agendar</button>
                                        ) : (
                                            <button className='btn btn-outline-success' disabled>Agendar</button>
                                        )
                                    }
                                </div>
                                
                    </div>
                ) : (
                    <div>Waiting...</div>
                )
            }

{
                canchas3 ? (
                    

                                <div className="col">
                                <div className="card">
                                    <img src="https://terrasoccer.cl/wp-content/uploads/2019/09/football-field.png" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                    <h5 className="card-title">Cancha 000003</h5>

                                    <p className="card-text">Capacidad: 10 jugadores</p>
                                    <p className="card-text">Costo: $20000.</p>
                                    </div>
                                    <div className="card-footer">
                                    <select className="form-select" aria-label="Default select example" onChange={e => setSelcancha3(e.target.value)}>   
                                        <option value={''} selected>Horarios disponibles.</option>                                                                  
                                        {

                                            canchas3.map((data,key)=>(
                                                //<button key={key} className="btn btn-outline-dark mb-1">Hora: {data[2]}  Fecha: {data[1].substr(5,7)}</button>
                                                <option key={key} value={JSON.stringify(data)}>Hora: {data.hora}  Fecha: {data.fecha.substr(5,7)}</option>
                                            ))
                                        }
                                        </select>            

                                    </div>
                                    {
                                        selcancha3 ? (
                                            <button onClick={handleSubmit3} className='btn btn-outline-success'>Agendar</button>
                                        ) : (
                                            <button className='btn btn-outline-success' disabled>Agendar</button>
                                        )
                                    }
                                </div>
                                
                    </div>
                ) : (
                    <div>Waiting...</div>
                )
            }


            </div>
            
        </div>
    )
}

export default Obtener;