const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); 

const app = express();

app.use(cors());
app.use(express.json());

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2006',
  database: 'login'
});

conexao.connect((erro) => {
  if (erro) throw erro;
  console.log('Conectado ao banco de dados!');
});



app.post('/login', (req, res) => {

  const { usuario, senha } = req.body;
  const consulta = 'SELECT * FROM users WHERE usuario = ? AND senha = ?';

  conexao.query(consulta, [usuario, senha], (erro, results) => {
    if (erro) {
      res.status(500).send({ success: false, message: 'Erro no servidor' });
      return;
    }
    if (results.length > 0) {
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});