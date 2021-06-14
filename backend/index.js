const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 420;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
const router = require('./routes/index')
app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
