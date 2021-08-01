const { spawn } = require('child_process');

const Digit = async (req, res) => {
    let featureValue = req.body.imageUrl;
    var result;
    const python = spawn('python', ['script/Digit.py', featureValue]);
    python.stdout.on('data', function (data) {
        result = data.toString();
        console.log(data.toString());
    });
    python.stderr.on('data', function (e) {
        console.log(e.toString());
        result = "Some Error Occured. Please try after some time";
    });
    python.on('close', (code) => {
        res.send(result)
    });
}

module.exports = Digit;