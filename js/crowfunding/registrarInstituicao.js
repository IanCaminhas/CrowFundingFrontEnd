$('#btnCadastrar').click(function () {
  var url = 'http://localhost:8080/instituicoes/cadastrar';


   var data = { 
      //dados aluno
    nome: $('#nomeInstituicao').val(),
    cnpj: $('#cnpj').val(),
    telefone: $('#telefone').val(),
    email: $('#email').val(),
    responsavel: $('#responsavel').val(),
    descricao: $('#descricao').val(),
    conta: $('#conta').val(),
    agencia: $('#agencia').val(),
    senha: $('#senha').val(),

    //endereco instituicao
    rua: $('#rua').val(),
    bairro: $('#bairro').val(),
    numeroPropriedade: $('#numeroPropriedade').val(),
    complemento:$('#complemento').val() ,
    logradouro:$('#logradouro').val() ,

  };
  var type = "json";
  call(url, type, data);
  
});

function call(url, type, data) {
var request = $.ajax({
  url : url,
  async: false,
  method : "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  data : JSON.stringify(data),
  dataType : type
});

request.done(function(resp) {
  alert(resp);
});

request.fail(function(jqXHR, textStatus) {
  console.log("Request failed: " + textStatus);
});
};








