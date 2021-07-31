const { spawn } = require('child_process')

const Cancer_classification = async (req, res) => {
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
        if (result == 2) result = "Benign Cancer";
        else result = "Malignant Cancer";
        console.log(result);
    });
    python.stderr.on('data', function (e) {
        console.log(e.toString());
        result = "Some Error Occured. Please try after some time";
    });
    python.on('close', (code) => {
        res.send(result)
    });
}

module.exports = Cancer_classification;