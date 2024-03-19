const express = require('express');
const app = express();

const { buscarFatosPorAno, validarAno } = require('./service/buscarAno.js');

app.get('/', (req, res) => {


    //Requisição
    let fatoAno = req.query.ano;
    if (validarAno(fatoAno)) {
        var fato = buscarFatosPorAno(fatoAno);
        res.json(fato);
    } else {
        res.status(400).json({ erro: 'Parâmetro inválido' });
    }
});

app.listen(1000, () => {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    console.log(`Servidor iniciado na porta 1000 em: ${date.toLocaleDateString('pt-BR')} às ${hour}:${minutes}`);
});