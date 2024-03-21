// Importando as dependências gerais
const express = require('express');
const bodyParser = require('body-parser');

// Inicializando o express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analisar requisições JSON
app.use(bodyParser.json());

// CONST ehPalindromo

const ehPalindromo = (str) => {
    const strLimpa = str.toLowerCase().replace(/[\W_]/g, '');
    const strInvertida = strLimpa.split('').reverse().join('');
    return strLimpa === strInvertida;
};

// Método POST
app.post('/api/manipulacao-string', (req, res) => {
    const texto = req.body.texto;

    // Verificar se o corpo da requisição contém o campo 'texto'
    if (!texto) {
        return res.status(400).json({ error: 'O campo "texto" é obrigatório' });
    }

    try {
        
        // Verificar se a string é um palíndromo
        const palindromo = ehPalindromo(texto);
        
        // Contar o número de ocorrências de cada caractere

        res.status(200).json({ palindromo });
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Método GET básico
app.get('/', function (req, res) {
  res.send(`Servidor respondendo método GET na porta ${PORT}`)
})

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});