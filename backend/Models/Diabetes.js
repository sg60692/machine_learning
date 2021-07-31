const { spawn } = require('child_process');

const Diabetes = async (req, res) => {
    const featureValue = req.body;
    const features = ["Pregnancies", "Glucose", "BloodPressure", "SkinThickness", "Insulin", "BMI", "DiabetesPedigreeFunction", "Age"];
    var X = [];
    for (var i = 0; i < features.length; ++i) X.push(featureValue[features[i]])
    var result;
    const python = spawn('python', ['script/Diabetes.py', X]);
    python.stdout.on('data', function (data) {
        result = data.toString();
        if (result == 1) result = "Patient has high chance of diabetes.";
        else result = "Patient has low chance of diabetes.";
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

module.exports = Diabetes;