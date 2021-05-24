import React from 'react';
import {useState, useRef, useEffect } from 'react';
import socket from './socket';
import './Chat.css';

const Chat = ({name}) => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    
    

    useEffect(()=> {
        socket.on('CHAT', message => {
            setMessages([...messages, message])
        })
        return () => {socket.off()}
    },[messages]);

    const submit = (e) => {
        e.preventDefault();
        socket.emit('CHAT', {name , message})
    }
    
    return (

        <div className ='wrapper-chat' >
            <div className='three'>
                <div className='col-md-6'>
                    <h6>Chat de {name}</h6>
                    <div className= "container-2">
                    {messages.map(({name, date,message}, i) => (
                        <div key={i} className ='row mb-1'>
                            <div className='col-md-2'>{name}</div> 
                            <div className='col-md-2'>{new Date(date).toLocaleString()}</div> 
                            <div className='col-md-2'>{message}</div> 
                        </div>
                    ))}
                    </div>
                    
                    <form onSubmit={submit} id='form'>
                        <div className='input-group'>
                            <input
                                type='text'
                                className='form-control'
                                onChange={e=>setMessage(e.target.value)}
                                value={message}
                                id='text'
                            />
                            <span className='input-group-btn'>
                                <button id='submit' type='submit' classname='btn btn-primary'>
                                    Enviar
                                </button>
                            </span>
                        </div>   
                    </form>
                </div>
            </div>
        </div>
        )
}
 
export default Chat;




