function inicio(){
   document.getElementById("p1").style.display="none";
   document.getElementById("p2").style.display="none";
   document.getElementById("p3").style.display="none";
   document.getElementById("p4").style.display="none";
   document.getElementById("cardData1").style.display="none";
   document.getElementById("cardData2").style.display="none";
   document.getElementById("cardData3").style.display="none";
   document.getElementById("btn1").style.display="none";
   document.getElementById("btn2").style.display="none";
   document.getElementById("ph2").innerHTML = "Historico";

  document.getElementById("table1").style.display="block";
}


function reservaSala(){
  document.getElementById("table1").style.display="none";

  document.getElementById("p1").style.display="block";
   document.getElementById("p2").style.display="block";
   document.getElementById("p3").style.display="block";
   document.getElementById("p4").style.display="block";
   document.getElementById("cardData1").style.display="block";
   document.getElementById("cardData2").style.display="block";
   document.getElementById("cardData3").style.display="block";
   document.getElementById("btn1").style.display="block";
   document.getElementById("btn2").style.display="block";
   document.getElementById("ph2").innerHTML = "Cadastrar Sala";

   document.getElementById("p1").innerHTML = "Sigla";
   document.getElementById("p1").innerHTML = "<input type='text' class='sigla' placeholder='Sigla'>"

   document.getElementById("p2").innerHTML = "Bloco";
   document.getElementById("p2").innerHTML = "<input type='number' class='bloco' placeholder='Bloco'>"

   document.getElementById("p3").innerHTML = "Capacidade";
   document.getElementById("p3").innerHTML = "<input type='number' class='capacidade' placeholder='Capacidade'>"

   document.getElementById("p4").innerHTML = "Descrição";
   document.getElementById("p4").innerHTML = "<input type='text' class='descricao' placeholder='Descrição'>"

   document.getElementById("btn2").innerHTML = "<input type='submit' class='Cancelar' onclick='inicio()' value='Cancelar'>";

   document.getElementById("btn1").innerHTML = "<input type='submit' class='Button' value='Cadastrar' onclick=''>";
}


function reservaLaboratorio(){
  document.getElementById("table1").style.display="none";
  document.getElementById("p1").style.display="block";
  document.getElementById("p2").style.display="block";
  document.getElementById("p3").style.display="block";
  document.getElementById("p4").style.display="block";

   document.getElementById("cardData1").style.display="block";
   document.getElementById("cardData2").style.display="block";
   document.getElementById("cardData3").style.display="block";
   document.getElementById("btn1").style.display="block";
   document.getElementById("btn2").style.display="block";

   document.getElementById("ph2").innerHTML = "Cadastrar Laboratorio";

   document.getElementById("p1").innerHTML = "Sigla";
   document.getElementById("p1").innerHTML = "<input type='text' class='sigla' placeholder='Sigla'>"

   document.getElementById("p2").innerHTML = "Bloco";
   document.getElementById("p2").innerHTML = "<input type='number' class='bloco' placeholder='Bloco'>"

   document.getElementById("p3").innerHTML = "Capacidade";
   document.getElementById("p3").innerHTML = "<input type='number' class='capacidade' placeholder='Capacidade'>"

   document.getElementById("p4").innerHTML = "Descrição";
   document.getElementById("p4").innerHTML = "<input type='text' class='descricao' placeholder='Descrição'>"

   document.getElementById("btn2").innerHTML = "<input type='submit' class='Cancelar' onclick='inicio()' value='Cancelar'>";

   document.getElementById("btn1").innerHTML = "<input type='submit' class='Button' value='Cadastrar' onclick=''>";
}


function reservaDS(){
  document.getElementById("table1").style.display="none"
  document.getElementById("p1").style.display="block";
  document.getElementById("p2").style.display="block";
  document.getElementById("p3").style.display="none";
  document.getElementById("p4").style.display="none";  

   document.getElementById("cardData1").style.display="block";
   document.getElementById("cardData2").style.display="block";
   document.getElementById("cardData3").style.display="block";
   document.getElementById("btn1").style.display="block";
   document.getElementById("btn2").style.display="block";

   document.getElementById("ph2").innerHTML = "Cadastro de DataShow";

   document.getElementById("p1").innerHTML = "Numeração";
   document.getElementById("p1").innerHTML = "<input type='number' class='numeracao' placeholder='Numeração'>"

   document.getElementById("p2").innerHTML = "Descricao";
   document.getElementById("p2").innerHTML = "<input type='text' class='descricao' placeholder='Descrição'>"

   document.getElementById("btn2").innerHTML = "<input type='submit' class='Cancelar' onclick='inicio()' value='Cancelar'>";

   document.getElementById("btn1").innerHTML = "<input type='submit' class='Button' value='Cadastrar' onclick=''>";
}

function reservaAmbiente(){
  document.getElementById("table1").style.display="none";
  document.getElementById("p1").style.display="block";
  document.getElementById("p2").style.display="block";
  document.getElementById("p3").style.display="block";
  document.getElementById("p4").style.display="block";
  
   document.getElementById("cardData1").style.display="block";
   document.getElementById("cardData2").style.display="block";
   document.getElementById("cardData3").style.display="block";
   document.getElementById("btn1").style.display="block";
   document.getElementById("btn2").style.display="block";

   document.getElementById("ph2").innerHTML = "Cadastro de Ambiente";

   document.getElementById("p1").innerHTML = "Sigla";
   document.getElementById("p1").innerHTML = "<input type='text' class='sigla' placeholder='Sigla'>"

   document.getElementById("p2").innerHTML = "Bloco";
   document.getElementById("p2").innerHTML = "<input type='number' class='bloco' placeholder='Bloco'>"

   document.getElementById("p3").innerHTML = "Capacidade";
   document.getElementById("p3").innerHTML = "<input type='number' class='capacidade' placeholder='Capacidade'>"

   document.getElementById("p4").innerHTML = "Descrição";
   document.getElementById("p4").innerHTML = "<input type='text' class='descricao' placeholder='Descrição'>"

   document.getElementById("btn2").innerHTML = "<input type='submit' class='Cancelar' onclick='inicio()' value='Cancelar'>";

   document.getElementById("btn1").innerHTML = "<input type='submit' class='Button' value='Cadastrar' onclick=''>";
}



   // Requisições para API Rest, o que for incerido de novo colocar a cima  

   // var settings = {
   //    "async": true,
   //    "crossDomain": true,
   //    "url": "",
   //    "method": "POST",
   //    "headers": {
   //    "content-type": "application/json"
   //    },
   //    "processData": false,
   //    "data": ""
   // }
   
   

   // const check = () =>{
      
   //    let token = window.localStorage.getItem('token')

   //    settings.url = "http://localhost:8000/checkToken"
   //    settings.data = "{\n\t\"token\": \""+token+"\"\n}"
      
   //    $.ajax(settings).done(function (response) {
         
   //       if(!response){
   //          window.localStorage.removeItem('token')
   //          window.location.href = '../index.html'
   //       }
   //    })
   // }

   // const reqReservaCreate = () => {

   //    let data = document.getElementById('data').value
   //    let horarioInicio = document.getElementById('horarioinicio').value
   //    let horarioFim = document.getElementById('horariofim').value
      
   //    let codigoDoAmbiente = "LABinfo02"

   //    horarioInicio = data+" "+horarioInicio
   //    horarioFim = data+" "+horarioFim

   //    let token = window.localStorage.getItem('token')

   //    settings.url = "localhost:8000/reservas/create"
   //    settings.data = "{\n\t\"horarioInicio\": \""+horarioInicio+"\",\n\t\"horarioFim\": \""+horarioFim+"\",\n\t\"codigoDoAmbiente\": \""+codigoDoAmbiente+"\",\n\t\"token\":\""+token+"\"\n}"
   //    $.ajax(settings).done((response)=>{
   //       if(response){
   //          alert('Reserva Feita com sucesso!')
   //       }else{
   //          alert('Já possui uma reserva para esse horario nesse mesmo ambiente')
   //       }
   //    })
   // }


  