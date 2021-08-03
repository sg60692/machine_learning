const { model } = require('./../ProcessHandler');

const Digit = async (req, res) => {
    let featureValue = req.body.imageUrl;
    model('digit', featureValue, (ans) => res.send(ans));
}

module.exports = Digit;