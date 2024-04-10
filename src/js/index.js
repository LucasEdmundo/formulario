document.getElementById("button").addEventListener("click", function() {
    // Campos de entrada
    var campos = document.querySelectorAll(".campos");
    // Mensagens de erro
    var erros = document.querySelectorAll(".oculto");

    campos.forEach(function(campo, index) {
        var valor = campo.value.trim();
        var erro = erros[index];

        if (valor === "") {
            erro.style.display = "block";
            campo.style.border = "2px solid red"; // Adicionando borda vermelha
        } else {
            erro.style.display = "none";
            campo.style.border = "2px solid green"; // Adicionando borda verde
        }
    });
});