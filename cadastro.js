function validarFormulario() {
    let valido = true;
    // Capturar valores dos campos
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;
        
    // Expressão para validar senha
    let regexSenha = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
        
    // Valida Nome
    if (nome === "") {
        document.getElementById("erroNome").style.display = "block";
        valido = false;
    } else {
        document.getElementById("erroNome").style.display = "none";
    }
        
    // Valida Email
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
    if (senha !== confirmarSenha || confirmarSenha === "") {
        document.getElementById("erroConfirmar").style.display = "block";
        valido = false;
    } else {
        document.getElementById("erroConfirmar").style.display = "none";
    }
        
        return valido;
    }
        
    function toggleSenha(idCampo) {
        let campo = document.getElementById(idCampo);
        campo.type = (campo.type === "password") ? "text" : "password";
    }
                          

function validarSenha() {
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return false;
    }
    return true;
}

function toggleSenha(idCampo, idOlho) {
    var campo = document.getElementById(idCampo);
    if (campo.type === "password") {
        campo.type = "text";
    } else {
        campo.type = "password";
    }
}