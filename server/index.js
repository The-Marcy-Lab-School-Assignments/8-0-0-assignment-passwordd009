// index.js
const express = require('express');
const app = express();

const serveIndex = (req, res, next) => {
    res.sendFile(__dirname + '/index.html')
};

const serveInfo = (req, res, next) => {
    res.send('<h1>Info Page</h1>')
};

const serveHelp = (req, res, next) => {
    res.send('help')
};

const serveSchool = (req, res, next) => {
    const name = req.query.name || "I don't go to school"
    name === req.query.name ? res.send(`I attend ${name}`) : res.send(`${name}`)
}

app.get('/', serveIndex);
app.get('/info', serveInfo);
app.get('/api/hello', serveHelp)
app.get('/api/school', serveSchool)

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 