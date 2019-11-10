

$(document).ready(function() {
  $('#atributoNovoProfessor').show();
  $('#atributoNovoAluno').hide();
  

  $('#tipoDeUsuario').change(function() {
    if ($('#tipoDeUsuario').val() === 'Aluno') {
      $('#atributoNovoAluno').show();
      $('#atributoNovoProfessor').hide();
      
    } else if ($('#tipoDeUsuario').val() === 'Professor'){
      $('#atributoNovoProfessor').show();
      $('#atributoNovoAluno').hide();
    }
  });
});





var settings = {
  "async": true,
  "crossDomain": false,
  "url": "",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "processData": true,
  "data": ""
}

const reqAuth = () => {


    let matriculaLogin = document.getElementById('matriculaLogin').value
    let senhaLogin = document.getElementById('senhaLogin').value

    settings.url = 'http://localhost:8000/alunos/auth'
    settings.data = "{\n\t\"matricula\": \""+matriculaLogin+"\",\n\t\"senha\": \""+senhaLogin+"\"\n}"
    
    $.ajax(settings).done(function (response) {
        
        if(response){
          window.localStorage.setItem('token', response.token)
          document.location.href = './views/User-HomePage.html'
        }else{

            settings.url = 'http://localhost:8000/professores/auth'

            $.ajax(settings).done(function (response) {

              if(response){
                window.localStorage.setItem('token', response.token)
                // console.log(response.user.matricula)
                document.location.href = './views/User-HomePage.html'

              }else{
                alert('Usuario ou senha incorretos!')
              }


            })
        }
      });
}

const reqCadastrar = () => {

  let matricula = document.getElementById('matricula').value
  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value
  let senha = document.getElementById('senha').value
  let curso = document.getElementById('curso').value
  let disciplinas = document.getElementById('disciplinas').value
  let tipoDeUsuario = document.getElementById('tipoDeUsuario').value
  

  if(tipoDeUsuario == 'Professor'){

    settings.url = "http://localhost:8000/professores/create"
    settings.data = "{\n\t\"matricula\": \""+matricula+"\",\n\t\"nome\": \""+nome+"\",\n\t\"senha\": \""+senha+"\",\n\t\"email\": \""+email+"\",\n\t\"disciplinas\": \""+disciplinas+"\"\n}"
    $.ajax(settings).done(function (response) {
      if(response){
        window.localStorage.setItem('token', response.token)
        document.location.href = './views/User-HomePage.html'
      }else{
        alert('Usuario já cadastrado, efetue apenas o login')
      }
    })

  }else{
    settings.url = "http://localhost:8000/alunos/create"
    settings.data = "{\n\t\"matricula\": \""+matricula+"\",\n\t\"nome\": \""+nome+"\",\n\t\"senha\": \""+senha+"\",\n\t\"email\": \""+email+"\",\n\t\"curso\": \""+curso+"\"\n}"
    $.ajax(settings).done(function (response) {
      if(response){
        window.localStorage.setItem('token', response.token)
        document.location.href = './views/User-HomePage.html'
      }else{
        alert('Usuario já cadastrado, efetue apenas o login')
      }
    })
  }
  
  
}


