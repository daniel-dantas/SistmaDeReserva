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
    document.getElementById("btn2").innerHTML = "<input type='submit' value='Cancelar'>";
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
    document.getElementById("btn2").innerHTML = "<input type='submit' value='Cancelar'>";
 }

function Lab(){
    document.getElementById("p4").style.display="block";

    document.getElementById("ph2").innerHTML = "Reserva de Sala";

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
    document.getElementById("btn2").innerHTML = "<input type='submit' value='Cancelar'>";
 }

 function DS(){
    document.getElementById("p4").style.display="block";

    document.getElementById("ph2").innerHTML = "Reserva de Sala";

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
    document.getElementById("btn2").innerHTML = "<input type='submit' value='Cancelar'>";
 }

 function Ambiente(){
    document.getElementById("p4").style.display="block";

    document.getElementById("ph2").innerHTML = "Reserva de Ambiente";

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