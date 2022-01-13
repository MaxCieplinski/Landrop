const express = require('express');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
// app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

const host = process.env.HOST;
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.render('index');
});

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`App running on ${host}:${port}`);
})