const { model } = require('./../ProcessHandler');

const Board_review = async (req, res) => {
    const featureValue = req.body;
    var features = ['yearpublished', 'minplayers', 'maxplayers', 'playingtime', 'minage', 'users_rated', 'total_owners', 'total_traders', 'total_wanters', 'total_wishers', 'total_comments', 'total_weights', 'average_weight'];
    var X = [];
    for (var i = 0; i < features.length; ++i) X.push(featureValue[features[i]])
    model('boardGame', X, (ans) => res.send(ans));
}

module.exports = Board_review;