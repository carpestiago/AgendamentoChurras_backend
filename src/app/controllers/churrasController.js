const express = require('express');
const Churras = require('../models/Churras');

module.exports = {

    async criarChurras(req, res) {
        try {
            const criarChurras = await Churras.create(req.body);
    
            return res.send(criarChurras);

        } catch (err) {
            return res.status(400).send({error: 'Falha na criação do churrasco'})

        }
    },

    async listarChurras(req, res) {
        try {
            const churras = await Churras.find();
    
            return res.send(churras)

        } catch (err) {
            return res.status(400).send({error: 'Falha na busca dos churrascos'})

        }
    },

    async buscarChurras(req, res) {
        try {
            const calculoChurrasco = await Churras.findById({_id: req.params.idChurras});
            
            return res.send(calculoChurrasco);

        } catch (err) {
            return res.status(400).send({error: 'Falha na busca do churrasco'})
            
        }
    }

}