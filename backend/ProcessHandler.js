const { spawn } = require('child_process');
const socketio = require("socket.io");

let Socket = null;

exports.CreateProcess = (server) => {
    const io = socketio(server);
    io.on('connection', (socket) => {
        Socket = socket;
        console.log('connected');
    });
    const python = spawn('python', ['./script/main.py']);

    python.stderr.on('data', function (e) {
        console.log(e.toString());
    });
    python.on('close', (code) => {
        console.log("Python Closed")
    });
}


exports.model = (model_name, feature, cb) => {
    try {
        Socket.emit(model_name, feature, (prediction) => cb(prediction))
    } catch (error) {
        cb("Some Error Occured. Please try after some time")
    }
}

