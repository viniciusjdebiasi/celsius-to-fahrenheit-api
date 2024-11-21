// função verificar para qual
function paraQualConverter(temperatura, conversor) {
    let resultado
    let conversorConv = conversor.toUpperCase()

    if (conversorConv != 'C' && conversorConv != 'F'){
        resultado = 'Conversor invalido'
    } else if (conversorConv == 'C'){
        resultado = converteParaCelsius(temperatura)
    } else if (conversorConv == 'F') {
        resultado = converteParaFahrenheit(temperatura)
    }

    return resultado
}

// função converte para celcius
function converteParaCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8
    return celsius.toFixed(2)
}

// função converte para faren
function converteParaFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32
    return fahrenheit
}

// verificar temperatura é numero
function verificarTemperatura(parametro){
    if(isNaN(parametro) || !parametro){
        return false;
    } else {
        return true;
    }
}

exports.paraQualConverter = paraQualConverter;
exports.verificarTemperatura = verificarTemperatura;
