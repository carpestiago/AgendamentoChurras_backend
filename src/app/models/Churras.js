const mongoose = require('mongoose');

const ChurrasSchema = new mongoose.Schema({
    nomeChurras: {
        type: String,
        required: false
    },
    data: {
        type: String,
        required: false
    },
    descricao: {
        type: String,
        required: false
    },
    obsAdd: {
        type: String,
        required: false
    },
    valorTotal: {
        type: Number,
        required: false
    },
    participantes: [{
        valorArrecadado: {
            type: Number,
            required: false,
            default: 0
        },
        nomeParticipante: {
            type: String,
            required: false
        },
        pago: {
            type: Boolean,
            required: false,
            default: false
        },
        bebida: {
            type: Boolean,
            required: false,
            default: true
        },
    }],    


});

const Churras = mongoose.model('Churras', ChurrasSchema);

module.exports = Churras;