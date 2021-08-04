const { spawn } = require('child_process');
const socketio = require("socket.io");

let Socket = null;

exports.CreateProcess = (server) => {
    const io = socketio(server, {
        rejectUnauthorized: false
    });
    io.on('connection', (socket) => {
        Socket = socket;
        console.log('connected');
    });
    setTimeout(() => {
        const python = spawn('python', ['./script/main.py']);

        python.stdout.on('data', function (data) {
            console.log(data.toString());
        });
        python.stderr.on('data', function (e) {
            console.log(e.toString());
        });
        python.on('close', (code) => {
            console.log("Python Closed")
        });
    }, 5000);
}


exports.model = (model_name, feature, cb) => {
    try {
        Socket.emit(model_name, feature, (prediction) => cb(prediction))
    } catch (error) {
        cb("Some Error Occured. Please try after some time")
    }
}

