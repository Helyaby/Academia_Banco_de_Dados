document.querySelector('#contact form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sua mensagem foi enviada com sucesso!');
});

document.querySelector('.login-container form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('seu registro foi efetuado');
});