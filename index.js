const express = require('express')
const app = express()
const port = 3000


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

app.get('/enrollPayment', (req, res) => {
    console.log("Enroll Payment Invoked");
    res.send('Payment Enrolled! :  EMP'+ getRandomInt(10000000))
})

app.get('/createServiceNowTicket', (req, res) => {
    console.log("Create Service Now ticket Invoked");
    res.send('Created Service Now Ticket! : SR' + getRandomInt(10000000))
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})