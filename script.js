document.querySelector('#contact form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sua mensagem foi enviada com sucesso!');
});

document.querySelector('#register form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('seu registro foi efetuado');
});

document.querySelector('#login form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Seu login foi efetivado');
});