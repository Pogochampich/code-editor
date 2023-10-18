import { Routes, Route, BrowserRouter } from "react-router-dom"
import { useEffect } from "react"
import LoginPage from './Login'
import RegistrationPage from './Registration'

function Task() {

  useEffect(() => {
    const socket = new WebSocket(`ws://134.0.116.26:4441`);
    
    socket.onopen = (event) => {
      socket.send(JSON.stringify({ event: 'ready' }));
    };

    socket.onmessage = function(event) {
      console.log(event);
    };

    socket.onclose = function(event) {
      if (event.wasClean) {
        console.log('Соединение закрыто');
      } else {
        console.log('Обрыв соединения');
      }
    }

  }, []);

  return (
    <>
     <div>

     </div>
    </>
  )
}

export default Task