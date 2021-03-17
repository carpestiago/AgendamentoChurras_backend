const express = require('express');
const User = require('../models/User');

module.exports = {

    async store(req, res) {
        try {
            const user = await User.create(req.body);
    
            user.password = undefined;
    
            return res.send({ user })
        } catch (err) {
            return res.status(400).send({error: 'Falha no registro'})
        }
    }

}