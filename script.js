document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sua mensagem foi enviada com sucesso!');
});

document.querySelector('.hero').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('oi');
});