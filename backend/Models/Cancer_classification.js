const { spawn } = require('child_process')

const Postmsg = async (req, res) => {
    const featureValue = req.body;
    var features = ['clump_thickness', 'uniform_cell_size', 'uniform_cell_shape',
        'marginal_adhesion', 'single_epithelial_size', 'bare_nuclei',
        'bland_chromatin', 'normal_nucleoli', 'mitoses']
    var X = [];
    for (var i = 0; i < features.length; ++i) X.push(featureValue[features[i]])

    var result;
    const python = spawn('python', ['script/Cancer.py', X]);
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

module.exports = Postmsg;