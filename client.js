//https://edrestaurante.herokuapp.com/consulta/
const axios = require('axios');
axios.get('https://edrestaurante.herokuapp.com/consulta/')
    .then(function (response){
        const cardapio = response.data;
        console.log("Primeiro lanche"+ JSON.stringify(cardapio[0]));
    })


    .catch(function (error){
        console.log(error);
    })


    .then(function () {
        console.log("Execução concluída!");
    });