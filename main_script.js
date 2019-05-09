/*Fuentes
    1.Cambiar fondos+imagenes aleatorias:
    2.Animacion de fondos(Yo hice la pregunta:https://stackoverflow.com/questions/53547736/animate-changing-backgrounds
    3.Filtrar contenido: https://www.w3schools.com/howto/howto_js_filter_lists.asp
*/

//alert("Gracias por acceder al demo de mi pagina web, este proyecto sigue en desarrollo! Por el momento las unicas paginas funcionales son la pagina de inicio y la pagina de Rusia.-Jeremy");
$(document).ready(function () {
var header = $('#landing_home');

var backgrounds = new Array(
    
    'url(Recursos/imagenes_bg/bridge.jpeg)'
  , 'url(Recursos/imagenes_bg/lake.jpeg)'
  , 'url(Recursos/imagenes_bg/mountain.jpg)'
  , 'url(Recursos/imagenes_bg/river.jpeg)'
  , 'url(Recursos/imagenes_bg/villa.jpeg)'
);

var current = 0;
    
function nextBackground() {
    header.animate({ opacity: 0.5 }, 0);
    current++;
    current = current % backgrounds.length;
    //header.fadeTo("slow", 0.5)
    header.css('background-image', backgrounds[current]).animate({opacity: 1}, 'slow');
    //header.fadeTo("slow", 1)
}
setInterval(nextBackground, 7000);

header.css('background-image', backgrounds[0]).animate({ opacity: 1 }, 'slow');

});

function flitar_contenido() {
    var input, filter, ul, li, a, pais;
    input = document.getElementById("barra_busqueda");
    filter = input.value.toUpperCase();
    ul = document.getElementById("paises");
    li = ul.getElementsByTagName('li');

    for (x = 0; x < li.length; x++) {
        a = li[x].getElementsByTagName("a")[0];
        console.log(a);
        pais = a.innerText;
        if (pais.toUpperCase().indexOf(filter) > -1) {//Si lo encuentra devuelte 1 si no lo encuentra devuelve -1.
            li[x].style.display = "";
        } else {
            li[x].style.display = "none";
        }
    }
}