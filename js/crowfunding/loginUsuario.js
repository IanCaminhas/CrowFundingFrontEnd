$('#btnLogin').click(function () {
  event.preventDefault();
  let tipoUsuario = $("#inputTipoUser option:selected").text();
  let emailUser = $('#inputEmail').val();
  let senhaUser = $('#inputPassword').val();
  
  var data = { 
    email: emailUser,
    senha:senhaUser    
  };  


  if(tipoUsuario=="Instituição"){

    let url = 'http://localhost:8080/instituicoes/login';
    callInstituicao(url,data);

  }else if(tipoUsuario=="Aluno"){

    let url = 'http://localhost:8080/alunos/login';
    callAluno(url,data);

  }

  
function callInstituicao(url, data) {
  var request = $.ajax({
    url : url,
    async: false,
    method : "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(data),
  });
  
  request.done(function(resp) {
    sessionStorage.setItem('instituicao', resp);
    window.location.replace("Pages/Instituicao/indexInstituicao.html");

  
  });
  
  request.fail(function(jqXHR, textStatus) {
    console.log("Request failed: " + textStatus);
  });
  };


  function callAluno(url, data) {
    var request = $.ajax({
      url : url,
      async: false,
      method : "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      data : JSON.stringify(data),
    });
    
    request.done(function(resp) {
      sessionStorage.setItem('aluno', resp);
      window.location.replace("http://localhost/CrowFundingFrontEnd/Pages/Instituicao/indexInstituicao.html");      
    
    });
    
    request.fail(function(jqXHR, textStatus) {
      console.log("Request failed: " + textStatus);
    });
    };
    
  




  








});

  
  
  