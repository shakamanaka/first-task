const { contextBridge, ipcRenderer } = require('electron')
import WebSocket from 'ws'


contextBridge.exposeInMainWorld('socket', {
  ws: () => {return socket()}
})

const socket = () => {
  //Stablish Websocket connection
  let ws = new WebSocket("ws://127.0.0.1:6001/app/local");

  //On Open We Suscribe to channel mensajes
  ws.onopen = function(event){
    console.log(event);
    const msg = {
      event: "pusher:subscribe",
      data: {
        auth: "",
        channel: "mensajes"
      }
    };
    
    ws.send(JSON.stringify(msg));
    
  };
  ws.onerror = function(e){
    console.log(e.message)
  }

  //Receive websocket message
  ws.onmessage = function (event) {
    console.log('Message from server',  JSON.parse(event.data));
  };

}


