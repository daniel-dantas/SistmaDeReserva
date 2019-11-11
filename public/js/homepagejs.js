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
   document.getElementById("p1").innerHTML = "<input type='date' class='data' placeholder='Data'>"

   document.getElementById("p2").innerHTML = "Hora de Inicio";
   document.getElementById("p2").innerHTML = "<input type='time' class='horainicio' placeholder='Hora inicial'>"

   document.getElementById("p3").innerHTML = "Hora de Termino";
   document.getElementById("p3").innerHTML = "<input type='time' class='horafim' placeholder='Data'>"
   document.getElementById('p4').innerHTML = ""

   

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
   document.getElementById("p4").style.display="block";

   document.getElementById("ph2").innerHTML = "Reserva de Ambiente";

   document.getElementById("p1").innerHTML = "Data";
   document.getElementById("p1").innerHTML = "<input type='date' class='data' id='data' placeholder='Data'>"
   //document.getElementById("cardData1").innerHTML = "<input type='data' name='Data inicial'>";

   document.getElementById("p2").innerHTML = "Hora de Inicio";
   document.getElementById("p2").innerHTML = "<input type='time' class='horainicio' id='horarioInicio' placeholder='data'>"
   //document.getElementById("cardData2").innerHTML = "<input type='data' name='Data inicial'>";

   document.getElementById("p3").innerHTML = "Hora de Termino";
   document.getElementById("p3").innerHTML = "<input type='time' class='horafim' id='horarioFim' placeholder='data'>"
   //document.getElementById("cardData3").innerHTML = "<input type='data' name='Data inicial'>";

   settings.url = "http://localhost:8000/ambientes/read"
   settings.method = "GET"
   $.ajax(settings).done(function (response) {

      let select = "<select id='ambiente'>"
      response.map(amb => {
         select += "<option>"+amb.codigo+"</option>"
      })
      select += "</select>"
      document.getElementById('p4').innerHTML = select
      
    });

   
   document.getElementById("btn2").innerHTML = "<input type='submit' class='Cancelar' onclick='inicio()' value='Cancelar'>";

   document.getElementById("btn1").innerHTML = "<input type='submit' class='Button' value='Reservar' onclick='reqReservaCreate()'>";
}

function Ambiente(){
   document.getElementById("p4").style.display="block";

   document.getElementById("ph2").innerHTML = "Reserva de Ambiente";

   document.getElementById("cardData1").style.display="none";
   document.getElementById("cardData2").style.display="none";
   document.getElementById("cardData3").style.display="none";
   document.getElementById("btn1").style.display="none";
   document.getElementById("btn2").style.display="none";
   

   document.getElementById("p1").innerHTML = "";
   document.getElementById("p2").innerHTML = "";
   

   
   document.getElementById("p3").innerHTML = "Capacidade";
   document.getElementById("p4").innerHTML = "<input type='submit' value='Reservar'>"
}


   // Requisições para API Rest, o que for incerido de novo colocar a cima  

   
   
   settings = {
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
      settings.method = "POST"
      $.ajax(settings).done(function (response) {
         
         if(!response){
            window.localStorage.removeItem('token')
            window.location.href = '../index.html'
         }
      })
   }

   const reqReservaCreate = () => {

      let data = document.getElementById('data').value
      let horarioInicio = document.getElementById('horarioInicio').value
      let horarioFim = document.getElementById('horarioFim').value

      
      let codigoDoAmbiente = document.getElementById('ambiente').value

      let [ano, mes, dia] = data.split('-')

      horarioInicio = dia+"/"+mes+"/"+ano+" "+horarioInicio
      horarioFim = dia+"/"+mes+"/"+ano+" "+horarioFim

      

      let token = window.localStorage.getItem('token')
      var settings = {
         "async": true,
         "crossDomain": true,
         "url": "http://localhost:8000/reservas/create",
         "method": "POST",
         "headers": {
           "content-type": "application/json"
         },
         "processData": false,
         "data": "{\n\t\"horarioInicio\": \""+horarioInicio+"\",\n\t\"horarioFim\": \""+horarioFim+"\",\n\t\"codigoDoAmbiente\": \""+codigoDoAmbiente+"\",\n\t\"token\":\""+token+"\"\n}"
       }
       
       $.ajax(settings).done(function (response) {
         if(response){
            alert('Reserva feita com sucesso!')
         }else{
            alert('Não foi possivel fazer a reserva!')
         }
       });
   }

   const logout = () => {
      window.localStorage.removeItem('token')
      window.location.href = '../index.html'
   }
  