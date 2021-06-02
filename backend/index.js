const express = require('express')
const { spawn } = require('child_process')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const port = 420;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const router = express.Router();
app.use(router);

const Postmsg = async (req, res) => {
    const featureValue = req.body;
    var features = ['clump_thickness', 'uniform_cell_size', 'uniform_cell_shape',
        'marginal_adhesion', 'single_epithelial_size', 'bare_nuclei',
        'bland_chromatin', 'normal_nucleoli', 'mitoses']
    var X = [];
    for (var i = 0; i < features.length; ++i) X.push(featureValue[features[i]])

    var result;
    const python = spawn('python', ['script.py', X]);
    python.stdout.on('data', function (data) {
        result = data.toString();
        console.log(result);
    });
    python.stderr.on('data', function (e) {
        console.log(e.toString());
    });
    python.on('close', (code) => {
        res.send(result)
    });
}

router.post('/', Postmsg);
router.get('/', (req, res) => res.send("Hello from GET"));

// app.post('/', (req, res) => {

//     var dataToSend;
//     console.log(req.body);
//     const python = spawn('python', ['script.py']);
//     python.stdout.on('data', function (data) {
//         console.log('Pipe data from python script ...');
//         dataToSend = data.toString();
//     });
//     python.on('close', (code) => {
//         console.log(`child process close all stdio with code ${code}`);
//         res.send(dataToSend)
//     });
// });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    // const request = new Request('http://localhost:420/', { method: 'GET', body: { 'Chutiya': 'Hun' } });
    // fetch(request).then(res => console.log(res));//.catch((e) => console.log(e));
});
