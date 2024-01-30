var socket = new WebSocket('ws://localhost:9000/ws');

let connect= (cb)=>{
    console.log("connecting")

    socket.onopen = () =>{
        console.log("successfully connected")
    }

    socket.onmessage = (msg)=>{
        console.log("Message from websocket:",msg);
        cb(msg);
    }

    socket.onclose = (event) =>{
        console.log("socket close connection:", event);
    }

    socket.onerror = (error)=>{
        console.log("socket error:",error);
    }
};

let sendMsg = (msg)=>{
    console.log("sending msg:",msg);
    socket.send(msg);
}

export {connect,sendMsg};