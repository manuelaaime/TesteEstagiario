$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
});

document.getElementById("Form-TesteEstagiario").addEventListener("submit", function (event) {
    event.preventDefault();

    var campos = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    var valido = true;

    campos.forEach(function(campo) {
        if (!campo.value) {
            valido = false;
        }
    });

    if (!valido) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    var dados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value
    };

    console.log(dados);

    var formContainer = document.querySelector(".form-container");
    formContainer.innerHTML = "<h2>Obrigado pelo seu cadastro!</h2>";
    formContainer.style.textAlign = "center";
});
