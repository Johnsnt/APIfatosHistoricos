const express = require('express');
const app = express();

const buscarFatos = require('./service/buscarAno');

app.get('/', (req, res) => {
    //Requisição
    let fatoAno = req.query.ano;
    let fato = buscarFatos.buscarFatosPorAno(fatoAno);

    let caixaInfo = {
        message: 'API de fatos históricos',
        year: fato
    };

    res.json(caixaInfo);
});

app.listen(1000, () => {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    console.log(`Servidor iniciado na date: ${date.toLocaleDateString('pt-BR')} às ${hour}:${minutes}`);
});