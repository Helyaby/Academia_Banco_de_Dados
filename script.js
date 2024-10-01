document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    alert('Sua mensagem foi enviada com sucesso!');
});