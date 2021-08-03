const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { CreateProcess } = require('./ProcessHandler.js')

const app = express()
const port = process.env.PORT || 5000
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))
app.use(bodyParser.json({ limit: '50mb' }))

app.use(cors());
const router = require('./routes/index')
app.use('/', router)

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})

CreateProcess(server)