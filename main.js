const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 3000

 
 app.use(bodyParser.json());


app.post('/run', (req, res) => {
    const cmd = req.body['cmd']
    console.log("executing: " + cmd)
    eval(cmd)
})


app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
})