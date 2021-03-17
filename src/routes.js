const express = require("express");
const authController = require("./app/controllers/authController");
const churrasController = require("./app/controllers/churrasController");
const userController = require("./app/controllers/userController");
const routes = express.Router();

//faz o registro do usuário
routes.post('/register', authController.store);

//cria um churrasco
routes.post('/criarChurras', churrasController.criarChurras);

//lista os churrascos agendados
routes.get('/listarChurras', churrasController.listarChurras);

//lista os usuários registrados
routes.get('/buscaUsuarios', userController.buscaUsuarios);

//listar um churrasco com valores atualizados
routes.get("/buscaChurras/:idChurras", churrasController.buscarChurras);


module.exports = routes;