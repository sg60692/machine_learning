const { model } = require('./../ProcessHandler');

const Diabetes = async (req, res) => {
    const featureValue = req.body;
    const features = ["Pregnancies", "Glucose", "BloodPressure", "SkinThickness", "Insulin", "BMI", "DiabetesPedigreeFunction", "Age"];
    var X = [];
    for (var i = 0; i < features.length; ++i) X.push(featureValue[features[i]])
    model('diabetes', X, (ans) => res.send(ans));
}

module.exports = Diabetes;