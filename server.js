const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); 
const bcrypt = require('bcryptjs');

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

app.post('/cadastro', (req, res) =>{

  const {nome, email, telefone, senha} = req.body;
  const consulta = 'INSERT INTO users(Nome_Usuario, Email, Telefone, Senha) values(?,?,?,?)';

  bcrypt.hash(senha, 10, (erro, hashedPassword) => {
    if (erro) {
      console.error('Erro ao criar hash da senha:', erro);
      return res.status(500).send('Erro ao criar conta.');
    }

    conexao.query(consulta, [nome, email, telefone, hashedPassword], (erro, results) => {
      if (erro) {
        console.error('Erro ao inserir dados:', erro);
        return res.status(500).send('Erro ao cadastrar!');
      }
      res.status(200).send({ success: true, message: 'Cadastro realizado com sucesso!' });
    });
  });
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