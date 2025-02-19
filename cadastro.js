

document.getElementById('btn-cadastro').addEventListener('click', async function (cadastro) {
    cadastro.preventDefault();


    let valido = true;
    // Capturar valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
        
    // Expressão para validar senha
    const regexSenha = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
        


    try{
        const resposta = await fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nome, email, telefone, senha})

        });

        const resultado = await resposta.json();
                if (resultado.success) {
                    alert('Cadastro realizado com sucesso!');
                } else {
                    alert('Erro' + resultado.message );
                }

    } catch (erro){
        console.error('Erro:', erro);
        alert('Erro ao conectar ao servidor');
    }
    





    if (email === "") {
        document.getElementById("erroEmail").style.display = "block";
        valido = false;
    } else {
        document.getElementById("erroEmail").style.display = "none";
    }
        
    // Valida Telefone
    if (!/^[0-9]{10,11}$/.test(telefone)) {
        document.getElementById("erroTelefone").style.display = "block";
        valido = false;
    } else {
        document.getElementById("erroTelefone").style.display = "none";
    }
        
    // Valida Senha
    if (!regexSenha.test(senha)) {
        document.getElementById("erroSenha").style.display = "block";
        valido = false;
    } else {
        document.getElementById("erroSenha").style.display = "none";
    }
        
    // Valida Confirmação de Senha

        return valido;
    
    
});


function toggleSenha(idCampo) {
    const campo = document.getElementById(idCampo);
    campo.type = (campo.type === "password") ? "text" : "password";
};
                  

function validarSenha() {
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return false;
    }
    return true;
};

function toggleSenha(idCampo, idOlho) {
    var campo = document.getElementById(idCampo);
    if (campo.type === "password") {
        campo.type = "text";
    } else {
        campo.type = "password";
    }
};