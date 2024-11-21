const express =require('express');
const app = express();

const cors = require("cors");
app.use(cors());

const conversorTemperatura = require('./calculaTemperatura')

app.get('/', (req, res) => {
    let temperatura = req.query.temperatura
    let conversor = req.query.conversor

    if(conversorTemperatura.verificarTemperatura(temperatura)){
        let temperaturaG = conversorTemperatura.paraQualConverter(temperatura, conversor)
        let json = {temperatura: temperaturaG}
        res.json(json)
    } else {
        res.status(400).json({'erro': 'Temperatura invalida'});
    }
})

app.listen(8080, () => {
    let data = new Date();
    console.log(`SERVIDOR INICIADO - ${data}`)
})
