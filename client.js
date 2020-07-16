//https://edrestaurante.herokuapp.com/consulta/
//Consulta menu
const axios = require('axios');
/*
axios.get('https://edrestaurante.herokuapp.com/menu/')
    .then(function (response){
        const menu = response.data;
        console.log(JSON.stringify(menu));
    })
    .catch(function (error){
        console.log(error);
    })
    .then(function () {
        console.log("Execução concluída!");
    });
*/
//Cadastrar lanche
/*
axios.post("https://edrestaurante.herokuapp.com/menu/cadastrar", {
   'lanche': 'hotdog',
   'ingredientes': 'pão e salsicha',
   'preco' : '10.00'
    })
    .catch(function (error){
        console.log(error);
    })
    .then(function (response) {
        console.log(response.data);
    });

*/

//Excluir lanche

/*
axios.post("https://edrestaurante.herokuapp.com/menu/excluir", {
    'indice': '0'
    })
    .catch(function (error){
        console.log(error);
    })
    .then(function (response) {
    console.log(response.data);
});
*/

//Consultar carrinho
/*
axios.get("https://edrestaurante.herokuapp.com/carrinho")
    .then(function (response) {
    const carrinho = response.data;
    console.log("Itens no carrinho")
    console.log(JSON.stringify(carrinho));
});
*/

//Adicionar item ao carrinho
/*
axios.post("https://edrestaurante.herokuapp.com/carrinho/cadastrar", {
    'indice': '0'
    })
    .catch(function (error){
        console.log(error);
    })
    .then(function (response) {
        console.log(response.data);
    });
*/
//Excluir item do carrinho
/*
axios.post("https://edrestaurante.herokuapp.com/carrinho/excluir", {
    'indice': '0'
    })
    .catch(function (error){
        console.log(error);
    })
    .then(function (response) {
        console.log(response.data);
    });
*/
//Cadastro de endereço
/*
axios.post("https://edrestaurante.herokuapp.com/compra/endereco", {
    'endereco': 'Rua Leoncio Castro, III conj da Cohab'
    });
   .catch(function (error){
        console.log(error);
    })
    .then(function (response) {
        console.log(response.data);
    });
*/

//Compra
/*
axios.get("https://edrestaurante.herokuapp.com/compra")
.then(function (response) {
    const carrinho = response.data;
    console.log("Confirmada compra! \n" + JSON.stringify(carrinho))

});
*/