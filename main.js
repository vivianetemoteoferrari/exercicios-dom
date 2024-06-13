document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = parseInt(document.getElementById('campo-a').value);
    const campoB = parseInt(document.getElementById('campo-b').value);
    const messageDiv = document.getElementById('message');

    if (campoB > campoA) {
        messageDiv.textContent = "Formulário válido: Campo B é maior que Campo A.";
        messageDiv.className = "message positive";
    } else {
        messageDiv.textContent = "Formulário inválido: Campo B deve ser maior que Campo A.";
        messageDiv.className = "message negative";
    }
});