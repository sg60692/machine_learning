const { spawn } = require('child_process')

const Board_review = async (req, res) => {
    const featureValue = req.body;
    var features = ['yearpublished', 'minplayers', 'maxplayers', 'playingtime', 'minage', 'users_rated', 'total_owners', 'total_traders', 'total_wanters', 'total_wishers', 'total_comments', 'total_weights', 'average_weight'];
    var X = [];
    for (var i = 0; i < features.length; ++i) X.push(featureValue[features[i]])
    var result;
    const python = spawn('python', ['script/review.py', X]);
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

module.exports = Board_review;