const express = require('express');

const app = express();

const porta = process.env.PORT || 2000;

var cardapio = [];

app.get("/consulta/:pos",(req,res) => {
    const posicao = req.params.pos;
    res.send(JSON.stringify(cardapio[posicao]));
});

app.get("/consulta",(req,res) => {
    res.send(JSON.stringify(cardapio));
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/lanche", (req,res) => {
    const lanche = req.body;
    cardapio.push(lanche);
    console.log(req.body);
    res.send("ok");
});

app.listen(porta, () => {
    console.log("servidor inicializado!")
});

