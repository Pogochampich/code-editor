import { Routes, Route, BrowserRouter } from "react-router-dom"
import { useEffect, useState } from "react"
import LoginPage from './Login'
import RegistrationPage from './Registration'
import ClipLoader from "react-spinners/ClipLoader";

function Task() {

  const [codeOpponent, setCodeOpponent] = useState('');
  const [isLoad, setIsLoad] = useState(true);
  const [attemptCountOpponent, setAttemptCountOpponent] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isOpponentReady, setIsOpponentReady] = useState(false);
  
  function wsSocket() {
    
    const socket = new WebSocket(`ws://134.0.116.26:4441`);

    socket.onopen = (event) => {
      socket.send(JSON.stringify({ event: 'ready' }));
    };
    
    socket.onmessage = function(messageEvent) {

      let { event } = messageEvent.data;

      switch(event) {
        case 'connect':
          setIsLoad(true);
          break;
        case 'ready':
          setIsLoad(false);
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
          ? <div><h1>Показываем основной интерфейс</h1></div>
          : <div> <ClipLoader color={'red'} loading={true} size={100}/> </div>
        : <div><h1>Показываем окно подтвердить готовность</h1></div>
      : <div> <ClipLoader color={'red'} loading={true} size={100}/> </div>
  )
}

export default Task