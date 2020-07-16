const express = require('express');

const app = express();

const porta = process.env.PORT || 2000;

var menu = [];
var carrinho = [];

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//consulta menu com posição
app.get("/menu/:pos",(req,res) => {
    const posicao = req.params.pos;
    res.send(JSON.stringify(menu[posicao]));
});

//consulta menu completo
app.get("/menu",(req,res) => {
    res.send(JSON.stringify(menu));
});

//cadastra lanche
app.post("/menu/cadastrar", (req,res) => {
    const lanche = req.body;
    menu.push(lanche);
    console.log(lanche);
    res.send("Item adicionado!");
});
//exclusão de lanche
app.post("/menu/excluir", function(req, res) {
    const index = req.body;
    menu.splice(index.indice, 1)
    console.log(menu);
    res.send("Item Excluído!");
});
//Lista de lanches no carrinho a serem comprados
app.get("/carrinho",(req,res) => {
    res.send(JSON.stringify(carrinho));
});
//Adiciona lanche ao carrinho
app.post("carrinho/cadastrar", function(req, res) {
    const index = req.body;
    carrinho.push(menu[index]);
    console.log(carrinho);
    res.send("Adicionado ao carrinho!");
});
//Exclui lanche do carrinho
app.post("/carrinho/excluir", function(req, res) {
    const index = req.body;
    carrinho.splice(index.indice, 1)
    console.log(carrinho);
    res.send("Item Excluído!");
});
//Cadastro de endereço
app.post("/compra/endereco", function(req, res) {
    const endereco = req.body;
    carrinho.push(endereco);
    console.log(JSON.stringify(endereço) + "--- Foi cadastrado!");
    res.send("ENDEREÇO CADASTRADO!");
});
//Compra
app.get("/compra", function(req, res) {
    res.send(JSON.stringify(carrinho));
    console.log(carrinho + "--- compra confirmada!");
});

app.listen(porta, () => {
    console.log("servidor inicializado!")
});

