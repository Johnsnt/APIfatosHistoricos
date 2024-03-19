const data = require('../data/fatos');

function validarAno(anoEscolhido) {
    if (isNaN(anoEscolhido)){
        return false
    }
    else {
        if (anoEscolhido >= 1920 && anoEscolhido <= 2020){
            return true
        } else {
            return false
        }
    }
}

function buscarFatosPorAno(anoEscolhido) {
    const fatoEscohido = data.fatos.filter((data) => data.ano == anoEscolhido);
    return fatoEscohido[0];
}


module.exports = {
    buscarFatosPorAno: buscarFatosPorAno,
    validarAno: validarAno
}


