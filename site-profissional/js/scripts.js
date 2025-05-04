// Validação de formulário (opcional)
document.querySelector('form').addEventListener('submit', function (e) {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    e.preventDefault();
    alert('Por favor, preencha todos os campos.');
  }
});