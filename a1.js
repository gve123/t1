let div1 = document.getElementById('titulogrupo1');

 
for (var k = 1 ; k <= 26; k++) {

	div1.innerHTML += 
    '<div class="imagen"><img alt="" id="img'+k+'" width="100%" /></div>'+
	'<div class="nombregrupo"><a id="a'+k+'" width="auto"> </a></div>';  
 }   
  
 
  
  
var input = document.getElementById("nombre-input");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
 
       var data = document.getElementById("nombre-input").value;
 		localStorage.setItem("minombre", data);
      
      //alert ("holasss");
    }
});
  
document.getElementById("nombre-input").value = localStorage.getItem("minombre");  
  
  
document.getElementById("img1").src="img/g1.png";  
document.getElementById("a1").href="https://gve123.github.io/t1/g1.html";
document.getElementById("a1").text= "(g1) Inventos Caseros";  
 
document.getElementById("img2").src="img/g2.png"
document.getElementById("a2").href="https://gve123.github.io/t1/g2.html";
document.getElementById("a2").text= "(g2) Electricidad Automotriz";   
   
document.getElementById("img3").src= "img/g3.png";
document.getElementById("a3").href="https://gve123.github.io/t1/g3.html";
document.getElementById("a3").text= "(g3) Inventos Caseros con Materiales Reciclados"; 

document.getElementById("img4").src= "img/g4.png";
document.getElementById("a4").href="https://gve123.github.io/t1/g4.html";
document.getElementById("a4").text= "(g4) Reparaciones Caseras";  
  
document.getElementById("img5").src= "img/g5.png";
document.getElementById("a5").href="https://gve123.github.io/t1/g5.html";
document.getElementById("a5").text= "(g5) Electricidad Basica";
  
document.getElementById("img6").src= "img/g6.png";
document.getElementById("a6").href="https://gve123.github.io/t1/g6.html";
document.getElementById("a6").text= "(g6) Herramientas Caseras";  
  
document.getElementById("img7").src= "img/g7.png";
document.getElementById("a7").href="https://gve123.github.io/t1/g7.html";
document.getElementById("a7").text= "(g7) El Mundo de la Electronica";  
  
document.getElementById("img8").src= "img/g8.png";
document.getElementById("a8").href="https://gve123.github.io/t1/g8.html";
document.getElementById("a8").text= "(g8) Diagramas y Circuitos Electronicos"; 
  
document.getElementById("img9").src= "img/g9.png";
document.getElementById("a9").href="https://gve123.github.io/t1/g9.html";
document.getElementById("a9").text= "(g9) Proyectos de Electronica";
  
document.getElementById("img10").src= "img/g10.png";
document.getElementById("a10").href="https://gve123.github.io/t1/g10.html";
document.getElementById("a10").text= "(g10) Reparacion de Equipos Electricos";  
  
document.getElementById("img11").src= "img/g11.png";
document.getElementById("a11").href="https://gve123.github.io/t1/g11.html";
document.getElementById("a11").text= "(g11) Electricidad Residencial";  
  
document.getElementById("img12").src= "img/g12.png";
document.getElementById("a12").href="https://gve123.github.io/t1/g12.html";
document.getElementById("a12").text= "(g12) Inventos Ciencia y Tecnologia";  
  
document.getElementById("img13").src= "img/g13.png";
document.getElementById("a13").href="https://gve123.github.io/t1/g13.html";
document.getElementById("a13").text= "(g13) Inventos y Curiosidades";  

document.getElementById("img14").src= "img/g14.png";
document.getElementById("a14").href="https://gve123.github.io/t1/g14.html";
document.getElementById("a14").text= "(g14) manuales de Electricidad, electrónica, informática y más";  
  
document.getElementById("img15").src= "img/g15.png";
document.getElementById("a15").href="https://gve123.github.io/t1/g15.html";
document.getElementById("a15").text= "(g15) EXPERIMENTOS ELECTRONICOS-TRABAJOS TECNICOS Y VENTAS DE INSUMOS";  
  
document.getElementById("img16").src= "img/g16.png";
document.getElementById("a16").href="https://gve123.github.io/t1/g16.html";
document.getElementById("a16").text= "(g16) Grupo Todo Inventos TV, el grupo de TODOS";  
  
document.getElementById("img17").src= "img/g17.png";
document.getElementById("a17").href="https://gve123.github.io/t1/g17.html";
document.getElementById("a17").text= "(g17) Electricista alta y baja tensión";
  
document.getElementById("img18").src= "img/g18.png";
document.getElementById("a18").href="https://gve123.github.io/t1/g18.html";
document.getElementById("a18").text= "(g18) Electricidad, Electrónica y Refrigeración.";  
  
document.getElementById("img19").src= "img/g19.png";
document.getElementById("a19").href="https://gve123.github.io/t1/g19.html";
document.getElementById("a19").text= "(g19) Saber Electronica!!!";   
  
document.getElementById("img20").src= "img/g20.png";
document.getElementById("a20").href="https://gve123.github.io/t1/g20.html";
document.getElementById("a20").text= "(g20) INVENTOS CASEROS Y UTILES IDEAS, compartir ideas y buscar soluciones..";   
  
document.getElementById("img21").src= "img/g21.png";
document.getElementById("a21").href="https://gve123.github.io/t1/g21.html";
document.getElementById("a21").text= "(g21) Aprenda Electricidad Básica Gratis"; 
  
document.getElementById("img22").src= "img/g22.png";
document.getElementById("a22").href="https://gve123.github.io/t1/g22.html";
document.getElementById("a22").text= "(g22) EL MUNDO DE LA ELECTRÓNICA";   
  
document.getElementById("img23").src= "img/g23.png";
document.getElementById("a23").href="https://gve123.github.io/t1/g23.html";
document.getElementById("a23").text= "(g23) Diagramas y Proyectos Electrónicos";   
  
document.getElementById("img24").src= "img/g24.png";
document.getElementById("a24").href="https://gve123.github.io/t1/g24.html";
document.getElementById("a24").text= "(g24) Electricidad y Electrónica Automotriz"; 
  
document.getElementById("img25").src= "img/g25.png";
document.getElementById("a25").href="https://gve123.github.io/t1/g25.html";
document.getElementById("a25").text= "(g25) Tecnicos En Electricidad y Automatización";   
  
document.getElementById("img26").src= "img/g26.png";
document.getElementById("a26").href="https://gve123.github.io/t1/g26.html";
document.getElementById("a26").text= "(g26) Ingeniería Electrónica";   
  
