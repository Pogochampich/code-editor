import { Routes, Route, BrowserRouter } from "react-router-dom"
import { useEffect, useState } from "react"
import LoginPage from './Login'
import RegistrationPage from './Registration'
import Loading from "../components/Loading/Loading"
import MainInput from "../components/MainInput/MainInput"
import "../components/MainInput/MainInput.scss"

function Task() {

  const [codeOpponent, setCodeOpponent] = useState('');
  const [attemptCountOpponent, setAttemptCountOpponent] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isOpponentReady, setIsOpponentReady] = useState(false);

  const socket = new WebSocket(`ws://134.0.116.26:4441`);

  function wsSocket() {

    socket.onopen = (event) => {
    };
    
    socket.onmessage = function(messageEvent) {

      let { event } = messageEvent.data;

      switch(event) {
        case 'connect':
          setIsConnected(true);
          break;
        case 'ready':
          setIsOpponentReady(true);
          break;
        case 'disconnect':
          socket.close();
          break;
        case 'pull':
          let {data} = messageEvent.data;
          setCodeOpponent(data);
          break;
        case 'attempt':
          setAttemptCountOpponent(attemptCountOpponent + 1);
          break;
        case 'lose':
          // Вызвать отображение модального окна, поражение.
          break;
      }
    };

    socket.onclose = function(event) {
      if (event.wasClean) {
        console.log('Соединение закрыто');
      } else {
        console.log('Обрыв соединения');
      }
    }
  
  }

  function textInput(text) {
    let message = {
      event: 'push',
      data: `${text}`
    }
    socket.send(JSON.stringify(message))
  }

  const MainInput = () => {
    return <div className='input'>
        <textarea id="left-input" cols="40" rows="5" onChange = {(event) => {textInput(event.target.value)} } />
        <textarea id="right-input" cols="40" rows="5" readOnly />
    </div>
}

  useEffect(() => {
    wsSocket();
  }, []);


  return (

    // <div>
    //   {!isConnected || isReady && !isOpponentReady && (<h1>sdaasdasda</h1>)}
    //   {isConnected && isReady && isOpponentReady && (<h1>Показываем основной интерфейс</h1>)}
    // </div>
    
    isConnected
      ? isReady
        ? isOpponentReady
          ? <div> <MainInput/> </div>
          : <div className='loading'> <Loading /> </div>
        : <div><h1>Показываем окно подтвердить готовность</h1></div>
      : <div className='loading'> <Loading /> </div>
  )
}

export default Task