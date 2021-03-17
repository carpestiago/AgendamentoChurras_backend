const express = require('express');
const User = require('../models/User');

module.exports = {

    async buscaUsuarios(req, res) {
        try {
            const user = await User.find({}, {_id: 0, name: 1}).sort({name:'asc'});
    
            return res.send(user)
        } catch (err) {
            return res.status(400).send({error: 'Falha no registro'})
        }
    }

}