function inicio(){
    document.getElementById("p1").style.display="block";
    document.getElementById("p2").style.display="block";
    document.getElementById("p3").style.display="block";
    document.getElementById("p4").style.display="block";
    document.getElementById("cardData1").style.display="none";
    document.getElementById("cardData2").style.display="none";
    document.getElementById("cardData3").style.display="none";
    document.getElementById("btn1").style.display="none";
    document.getElementById("btn2").style.display="none";
    document.getElementById("ph2").innerHTML = "Historico";

    document.getElementById("p1").innerHTML = "Espaço";
    document.getElementById("p2").innerHTML = "Bloco";
    document.getElementById("p3").innerHTML = "Responsavel";
    document.getElementById("p4").innerHTML = "Status";

}


function reservaSala(){
    document.getElementById("cardData1").style.display="block";
    document.getElementById("cardData2").style.display="block";
    document.getElementById("cardData3").style.display="block";
    document.getElementById("btn1").style.display="block";
    document.getElementById("btn2").style.display="block";
    document.getElementById("p4").style.display="none";
    document.getElementById("ph2").innerHTML = "Reserva de Sala";

    document.getElementById("p1").innerHTML = "Data";
    document.getElementById("cardData1").innerHTML = "<input type='data' name='Data inicial'>";

    document.getElementById("p2").innerHTML = "Hora de Inicio";
    document.getElementById("cardData2").innerHTML = "<input type='data' name='Data inicial'>";

    document.getElementById("p3").innerHTML = "Hora de Termino";
    document.getElementById("cardData3").innerHTML = "<input type='data' name='Data inicial'>";

    document.getElementById("btn1").innerHTML = "<input type='submit' value='Reservar' onclick='Sala()'>";
    document.getElementById("btn2").innerHTML = "<input type='submit' onclick='inicio()' value='Cancelar'>";
 }

 function Sala(){
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
    document.getElementById("cardData1").style.display="block";
    document.getElementById("cardData2").style.display="block";
    document.getElementById("cardData3").style.display="block";
    document.getElementById("btn1").style.display="block";
    document.getElementById("btn2").style.display="block";
    document.getElementById("p4").style.display="none";

    document.getElementById("ph2").innerHTML = "Reserva de Laboratorio";

    document.getElementById("p1").innerHTML = "Data";
    document.getElementById("cardData1").innerHTML = "<input type='data' name='Data inicial'>";

    document.getElementById("p2").innerHTML = "Hora de Inicio";
    document.getElementById("cardData2").innerHTML = "<input type='data' name='Data inicial'>";

    document.getElementById("p3").innerHTML = "Hora de Termino";
    document.getElementById("cardData3").innerHTML = "<input type='data' name='Data inicial'>";

    document.getElementById("btn1").innerHTML = "<input type='submit' value='Reservar' onclick='Lab()'>";
    document.getElementById("btn2").innerHTML = "<input type='submit' onclick='inicio()' value='Cancelar'>";
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
    document.getElementById("cardData1").style.display="block";
    document.getElementById("cardData2").style.display="block";
    document.getElementById("cardData3").style.display="block";
    document.getElementById("btn1").style.display="block";
    document.getElementById("btn2").style.display="block";
    document.getElementById("p4").style.display="none";

    document.getElementById("ph2").innerHTML = "Reserva de DataShow";

    document.getElementById("p1").innerHTML = "Data";
    document.getElementById("cardData1").innerHTML = "<input type='data' name='Data inicial'>";

    document.getElementById("p2").innerHTML = "Hora de Inicio";
    document.getElementById("cardData2").innerHTML = "<input type='data' name='Data inicial'>";

    document.getElementById("p3").innerHTML = "Hora de Termino";
    document.getElementById("cardData3").innerHTML = "<input type='data' name='Data inicial'>";

    document.getElementById("btn1").innerHTML = "<input type='submit' value='Reservar' onclick='DS()'>";
    document.getElementById("btn2").innerHTML = "<input type='submit' onclick='inicio()' value='Cancelar'>";
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
    document.getElementById("cardData1").style.display="block";
    document.getElementById("cardData2").style.display="block";
    document.getElementById("cardData3").style.display="block";
    document.getElementById("btn1").style.display="block";
    document.getElementById("btn2").style.display="block";
    document.getElementById("p4").style.display="none";

    document.getElementById("ph2").innerHTML = "Reserva de Ambiente";

    document.getElementById("p1").innerHTML = "Data";
    document.getElementById("cardData1").innerHTML = "<input type='data' name='Data inicial'>";

    document.getElementById("p2").innerHTML = "Hora de Inicio";
    document.getElementById("cardData2").innerHTML = "<input type='data' name='Data inicial'>";

    document.getElementById("p3").innerHTML = "Hora de Termino";
    document.getElementById("cardData3").innerHTML = "<input type='data' name='Data inicial'>";

    document.getElementById("btn1").innerHTML = "<input type='submit' value='Reservar' onclick='Ambiente()'>";
    document.getElementById("btn2").innerHTML = "<input type='submit' onclick='inicio()' value='Cancelar'>";
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


//  Reqs



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


 const check = ()=>{

   let token = window.localStorage.getItem('token')
   settings.url = "http://localhost:8000/checkToken"
   settings.data = "{\n\t\"token\": \""+token+"\"\n}"

   $.ajax(settings).done(function (response) {
      
      if(!response){
         window.localStorage.removeItem('token')
         window.location.href = 'index.html'
      }

      console.log('deu certo!')
    });
 }

 





