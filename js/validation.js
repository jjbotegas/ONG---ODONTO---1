const cadastroForm = document.getElementById('cadastroForm');

if(cadastroForm){
  cadastroForm.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = this.nome.value.trim();
    const email = this.email.value.trim();
    const cpf = this.cpf.value.trim();
    const telefone = this.telefone.value.trim();

    if(!nome || !email || !cpf || !telefone){
      alert('Preencha todos os campos corretamente.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      alert('E-mail inválido.');
      return;
    }

    alert('Cadastro enviado com sucesso!');
    this.reset();
  });
}
