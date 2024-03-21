// Importando as dependências gerais
const express = require('express');
const bodyParser = require('body-parser');

// Inicializando o express
const app = express();
const PORT = process.env.PORT || 3000;

// Método GET básico
app.get('/', function (req, res) {
  res.send(`Servidor respondendo método GET na porta ${PORT}`)
})

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});