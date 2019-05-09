function marcar_destino(destino) {
    var aux = document.getElementById(destino).innerText;
    console.log('Place:' + aux);
    document.getElementById('destination-input').value = aux;
}
function get_carrousel(car_id) {
    //console.log("HOLA1");
    var fondos_rusia = new Array(
        'Recursos/carrousel/rusia/yekaterinburg.jpg',
        'Recursos/carrousel/rusia/sochi.jpeg',
        'Recursos/carrousel/rusia/novgorod.jpg',
        'Recursos/carrousel/rusia/vladivostok.jpg',
        'Recursos/carrousel/rusia/Nizhny.jpg',
        'Recursos/carrousel/rusia/Irkutsk.jpg',
        'Recursos/carrousel/rusia/Kazan.jpg',
        'Recursos/carrousel/rusia/golden_wind.jpg',
        'Recursos/carrousel/rusia/saint_petersburg.jpg',
        'Recursos/carrousel/rusia/moscow.jpg'
        );
    var fondos_corea = new Array(
        'Recursos/carrousel/corea/Suwon.jpg',
        'Recursos/carrousel/corea/chuncheon.jpeg',
        'Recursos/carrousel/corea/Busan.jpg',
        'Recursos/carrousel/corea/Jeonju.jpg',
        'Recursos/carrousel/corea/parque.jpeg',
        'Recursos/carrousel/corea/andong.jpg',
        'Recursos/carrousel/corea/jeju.jpg',
        'Recursos/carrousel/corea/gyeongju.png',
        'Recursos/carrousel/corea/ogn.jpeg',
        'Recursos/carrousel/corea/seoul.jpg'
        );
    var fondos_japon = new Array(
        'Recursos/carrousel/japon/santuario_fushimi.png',
        'Recursos/carrousel/japon/parque_hiroshima.png',
        'Recursos/carrousel/japon/Itsukushima.jpg',
        'Recursos/carrousel/japon/Kinkakuji.jpg',
        'Recursos/carrousel/japon/todaiji.jpg',
        'Recursos/carrousel/japon/takao.jpg',
        'Recursos/carrousel/japon/kiyomizu.jpg',
        'Recursos/carrousel/japon/shinjuku.jpg',
        'Recursos/carrousel/japon/museo.jpg',
        'Recursos/carrousel/japon/templo_naritasan.jpg'
        );
    var fondos_canada = new Array(
        'Recursos/carrousel/canada/gros.jpg',
        'Recursos/carrousel/canada/stampede.jpg',
        'Recursos/carrousel/canada/port.jpg',
        'Recursos/carrousel/canada/fundy.jpg',
        'Recursos/carrousel/canada/athabasca.jpg',
        'Recursos/carrousel/canada/churchill.png',
        'Recursos/carrousel/canada/niagara.jpg',
        'Recursos/carrousel/canada/tren.jpg',
        'Recursos/carrousel/canada/quebec.jpg',
        'Recursos/carrousel/canada/lago.jpeg'
        );
    var fondos_ae = new Array(
        'Recursos/carrousel/ae/khalifa.jpg',
        'Recursos/carrousel/ae/jeremiah.jpg',
        'Recursos/carrousel/ae/Jeque.jpg',
        'Recursos/carrousel/ae/burj_al_arab.jpg',
        'Recursos/carrousel/ae/ZHE_WORUDO.jpg',
        'Recursos/carrousel/ae/mall.png',
        'Recursos/carrousel/ae/waterpark.jpg',
        'Recursos/carrousel/ae/ferrari.jpg',
        'Recursos/carrousel/ae/al_bastakiya.png',
        'Recursos/carrousel/ae/zoco.jpg'
        );
    var fondos_suecia = new Array(
        'Recursos/carrousel/suecia/gamla_stan.jpg',
        'Recursos/carrousel/suecia/palacio_estocolmo.jpg',
        'Recursos/carrousel/suecia/museo_vasa.jpg',
        'Recursos/carrousel/suecia/liseberg.jpg',
        'Recursos/carrousel/suecia/universeum.jpg',
        'Recursos/carrousel/suecia/abba.jpg',
        'Recursos/carrousel/suecia/nobel.jpg',
        'Recursos/carrousel/suecia/catedral.jpg',
        'Recursos/carrousel/suecia/castle.jpg',
        'Recursos/carrousel/suecia/canal.jpg'
        );
    var fondos_alemania = new Array(
        'Recursos/carrousel/alemania/quedlinburg.jpg',
        'Recursos/carrousel/alemania/munich.png',
        'Recursos/carrousel/alemania/cologne.jpg',
        'Recursos/carrousel/alemania/berlin.jpg',
        'Recursos/carrousel/alemania/Mitten.jpg',
        'Recursos/carrousel/alemania/hamburg.jpg',
        'Recursos/carrousel/alemania/heidel.jpg',
        'Recursos/carrousel/alemania/bremen.jpg',
        'Recursos/carrousel/alemania/Stuttgart.jpg',
        'Recursos/carrousel/alemania/Baden-Baden.jpg'

        )
    var fondos_francia = new Array(
        'Recursos/carrousel/francia/Strasbourg.jpg',
        'Recursos/carrousel/francia/basílica de Fourvière.jpg',
        'Recursos/carrousel/francia/Monte Saint-Michel.jpg',
        'Recursos/carrousel/francia/Museo-del-Louvre.jpg',
        'Recursos/carrousel/francia/Eurodisney.jpg',
        'Recursos/carrousel/francia/Versalles.png',
        'Recursos/carrousel/francia/Reims.png',
        'Recursos/carrousel/francia/viñedos.jpg',
        'Recursos/carrousel/francia/Bateaux-Mouche.png',
        'Recursos/carrousel/francia/Loira.jpg'
        )
    var fondos_brasil = new Array(
        'Recursos/carrousel/brasil/salvador_bahia.jpg',
        'Recursos/carrousel/brasil/recife.jpg',
        'Recursos/carrousel/brasil/oliva.jpg',
        'Recursos/carrousel/brasil/rio.jpg',
        'Recursos/carrousel/brasil/buziosc.jpg',
        'Recursos/carrousel/brasil/iguazu.jpg',
        'Recursos/carrousel/brasil/san_miguel.jpg',
        'Recursos/carrousel/brasil/ouro.jpg',
        'Recursos/carrousel/brasil/brasilia.jpg',
        'Recursos/carrousel/brasil/Manaus.jpg'
        )
    var fondos_china = new Array(
        'Recursos/carrousel/china/wall.jpg',
        'Recursos/carrousel/china/ciudad_p.jpg',
        'Recursos/carrousel/china/terracota.jpg',
        'Recursos/carrousel/china/karst.png',
        'Recursos/carrousel/china/yangste.jpg',
        'Recursos/carrousel/china/potala.png',
        'Recursos/carrousel/china/jiuzhaigou.jpg',
        'Recursos/carrousel/china/montaña_amarilla.jpg',
        'Recursos/carrousel/china/Suzhou.jpg',
        'Recursos/carrousel/china/port.png'
        )
    switch (car_id) {
        case "carrousel_rusia":
            console.log("Carrousel de Rusia");
            get_src(fondos_rusia);
            break;
        case "carrousel_corea":
            console.log("Carrousel de Corea");
            get_src(fondos_corea);
            break;
        case "carrousel_japon":
            console.log("Carrousel de Japon");
            get_src(fondos_japon)
            break;
        case "carrousel_canada":
            console.log("Carrouel de Canada");
            get_src(fondos_canada)
            break;
        case "carrousel_emiratos":
            console.log("Carrousel del Emiratos Arabes");
            get_src(fondos_ae);
            break;
        case "carrousel_suecia":
            console.log("Carrousel de Suecia");
            get_src(fondos_suecia);
            break;
        case "carrousel_alemania":
            console.log("Carrousel de Alemania");
            get_src(fondos_alemania);
            break;
        case "carrousel_francia":
            console.log("Carrousel de Francia");
            get_src(fondos_francia);
            break;
        case "carrousel_brasil":
            console.log("Carrousel de Brasil");
            get_src(fondos_brasil);
            break;
        case "carrousel_china":
            console.log("Carrousel de China");
            get_src(fondos_china);
            break;
    }
 
}
function get_src(slides) {
    for (x = 0; x < slides.length; x++) {
        document.getElementById('img_'+x).src = slides[x];
    }
}




function definir_tabla(id_tabla) {
    var codigo;
    switch (id_tabla) {
        case "tabla_rusia":
            codigo = "ru";
            solicitar_datos(id_tabla,codigo);
            break;
        case "tabla_corea":
            codigo = "kr";
            solicitar_datos(id_tabla, codigo);
            break;
        case "tabla_japon":
            codigo = "jp";
            solicitar_datos(id_tabla, codigo);
            break;
        case "tabla_canada":
            codigo = "ca";
            solicitar_datos(id_tabla, codigo)
            break;
        case "tabla_emiratos":
            codigo = "ae"
            solicitar_datos(id_tabla,codigo)
            break;
        case "tabla_suecia":
            codigo = "se";
            solicitar_datos(id_tabla, codigo)
            break;
        case "tabla_alemania":
            codigo = "de";
            solicitar_datos(id_tabla, codigo)
            break;
        case "tabla_francia":
            codigo = "fr";
            solicitar_datos(id_tabla, codigo);
            break;
        case "tabla_brasil":
            codigo = "br";
            solicitar_datos(id_tabla, codigo);
            break;
        case "tabla_china":
            codigo = "cn";
            solicitar_datos(id_tabla, codigo);
            break;
    }
}
function solicitar_datos(tabla, codigo_iso) {
    $.get('http://inqstatsapi.inqubu.com/?api_key=530cfc006b489eb6&data=size,population,bigmac_index,murder_rate,density,education_expenditure,health_expenditure,corruption_index,death_rate,fifa,inflation,jobless_rate,military_expenditure,life_expectancy,electric_energy_consumption&countries='+codigo_iso, function (data, status) {
        var error='No reg'
        
            
        console.log(data[0]['countryCode']);
        console.log(data);
        var tamaño;
        if (data[0]['size'][0] == undefined) { tamaño = error } else { tamaño = data[0]['size'][0]['data'] }

        var habitantes
        if (data[0]['population'][0] == undefined) { habitantes = error } else { habitantes = data[0]['population'][0]['data'] }

        var bigmac
        if (data[0]['bigmac_index'][0] == undefined) { bigmac = error } else { bigmac = data[0]['bigmac_index'][0]['data'] }

        var densidad
        if (data[0]['density'][0] == undefined ) { densidad = error } else { densidad = data[0]['density'][0]['data'] }

        var gasto_educacion
        if (data[0]['education_expenditure'][0] == undefined) { gasto_educacion = error } else { gasto_educacion = data[0]['education_expenditure'][0]['data'] }

        var gasto_salud
        if (data[0]['health_expenditure'][0] == undefined) { gasto_salud = error } else { gasto_salud = data[0]['health_expenditure'][0]['data'] }


        var corrupcion
        if (data[0]['corruption_index'][0] == undefined) { corrupcion = error } else { corrupcion = data[0]['corruption_index'][0]['data']; }

        var muerte
        if (data[0]['death_rate'][0] == undefined) { muerte = error } else { muerte = data[0]['death_rate'][0]['data'] }

        var fifa
        if (data[0]['fifa'][0] == undefined) { fifa = error } else { fifa = data[0]['fifa'][0]['data'] }

        var inflacion
        if (data[0]['inflation'][0] == undefined) { inflacion = error } else { inflacion = data[0]['inflation'][0]['data'] }

        var desempleo
        if (data[0]['jobless_rate'][0] == undefined) { desempleo = error } else { desempleo = data[0]['jobless_rate'][0]['data'] }


        var militar
        if (data[0]['military_expenditure'][0] == undefined) { militar = error; } else (militar = data[0]['military_expenditure'][0]['data']);

        var vida
        if (data[0]['life_expectancy'][0] == undefined) { vida = error; } else { vida = data[0]['life_expectancy'][0]['data']; };
        
        var energia
        if (data[0]['electric_energy_consumption'][0] == undefined) { energia=error} else {energia = data[0]['electric_energy_consumption'][0]['data']}

        var bold='<b>'
        document.getElementById(tabla + '_tamaño').innerHTML = bold + tamaño + '</b> km² ';
        document.getElementById(tabla + '_habitantes').innerHTML = bold +habitantes+'</b> Habiantes';
        document.getElementById(tabla + '_indicebm').innerHTML = bold + bigmac +'</b> USD';
        document.getElementById(tabla + '_densidad').innerHTML = bold + densidad + '</b> km²';
        document.getElementById(tabla + '_geducacion').innerHTML = bold + gasto_educacion + '</b> en% del PIB';
        document.getElementById(tabla + '_gsalud').innerHTML = bold +gasto_salud + '</b> en % del PIB';
        document.getElementById(tabla + '_tasacorrupcion').innerHTML = bold + corrupcion + '</b> (0:alta | 100:baja)';
        document.getElementById(tabla + '_muertes').innerHTML = bold + muerte + '</b> (por cada 1.000 habitantes)';
        document.getElementById(tabla + '_fifa').innerHTML = bold + fifa + '</b>';
        document.getElementById(tabla + '_inflacion').innerHTML = bold + inflacion + '</b> %';
        document.getElementById(tabla + '_tasadesempleo').innerHTML = bold + desempleo + '</b> (en relación con la fuerza laboral)';
        document.getElementById(tabla + '_gmilitar').innerHTML = bold  + militar + '</b> (en % del PIB)';
        document.getElementById(tabla + '_expectativavida').innerHTML = bold + vida +'</b> años';
        document.getElementById(tabla + '_energia').innerHTML = bold + energia + '</b> kWh / cápita';
      

        

    });
    //console.log(habitantes[0]);
    ////console.log(habitantes.countryCode);
    //document.getElementById(tabla + "_habitantes").innerText = habitantes;
}

function getLocation() {
    if (navigator.geolocation) {//Caputura ubicacion del usuario
        return navigator.geolocation.getCurrentPosition(showPosition)

    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}

var latitud;
var longitud;

function showPosition(position) {

    latitud = position.coords.latitude;
    longitud = position.coords.longitude;
    //console.log(latitud + "|" + longitud);
    setLocation();
}

//AutoComplete source: https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-directions
function initMap() {
    getLocation();
    var options = {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 8,
        mapTypeControl: false,
        //fullscreenControl: false
        
    }
    map = new google.maps.Map(document.getElementById('map'), options);

    




    new AutocompleteDirectionsHandler(map);

}

function AutocompleteDirectionsHandler(map) {
    this.map = map;
    this.originPlaceId = null;
    this.destinationPlaceId = null;
    this.travelMode = 'WALKING';
    var originInput = document.getElementById('origin-input');
    var destinationInput = document.getElementById('destination-input');
    var modeSelector = document.getElementById('mode-selector');
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.directionsDisplay.setMap(map);

    var originAutocomplete = new google.maps.places.Autocomplete(
        originInput, { placeIdOnly: true });
    var destinationAutocomplete = new google.maps.places.Autocomplete(
        destinationInput, { placeIdOnly: true });

    this.setupClickListener('changemode-walking', 'WALKING');
    this.setupClickListener('changemode-transit', 'TRANSIT');
    this.setupClickListener('changemode-driving', 'DRIVING');

    this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
    this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
}

// Sets a listener on a radio button to change the filter type on Places
// Autocomplete.
AutocompleteDirectionsHandler.prototype.setupClickListener = function (id, mode) {
    var radioButton = document.getElementById(id);
    var me = this;
    radioButton.addEventListener('click', function () {
        me.travelMode = mode;
        me.route();
    });
};

AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function (autocomplete, mode) {
    var me = this;
    autocomplete.bindTo('bounds', this.map);
    autocomplete.addListener('place_changed', function () {
        var place = autocomplete.getPlace();
        if (!place.place_id) {
            window.alert("Please select an option from the dropdown list.");
            return;
        }
        if (mode === 'ORIG') {
            me.originPlaceId = place.place_id;
        } else {
            me.destinationPlaceId = place.place_id;
        }
        me.route();
    });

};

AutocompleteDirectionsHandler.prototype.route = function () {
    if (!this.originPlaceId || !this.destinationPlaceId) {
        return;
    }
    var me = this;

    this.directionsService.route({
        origin: { 'placeId': this.originPlaceId },
        destination: { 'placeId': this.destinationPlaceId },
        travelMode: this.travelMode
    }, function (response, status) {
        if (status === 'OK') {
            me.directionsDisplay.setDirections(response);
            
        } else {
            window.alert('Directions request failed due to ' + status);
            polyline();
        }
    });
};






function setLocation() {
    map.setCenter({ lat: latitud, lng: longitud })//Pone un nuevo center
    //Marker
    //var marker = new google.maps.Marker({
    //    position: { lat: latitud, lng: longitud }, map: map
    //});
    //setDestination();
}
//Map directions
//Fuente: https://www.youtube.com/watch?v=QuuL29iiOn0 ; https://developers.google.com/maps/documentation/javascript/directions
function setDestination() {//Definir direccion
    var direction_render = new google.maps.DirectionsRenderer();
    var direction_service = new google.maps.DirectionsService();

    var ubicacion = new google.maps.LatLng(latitud,longitud);
    var destino = new google.maps.LatLng(43.6028, 39.7342);

    direction_render.setMap(map);

    var request = {
        origin: ubicacion,
        destination: 'Chicago, IL',
        travelMode: 'DRIVING'
    }

    direction_service.route(request, function (result, status) {
        console.log(result, status);
        if (status == 'OK') {
            direction_render.setDirections(result);
        } else {
            //polyline();
            error_mapa();
        }
    });
}
//Map Polyline
//function polyline() {
//    var coordinates = [
//        { lat: latitud, lng: longitud },
//        { lat: 43.6028 ,lng:39.7342}
//    ];
//    var path= new google.maps.Polyline({
//        path:coordinates,
//        geodesic: true,
//        strokeColor: '#FF0000',
//        strokeOpacity: 1.0,
//        strokeWeight: 2
//    });
//    path.setMap(map);

//}
function error_mapa(){
    alert("Se ha generado un error para calcular una direccion, verifique que esta ingresando una ubicacion correcta")
}
