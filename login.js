document.getElementById('btn-login').addEventListener('click', async function(evento) {
   evento.preventDefault();
   
   const usuario = document.getElementById('usuario').value;
   const senha = document.getElementById('senha').value;

   console.log('Enviando dados: ', { usuario, senha });
   
   try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario, senha })
    });

    const result = await response.json();
    if (result.success) {
      alert('Login realizado com sucesso!');
    } else {
      alert('Usuário ou senha inválidos.');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao conectar ao servidor.');
  }

})