//let n=1; 
  
let div1 = document.getElementById('contenedor1');

 
for (var k = 1 ; k <= 36; k++) {

	div1.innerHTML += 
    '<div class="numero" id="num'+k+'">'+k+'</div>'+
    '<div class="imagen"><img id="img'+k+'" alt="" width="100%" onClick="copy('+k+')"></div>'+
    '<div class="texto" id="txt'+k+'" ></div>'+
    '<div class="cbox"><input class="unpresed" id="checkbox'+n+'#'+k+'" type="checkbox" onClick="clickboton('+k+')"></div>';

 }   
  
  
  

function clickboton(i) { 
    //var cbox = "checkbox"+i;      
    var checkbox = document.getElementById("checkbox"+n+"#"+i);
    localStorage.setItem("checkbox"+n+"#"+i, checkbox.checked);  
  
  
  
  if (document.getElementById("checkbox"+n+"#"+i).checked == true)
  {
    var hoy = new Date();
  	var dia = hoy.getDate();
  	var mes = hoy.getMonth() + 1;
    
    localStorage.setItem("diachecked"+n+"#"+i,dia);
  	localStorage.setItem("meschecked"+n+"#"+i,mes);
    
  	//console.log("diacheckedu"+i+dia);
  }	
  else
  {
  	
  }   
  
 
  
}
  
  
var hoy = new Date();
var dia = hoy.getDate();
var mes = hoy.getMonth() + 1;  
  
for (var j = 1; j <= 36; j++) {
  
	var checked = JSON.parse(localStorage.getItem("checkbox"+n+"#"+j));
    if (checked == true)
    {
    	document.getElementById("checkbox"+n+"#"+j).checked = true;

      
  	}
  	else
    {
    
    	document.getElementById("checkbox"+n+"#"+j).checked = false;
    } 
  
  
	if (checked == true)
    {
          

          
        var diachecked = localStorage.getItem('diachecked'+n+'#'+j);
        var meschecked = localStorage.getItem('meschecked'+n+'#'+j);
          
        /*  
    	if (meschecked == mes)
        {
         	if ( (dia - diachecked) > 10)
            {
              	localStorage.setItem("checkbox"+n+"#"+j,false);
                
            }  
            
        }
        else if (Math.abs(meschecked-mes)==1)
        {
          	//if ( ( (dia + 31) - diachecked ) > 10)
          	if (((31-diachecked)+dia)>10) 
            {
             	localStorage.setItem("checkbox"+n+"#"+j,false);
                
            }             
            
        }
      	else if (Math.abs(meschecked-mes)>1)
	*/
	if (Math.abs(meschecked-mes)>1)	
        {
        	localStorage.setItem("checkbox"+n+"#"+j,false);	
        
        }  
      
      
    		//console.log("dia"+j+"="+localStorage.getItem('diachecked'+n+'#'+j) );
      		//console.log("mes"+j+"="+localStorage.getItem('meschecked'+n+'#'+j) );
    }  
  
  
}

document.getElementById("img1").src= "imgv/1.png"; 
document.getElementById("txt1").innerHTML = "📘👨✅EXITOSO MANUAL DE REPARACION DE ELECTRODOMESTICOS‼️😮✅<br>"+
												"✌😁DI GRACIAS Y TEN AQUI EL MATERIAL👇👇<br>"+
												"https://tutorialesonline.net/manual-de-reparacion-de-electrodomesticos";

   
document.getElementById("img2").src= "imgv/2.png"; 
document.getElementById("txt2").innerHTML = "✅📘👨EXCELENTE MANUAL DE AIRE ACONDICIONADO Y REFRIGERACION‼️😮<br>"+
												"✌😁DI GRACIAS Y TEN AQUI EL MATERIAL👇👇<br>"+
												"https://tutorialesonline.net/curso-de-aire-acondicionado";
  
document.getElementById("img3").src= "imgv/3.png";
document.getElementById('txt3').innerHTML =	"📘👨APRENDA ELECTROTECNICA EN 15 DIAS😮💥<br>"+
												"✌😁DI GRACIAS Y TEN AQUI EL MATERIAL👇👇<br>"+
												"https://tutorialesonline.net/aprenda-electrotecnica-en-15-dias"; 
  
document.getElementById("img4").src= "imgv/4.png"; 
document.getElementById('txt4').innerHTML =	"📘👨EXITOSO CURSO PRACTICO DE ELECTRICIDAD💥💡😮 <br>"+
												"✌😁DI GRACIAS Y TEN AQUI EL MATERIAL👇👇<br>"+
												"https://tutorialesonline.net/curso-practico-de-electricidad";  
  
  
document.getElementById("img5").src= "imgv/5.png"; 
document.getElementById('txt5').innerHTML =	"📘👨Curso Instalación y Diseño Eléctrico en interior!‼️💥✅<br>"+
												"👇💯 Di GRACIAS y descarga el pdf AQUI👇✅😮<br>"+
												"https://tutorialesonline.net/curso-instalacion-y-diseno-electrico-en-interior"; 

document.getElementById("img6").src= "imgv/6.png";
document.getElementById('txt6').innerHTML = "📘👨Excelente Guia Enciclopedia de la electrónica‼️💥😮<br />"+
											"👇💯 Di GRACIAS y descarga el pdf AQUI👇✅😮<br />"+
											"https://tutorialesonline.net/el-mundo-de-la-electronica-01"; 
  
document.getElementById("img7").src= "imgv/7.png";
document.getElementById('txt7').innerHTML = "📘👨CURSO DE REPARACION DE REFRIGERADORES PASO A PASO‼️💥😮<br />"+
											"👇💯 Di GRACIAS y descarga el pdf AQUI👇✅😮<br />"+
											"https://tutorialesonline.net/curso-como-reparar-refrigeradores-paso-a-paso";
  
document.getElementById("img8").src= "imgv/8.png";
document.getElementById('txt8').innerHTML = "📘👨Manual de Fallas en el Motor de Arranque y el Alternador️💥<br />"+
											"👇💯 Di GRACIAS y descarga el pdf AQUI👇✅😮<br />"+
											"https://tutorialesonline.net/manual-de-fallas-en-el-motor-de-arranque-y-el-alternador"; 
  
document.getElementById("img9").src= "imgv/9.png";
document.getElementById('txt9').innerHTML = "📘👨EXCELENTE CURSO DE REPARACION DE MOTORES ELECTRICOS!‼️💥<br />"+
											"👇💯 Di GRACIAS y descarga el pdf AQUI👇✅😮<br />"+
											"https://tutorialesonline.net/curso-de-reparacion-de-motores-electricos"; 
  
document.getElementById("img10").src= "imgv/10.png";
document.getElementById('txt10').innerHTML = "📘👨EXITOSO MANUAL DE ELECTRÓNICA BÁSICA️💥😮<br />"+
											"👇💯 Di GRACIAS y descarga el pdf AQUI👇✅😮<br />"+
											"https://tutorialesonline.net/manual-de-electronica-basica";
  
document.getElementById("img11").src= "imgv/11.png";
document.getElementById('txt11').innerHTML =  "📘👨300 Diagramas de Circuitos Electrónicos Digital y Analógica‼️💥😮<br />"+
											"👇💯 Di GRACIAS y descarga el pdf AQUI👇✅😮<br />"+
											"https://tutorialesonline.net/300-diagramas-de-circuitos-electronicos-digital-y-analogica";
  
document.getElementById("img12").src= "imgv/12.png";
document.getElementById('txt12').innerHTML = "📘👨EXCELENTE GUÍA PRACTICA DE ELECTRICIDAD Y ELECTRÓNICA‼️💥😮<br />"+
											"👇💯 Di GRACIAS y descarga el pdf AQUI👇✅😮<br />"+
											"https://tutorialesonline.net/guia-practica-de-electricidad-y-electronica"; 
  
document.getElementById("img13").src= "imgv/13.png";
document.getElementById('txt13').innerHTML = "📘👨Guía para Instalar Sistema de Puesta a Tierra paso a paso!‼️⚡💡👷<br />"+
											"👇💯 Di GRACIAS y descarga el pdf AQUI👇✅😮<br />"+
											"https://tutorialesonline.net/guia-para-instalar-sistema-de-puesta-a-tierra-paso-a-paso";
  
document.getElementById("img14").src= "imgv/14.png";
document.getElementById('txt14').innerHTML =  "📘👨Excelente guia sobre Notas practicas sobre electrónica‼️💥😮<br />"+
											"👇💯 Di GRACIAS y descarga el pdf AQUI👇✅😮<br />"+
											"https://tutorialesonline.net/notas-practicas-sobre-electronica"; 
  
document.getElementById("img15").src= "imgv/15.png";
document.getElementById('txt15').innerHTML =	"📘👨El ABC DE LAS INSTALACIONES ELÉCTRICAS INDUSTRIALES️💥😮<br/>"+
											"👇💯 Di GRACIAS y descarga el pdf AQUI👇✅😮<br />"+
											"https://tutorialesonline.net/el-abc-de-las-instalaciones-electricas";
  
document.getElementById("img16").src= "imgv/16.png";
document.getElementById('txt16').innerHTML = "📘👨EXITOSO MANUAL DE REPARACIÓN TV PANTALLA LCD SHARP‼️💥😮<br />"+
											"👇DEJAME UN GRACIAS 🙋 Y TEN AQUI EL MATERIAL👇<br />"+
											"https://tutorialesonline.net/manual-de-reparacion-tv-pantalla-lcd-sharp";
  
document.getElementById("img17").src= "imgv/17.png";
document.getElementById('txt17').innerHTML = "📘👨Exitoso manual Técnico de Estructuras Metálicas Gratis!💥😁💡🏠<br />"+  
											"👇DEJAME UN GRACIAS 🙋 Y TEN AQUI EL MATERIAL👇<br />"+
											"https://tutorialesonline.net/manual-tecnico-de-estructuras-metalicas-gratis-pdf";  
  
document.getElementById("img18").src= "imgv/18.png";
document.getElementById('txt18').innerHTML = "📘👨Excelente Manual de Embobinado de Motores Eléctrico‼️💥😮<br />"+
											"👇DEJAME UN GRACIAS 🙋 Y TEN AQUI EL MATERIAL👇<br />"+
											"https://tutorialesonline.net/manual-de-embobinado-de-motores-electrico"; 
  
document.getElementById("img19").src= "imgv/19.png";
document.getElementById('txt19').innerHTML = "📘👨Exitoso Manual de cómo fabricar casas de madera🏠🔌👷<br />"+ 
												"👇DEJAME UN GRACIAS 🙋 Y TEN AQUI EL MATERIAL👇<br />"+
												"https://tutorialesonline.net/manual-de-como-fabricar-casas-de-madera";
  
document.getElementById("img20").src= "imgv/20.png";
document.getElementById('txt20').innerHTML = "📘👨Exitoso Manual de construcción de amplificadores👷<br />"+
											"👇DEJAME UN GRACIAS 🙋 Y TEN AQUI EL MATERIAL👇<br />"+
											"https://tutorialesonline.net/manual-de-construccion-de-amplificadores"; 
  
document.getElementById("img21").src= "imgv/21.png";
document.getElementById('txt21').innerHTML =  "📘👨EXITOSO MANUAL COMO HACER PORTONES METÁLICOS️💥😁💡💯<br />"+ 
											"👇DEJAME UN GRACIAS 🙋 Y TEN AQUI EL MATERIAL👇<br />"+
											"https://tutorialesonline.net/manual-como-hacer-portones-metalicos";
  
document.getElementById("img22").src= "imgv/22.png";
document.getElementById('txt22').innerHTML = "📘👨MANUAL DE REPARACION Y MANTENIMIENTO DE COMPUTADORAS PASO A PASO‼️💥😁💯<br />"+ 
											"👇DEJAME UN GRACIAS 🙋 Y TEN AQUI EL MATERIAL👇<br />"+
											"https://tutorialesonline.net/manual-de-reparacion-y-mantenimiento-de-computadoras-paso-a-paso";
  
document.getElementById("img23").src= "imgv/23.png";
document.getElementById('txt23').innerHTML ="📘👨EXCELENTE CURSO DE REPARACIÓN DE CELULARES‼️💥😁💯 <br/>"+ 
											"👇DEJAME UN GRACIAS 🙋 Y TEN AQUI EL MATERIAL👇<br />"+ 
											"https://tutorialesonline.net/curso-de-reparacion-de-celulares-2";
											
document.getElementById("img24").src= "imgv/24.png";
document.getElementById('txt24').innerHTML = "📘👨Exitoso Manual practico de electricidad residencial‼️🔥💯<br />"+
											"👇DEJAME UN GRACIAS 🙋 Y TEN AQUI EL MATERIAL👇<br />"+
											"https://tutorialesonline.net/manual-practico-de-electricidad-residencial";	

document.getElementById("img25").src= "imgv/25.png";
document.getElementById('txt25').innerHTML =	"📘👨EXITOSO MANUAL DE INSTALACION DE SISTEMAS FOTOVOLTAICOS‼️💥😁💯 <br />"+
											"👇DEJAME UN GRACIAS 🙋 Y TEN AQUI EL MATERIAL👇<br />"+
											"https://tutorialesonline.net/manual-de-instalacion-de-sistemas-fotovoltaicos";	
											
document.getElementById("img26").src= "imgv/26.png";
document.getElementById('txt26').innerHTML = "📘👨Excelente Guia Enciclopedia de la electrónica 2‼️👍💥💯 <br />"+
										"👇💯 Di GRACIAS y descarga el pdf AQUI👇😮<br />"+
										"https://tutorialesonline.net/enciclopedia-de-la-electronica-parte-2";
											
document.getElementById("img27").src= "imgv/27.png";
document.getElementById('txt27').innerHTML ="📘👨EXCELENTE GUÍA SOBRE TRABAJOS BÁSICOS DE FONTANERÍA‼️👍💥💯 <br />"+
										"👇💯 Di GRACIAS y descarga el pdf AQUI👇😮<br />"+
										"https://tutorialesonline.net/excelente-guia-sobre-trabajos-basicos-de-fontaneria";
											
document.getElementById("img28").src= "imgv/28.png";
document.getElementById('txt28').innerHTML ="📘👨Exclusiva Colección de circuitos de electrónica en pdf‼️😁💥💯 <br />"+
										"👇💯 Di GRACIAS y descarga el pdf AQUI👇😮<br />"+
										"https://tutorialesonline.net/coleccion-de-circuitos-de-electronica-en-pdf";	
											
document.getElementById("img29").src= "imgv/29.png" ;
document.getElementById('txt29').innerHTML ="📘👨MINICURSO DE ELECTRICIDAD DOMÉSTICA‼️😁💥💯 <br />"+
										"👇💯 Di GRACIAS y descarga el pdf AQUI👇😮<br />"+
										"https://tutorialesonline.net/minicurso-de-electricidad-domestica";	
											
document.getElementById("img30").src= "imgv/30.png";
document.getElementById('txt30').innerHTML ="📘👨Exclusivo Manual sobre el manejo del multimetro digital‼️💥💯 <br />"+
											"👇💯 Di GRACIAS y descarga el pdf AQUI👇😮<br />"+
											"https://tutorialesonline.net/manual-sobre-el-manejo-del-multimetro-digital";	
											
document.getElementById("img31").src= "imgv/31.png";
document.getElementById('txt31').innerHTML ="📘👨Exclusivo Manual de encendido Electromecánico del Auto‼️💥💯😁<br />"+
											"👇💯 Di GRACIAS y descarga el pdf AQUI👇😮<br />"+
											"https://tutorialesonline.net/manual-de-encendido-electromecanico-del-auto";

document.getElementById("img32").src= "imgv/32.png";
document.getElementById('txt32').innerHTML = 	"📘👨Exitoso Manual de Electrónica Digital en pdf‼️✌️🔧😁<br />"+
												"👇💯 Di GRACIAS y descarga el pdf AQUI👇😮<br />"+
												"https://tutorialesonline.net/manual-de-electronica-digital-en-pdf";

document.getElementById("img33").src= "imgv/33.png";
document.getElementById('txt33').innerHTML = 	"📘👨👉Exclusivo Manual de Reparación de Televisor LED y LCD‼️💥💯😁<br />"+
												"👇💯 Di GRACIAS y descarga el pdf AQUI👇😮<br />"+
												"https://tutorialesonline.net/manual-de-reparacion-de-televisor-led-y-lcd-2";
											
document.getElementById("img34").src= "imgv/34.png";
document.getElementById('txt34').innerHTML =	"📘👨👉Exitoso Manual de aire acondicionado y calefacción gratis en pdf‼️💥💯😁<br />"+
												"👇💯 Di GRACIAS y descarga el pdf AQUI👇😮<br />"+
												"https://tutorialesonline.net/manual-de-aire-acondicionado-y-calefaccion-gratis-en-pdf";
											
document.getElementById("img35").src= "imgv/35.png";
document.getElementById('txt35').innerHTML = 	"📘👨👉Excelente Manual de instalaciones eléctricas residenciales tipo visibles‼️💥💯😁<br />"+
												"👇💯 Di GRACIAS y descarga el pdf AQUI👇😮<br />"+
												"https://tutorialesonline.net/manual-de-instalaciones-electricas-residenciales-tipo-visibles";
	
												
document.getElementById("img36").src= "imgv/36.png";
document.getElementById('txt36').innerHTML = 	"📘👨👉Excelente curso de reparación de electrodomésticos‼️💥💯😁<br />"+
	"Este curso te permite Iniciar desde Cero y Conseguir en solo un mes conocimientos en Reparación de Electrodomésticos.<br />"+
												"👇💯 Di GRACIAS si estas activo👇😮<br />"+
	"https://go.hotmart.com/T46806184J"





												
									
function copy(i) {	
	
var ACopiar = document.getElementById('txt'+i);
var seleccion = document.createRange();
seleccion.selectNodeContents(ACopiar);
window.getSelection().removeAllRanges();
window.getSelection().addRange(seleccion);
var res = document.execCommand('copy');
window.getSelection().removeRange(seleccion);	
alert("Texto copiado video "+i);
}
