import React from 'react';
import {useState, useRef, useEffect } from 'react';
import socket from './socket';
import './Flights.css';

const Flights = () => {
    const [flight, setFlight] = useState("");
    const [flights, setFlights] = useState([]);
    const [flight_position, setPosition] = useState("")
    console.log(flight_position)
    useEffect(()=> {
        socket.on('FLIGHTS', flight => {
            setFlights(flight)
        })
        return () => {socket.off()}
    },[flights]);

    

    const submit = () => {
      socket.emit('FLIGHTS')
    }
    return (

        <div>
            <div className ='wrapper-flight' >
                <div className='two-flight'>
                    <div className='col-md-6-flight'>
                        <h6>Información de vuelos</h6>
                        <div className= "container-flight">
                            
                                {console.log(flights), flights.map(({code,airline,origin, destination, plane, seats, passengers}, i)=>(
                                    <div key={i}  className ='four-flight'>
                                        <h6>Vuelo {code}</h6>
                                        <div className='col-md-2'>Aerolínea: {airline}</div>  
                                        <div className='col-md-3'>Origen: ({origin[0]},{origin[1]})</div>
                                        <div className='col-md-3'>Destino: ({destination[0]}, {destination[1]})</div>
                                        <div className='col-md-2'>Avión: {plane}</div>
                                        <div className='col-md-2'>Asientos: {seats}</div>
                                        <div className='col-md-3'>Pasajeros: {passengers.map(({name, age},i)=>(
                                            <div key={i}  className ='four-passenger'>
                                                <div className='col-md-4'>Nombre: {name}, Edad: {age}</div> 
                                            </div>
                                        ))} 
                                        </div>
                                        
                                    </div>
                                    
                                ))}
                            
                        </div>
                                        
                        <span className='input-group-btn'>
                            <button id='submit' type='click' classname='btn btn-primary' onClick={submit}>
                                Obtener información de vuelos
                            </button>
                        </span>
                    </div>             
                </div> 
            </div>
        </div>
        )
}
 
export default Flights;