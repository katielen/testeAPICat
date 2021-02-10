const express = require('express');
const bodyParsed = require('body-parser');

const app = express();

app.use(bodyParsed.json());
app.use(bodyParsed.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("olá mundo");
})
//servidor
app.listen(3000, () => console.log("servidor rodando na porta 3000"));

