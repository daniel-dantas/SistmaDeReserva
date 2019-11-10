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
   document.getElementById("p4").style.display="none";
   document.getElementById("ph2").innerHTML = "Reserva de Sala";

   document.getElementById("p1").innerHTML = "Data";
<<<<<<< HEAD
   document.getElementById("p1").innerHTML = "<input type='date' class='data' placeholder='Data'>"

   document.getElementById("p2").innerHTML = "Hora de Inicio";
   document.getElementById("p2").innerHTML = "<input type='time' class='horainicio' placeholder='Hora inicial'>"

   document.getElementById("p3").innerHTML = "Hora de Termino";
   document.getElementById("p3").innerHTML = "<input type='time' class='horafim' placeholder='Data'>"
=======
   document.getElementById("cardData1").innerHTML = "<input type='data' id='data' name='Data inicial'>";

   document.getElementById("p2").innerHTML = "Hora de Inicio";
   document.getElementById("cardData2").innerHTML = "<input type='data' id='horaInicio' name='Data inicial'>";

   document.getElementById("p3").innerHTML = "Hora de Termino";
   document.getElementById("cardData3").innerHTML = "<input type='data' id='horaFim' name='Data inicial'>";
>>>>>>> 671292ffaf311f5be367eaaf0ec111a360eaa89a

   document.getElementById("btn2").innerHTML = "<input type='submit' class='Cancelar' onclick='inicio()' value='Cancelar'>";

   document.getElementById("btn1").innerHTML = "<input type='submit' class='Button' value='Reservar' onclick='Sala()'>";
}

function Sala(){
  document.getElementById("p1").style.display="block";
  document.getElementById("p2").style.display="block";
  document.getElementById("p3").style.display="block";
  document.getElementById("p4").style.display="block";
   document.getElementById("p4").style.display="block";

   document.getElementById("ph2").innerHTML = "Reserva de Sala";

   document.getElementById("cardData1").style.display="none";
   document.getElementById("cardData2").style.display="none";
   document.getElementById("cardData3").style.display="none";
   document.getElementById("btn1").style.display="none";
   document.getElementById("btn2").style.display="none";
   document.getElementById("p1").innerHTML = "Sala";
   document.getElementById("p2").innerHTML = "Bloco";
   document.getElementById("p3").innerHTML = "Capacidade";
   document.getElementById("p4").innerHTML = "<input type='submit' value='Reservar'>"
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
   document.getElementById("p4").style.display="none";

   document.getElementById("ph2").innerHTML = "Reserva de Laboratorio";

   document.getElementById("p1").innerHTML = "Data";
   document.getElementById("p1").innerHTML = "<input type='date' class='data' placeholder='Data'>"
   //document.getElementById("cardData1").innerHTML = "<input type='data' name='Data inicial'>";

   document.getElementById("p2").innerHTML = "Hora de Inicio";
   document.getElementById("p2").innerHTML = "<input type='time' class='horainicio' placeholder='data'>"
   //document.getElementById("cardData2").innerHTML = "<input type='data' name='Data inicial'>";

   document.getElementById("p3").innerHTML = "Hora de Termino";
   document.getElementById("p3").innerHTML = "<input type='time' class='horafim' placeholder='data'>"
   //document.getElementById("cardData3").innerHTML = "<input type='data' name='Data inicial'>";

   document.getElementById("btn2").innerHTML = "<input type='submit' class='Cancelar' onclick='inicio()' value='Cancelar'>";

   document.getElementById("btn1").innerHTML = "<input type='submit' class='Button' value='Reservar' onclick='Lab()'>";
}

function Lab(){
   document.getElementById("p4").style.display="block";

   document.getElementById("ph2").innerHTML = "Reserva de Laboratorio";

   document.getElementById("cardData1").style.display="none";
   document.getElementById("cardData2").style.display="none";
   document.getElementById("cardData3").style.display="none";
   document.getElementById("btn1").style.display="none";
   document.getElementById("btn2").style.display="none";
   document.getElementById("p1").innerHTML = "Laboratorio";
   document.getElementById("p2").innerHTML = "Bloco";
   document.getElementById("p3").innerHTML = "Capacidade";
   document.getElementById("p4").innerHTML = "<input type='submit' value='Reservar'>"
}

function reservaDS(){
  document.getElementById("table1").style.display="none"
  document.getElementById("p1").style.display="block";
  document.getElementById("p2").style.display="block";
  document.getElementById("p3").style.display="block";
  document.getElementById("p4").style.display="block";  

   document.getElementById("cardData1").style.display="block";
   document.getElementById("cardData2").style.display="block";
   document.getElementById("cardData3").style.display="block";
   document.getElementById("btn1").style.display="block";
   document.getElementById("btn2").style.display="block";
   document.getElementById("p4").style.display="none";

   document.getElementById("ph2").innerHTML = "Reserva de DataShow";

   document.getElementById("p1").innerHTML = "Data";
   document.getElementById("p1").innerHTML = "<input type='date' class='data' placeholder='Data'>"
   //document.getElementById("cardData1").innerHTML = "<input type='data' name='Data inicial'>";

   document.getElementById("p2").innerHTML = "Hora de Inicio";
   document.getElementById("p2").innerHTML = "<input type='time' class='horainicio' placeholder='data'>"
   //document.getElementById("cardData2").innerHTML = "<input type='data' name='Data inicial'>";

   document.getElementById("p3").innerHTML = "Hora de Termino";
   document.getElementById("p3").innerHTML = "<input type='time' class='horafim' placeholder='data'>"
   //document.getElementById("cardData3").innerHTML = "<input type='data' name='Data inicial'>";

   document.getElementById("btn2").innerHTML = "<input type='submit' class='Cancelar' onclick='inicio()' value='Cancelar'>";

   document.getElementById("btn1").innerHTML = "<input type='submit' class='Button' value='Reservar' onclick='DS()'>";
}

function DS(){
   document.getElementById("p4").style.display="block";

   document.getElementById("ph2").innerHTML = "Reserva de DataShow";

   document.getElementById("cardData1").style.display="none";
   document.getElementById("cardData2").style.display="none";
   document.getElementById("cardData3").style.display="none";
   document.getElementById("p3").style.display="none";
   document.getElementById("btn1").style.display="none";
   document.getElementById("btn2").style.display="none";
   document.getElementById("p1").innerHTML = "DataShow";
   document.getElementById("p2").innerHTML = "Descrição";
   document.getElementById("p4").innerHTML = "<input type='submit' value='Reservar'>"
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
   document.getElementById("p4").style.display="none";

   document.getElementById("ph2").innerHTML = "Reserva de Ambiente";

   document.getElementById("p1").innerHTML = "Data";
   document.getElementById("p1").innerHTML = "<input type='date' class='data' placeholder='Data'>"
   //document.getElementById("cardData1").innerHTML = "<input type='data' name='Data inicial'>";

   document.getElementById("p2").innerHTML = "Hora de Inicio";
   document.getElementById("p2").innerHTML = "<input type='time' class='horainicio' placeholder='data'>"
   //document.getElementById("cardData2").innerHTML = "<input type='data' name='Data inicial'>";

   document.getElementById("p3").innerHTML = "Hora de Termino";
   document.getElementById("p3").innerHTML = "<input type='time' class='horafim' placeholder='data'>"
   //document.getElementById("cardData3").innerHTML = "<input type='data' name='Data inicial'>";

   document.getElementById("btn2").innerHTML = "<input type='submit' class='Cancelar' onclick='inicio()' value='Cancelar'>";

   document.getElementById("btn1").innerHTML = "<input type='submit' class='Button' value='Reservar' onclick='Ambiente()'>";
}

function Ambiente(){
   document.getElementById("p4").style.display="block";

   document.getElementById("ph2").innerHTML = "Reserva de Ambiente";

   document.getElementById("cardData1").style.display="none";
   document.getElementById("cardData2").style.display="none";
   document.getElementById("cardData3").style.display="none";
   document.getElementById("btn1").style.display="none";
   document.getElementById("btn2").style.display="none";
   document.getElementById("p1").innerHTML = "Ambiente";
   document.getElementById("p2").innerHTML = "Descrição";
   document.getElementById("p3").innerHTML = "Capacidade";
   document.getElementById("p4").innerHTML = "<input type='submit' value='Reservar'>"
}
   // Requisições para API Rest, o que for incerido de novo colocar a cima  

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


   // Requisições para API Rest, o que for incerido de novo colocar a cima  

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
   
   

   const check = () =>{
      
      let token = window.localStorage.getItem('token')

      settings.url = "http://localhost:8000/checkToken"
      settings.data = "{\n\t\"token\": \""+token+"\"\n}"
      
      $.ajax(settings).done(function (response) {
         
         if(!response){
            window.localStorage.removeItem('token')
            window.location.href = '../index.html'
         }
      })
   }

   const reqReservaCreate = () => {

      let data = document.getElementById('data').value
      let horarioInicio = document.getElementById('horarioinicio').value
      let horarioFim = document.getElementById('horariofim').value
      
      let codigoDoAmbiente = "LABinfo02"

      horarioInicio = data+" "+horarioInicio
      horarioFim = data+" "+horarioFim

      let token = window.localStorage.getItem('token')

      settings.url = "localhost:8000/reservas/create"
      settings.data = "{\n\t\"horarioInicio\": \""+horarioInicio+"\",\n\t\"horarioFim\": \""+horarioFim+"\",\n\t\"codigoDoAmbiente\": \""+codigoDoAmbiente+"\",\n\t\"token\":\""+token+"\"\n}"
      $.ajax(settings).done((response)=>{
         if(response){
            alert('Reserva Feita com sucesso!')
         }else{
            alert('Já possui uma reserva para esse horario nesse mesmo ambiente')
         }
      })
   }


  
    

   const reqReservaCreate = () => {

      let data = document.getElementById('data').value
      let horarioInicio = document.getElementById('horarioInicio').value
      let horarioFim = document.getElementById('horarioFim').value
      
      let codigoDoAmbiente = "LABinfo02"

      horarioInicio = data+" "+horarioInicio
      horarioFim = data+" "+horarioFim

      let token = window.localStorage.getItem('token')

      settings.url = "localhost:8000/reservas/create"
      settings.data = "{\n\t\"horarioInicio\": \""+horarioInicio+"\",\n\t\"horarioFim\": \""+horarioFim+"\",\n\t\"codigoDoAmbiente\": \""+codigoDoAmbiente+"\",\n\t\"token\":\""+token+"\"\n}"
      $.ajax(settings).done((response)=>{
         if(response){
            alert('Reserva Feita com sucesso!')
         }else{
            alert('Já possui uma reserva para esse horario nesse mesmo ambiente')
         }
      })

   }
   