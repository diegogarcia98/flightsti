import React ,{useState} from 'react';
import Chat from './components/chat'
import Flights from './components/flights';

import './App.css';

function App() {

  const [name, setName] = useState("");
  const [registrado, setRegistrado] = useState(false);

  const registrar = (e) => {
      e.preventDefault();
      if(name !== ""){
          setRegistrado(true);
      }
  }
  return (
    <React.Fragment> 
      <div className='wrapper-chat'>
        {
          !registrado && 
          <div className='three'>
            <form onSubmit={registrar}>
              <h6>Introduzca un nombre de usuario</h6>
              <div className='input-group'>
                  <input
                      type='text'
                      className='form-control'
                      onChange={e=>setName(e.target.value)}
                      value={name}
                      id='text'
                      />
              </div>
              <span className='input-group-btn'>
                  <button id='submit' type='submit' classname='btn btn-primary'>
                      Ir al Chat
                  </button>
              </span> 
            </form>
          </div>
        }
        {
          registrado &&
          <Chat name={name}/>
          
        }
        
      
      
      </div>
      <Flights/>
      
    </React.Fragment> 
  );
}

export default App;
