const { model } = require('./../ProcessHandler');

const Cancer_classification = async (req, res) => {
    const featureValue = req.body;
    var features = ['clump_thickness', 'uniform_cell_size', 'uniform_cell_shape',
        'marginal_adhesion', 'single_epithelial_size', 'bare_nuclei',
        'bland_chromatin', 'normal_nucleoli', 'mitoses']
    var X = [];
    for (var i = 0; i < features.length; ++i) X.push(featureValue[features[i]])

    model("cancer", X, (ans) => res.send(ans));
}

module.exports = Cancer_classification;