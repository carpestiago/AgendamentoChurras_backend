const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

mongoose.set("useFindAndModify", false);

//autoriza a aplicação a receber dados no formato json
app.use(express.json());

//dá um apoio na hora de lidar com as requisições no padrão url encoder (pra hora de fazer upload de arquivos)
app.use(express.urlencoded({ extended: true }));

//conecta com o db
mongoose.connect('mongodb+srv://carpestiago:12345@cluster0.w9cbj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',  
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true 
});

mongoose.Promise = global.Promise;

//lista de models
require("./app/models/User");
require("./app/models/Churras");

//chama as rotas
app.use("/api", require("./routes"));

//porta onde a aplicação ta rodando no navegador
app.listen(3001)