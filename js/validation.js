// Máscaras simples para CPF, telefone e CEP + validação nativa
function setInputFilter(textbox, inputFilter) {
  ['input','keydown','keyup','mousedown','mouseup','select','contextmenu','drop'].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) this.oldValue = this.value; else if (this.hasOwnProperty('oldValue')) this.value = this.oldValue; else this.value = '';
    });
  });
}

function maskCPF(value){
  return value.replace(/\D/g,'')
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})\.(\d{3})(\d)/,'$1.$2.$3')
    .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/,'$1.$2.$3-$4')
    .slice(0,14);
}

function maskPhone(value){
  let v = value.replace(/\D/g,'');
  if(v.length>10) return v.replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3').slice(0,15);
  return v.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3').slice(0,14);
}

function maskCEP(value){
  return value.replace(/\D/g,'').replace(/(\d{5})(\d)/,'$1-$2').slice(0,9);
}

document.addEventListener('DOMContentLoaded',function(){
  const cpf = document.getElementById('cpf');
  const tel = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  if(cpf){
    setInputFilter(cpf, function(value){
      cpf.value = maskCPF(value);
      return true;
    });
  }
  if(tel){
    setInputFilter(tel, function(value){
      tel.value = maskPhone(value);
      return true;
    });
  }
  if(cep){
    setInputFilter(cep, function(value){
      cep.value = maskCEP(value);
      return true;
    });
  }

  // Validação simples ao submeter
  const form = document.getElementById('form-cadastro');
  if(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){
        e.preventDefault();
        form.reportValidity();
      } else {
        e.preventDefault();
        alert('Cadastro recebido (simulação). Verifique o repositório para configurar envio real.');
        form.reset();
      }
    });
  }
});
