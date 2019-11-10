var settings = {
    "async": true,
    "crossDomain": true,
    "url": "",
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "processData": false,
    "data": ""
}


const reqRecoveryPass = () => {
    
    let matricula = document.getElementById('matricula').value

    settings.url = "http://localhost:8000/user/recoveryPass"
    settings.data = "{\n\t\"matricula\": \""+matricula+"\"\n}"
    
    $.ajax(settings).done(function (response) {
        if(response){
            alert('Senha enviada, verifique seu email!')
        }else{
            alert('Matricula incorreta, por favor reveja a matricula digitada!')
        }
    });
}

