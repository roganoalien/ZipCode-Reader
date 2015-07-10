$(document).ready(function() {
	$('.elBoton').click(function(){
		//Capturamos el string que ingresa el usuario
		var valorInput = $('.elInput').val();
		//Checa que no se pongan símbolos extraños
		if(/^[a-zA-Z0-9- ]*$/.test(valorInput) == false){
			alert("No introducir símbolos extraños");
		} else {
			//Si no introduce símbolos, entonces lee el .csv y lo almacena en variable documento
			$.ajax({
				url: "postal/zipcodes.csv",
				dataType: "text",
				success: function(data){
					//.csv en var documento
					var documento = data;
					//llama la función convirtiendo y le manda las variables documento (.csv) y valorInput (string del usuario)
					convirtiendo(documento,valorInput);
				}
			});
		}
	});
});
function convirtiendo(documento,valorInput){
	// Almacenamos el valor del input en una variable interna de la función
	var revisar = valorInput;
	// Checa qué tipo de información tiene la variable (String, boolean, int)
	//alert(typeof revisar); //Código que checa qué tipo de variable es
	//Acomodamos el documento en arreglos gracias al jquery.csv
	//var documentoArray = $.csv.toArrays(documento); el VIEJO
	var documentoArray = csv2Array(documento);
	//$(".show").html(documentoArray[1][0]);
	//Creamos la variable que dirá el indice donde está el valor que ingresó el usuario
	var result;
	//Busca String que introduce usuario y te dice en qué indice está
	for(var i = 0, len = documentoArray.length; i < len; i++){
		if(documentoArray[i][0] === revisar){
			//almacenamos el número del indice en la variable result y salimos del ciclo
			//si el string se encontró dentro del arreglo
			result = i;
			break;
		}
	}
	var largoA = documentoArray.length;
	alert(typeof largoA);
	//Mensaje/acción que manda en caso de que el string no se encontre en el arreglo
	//por lo tanto la variable result no estaría definida
	if(typeof result === 'undefined'){
		alert("objeto no definido");
	} else {
		//comenzamos a hacer sumas y pasar valores
		//almacenamos el número del arreglo (cantidad de usuarios en ese código postal) dentro de valor01 
		var valor01 = documentoArray[result][1];
		//creamos variables para almacenar los valores cuando se sumen 5 hacía arriba
		//creamos variables (B) en caso de que el indice sea mayor al largo total del arreglo
		var unoMas = 0;
		var unoMasB = 0;
		var dosMas = 0;
		var dosMasB = 0;
		var tresMas = 0;
		var tresMasB = 0;
		var cuatroMas = 0;
		var cuatroMasB = 0;
		var cincoMas = 0;
		var cincoMasB = 0;
		//de acuerdo a result obtenemos 5 valores después del result
		for(var x = 1; x < 6; x++){
			//temMas suma el result + x de acuerdo al valor que le da el ciclo cada vuelta
			var tempMas = result + x;
			var iniciadorMas = 0;
			//Variable que contiene el número total del array para tener de referencia
			var longitud = documentoArray.length;
			if(x == 1){
				if(tempMas > longitud){
					iniciadorMas++;
					var elUno = longitud - iniciadorMas;
					unoMasB = documentoArray[elUno][1];
				} else {
					//almacenamos el primer resultado
					unoMas = documentoArray[tempMas][1];
				}
			} else if(x == 2){
				if(tempMas > longitud){
					iniciadorMas++;
					var elDos = longitud - iniciadorMas;
					dosMasB = documentoArray[elDos][1];
				} else {
					//almacenamos el segundo resultado
					dosMas = documentoArray[tempMas][1];
				}
			} else if(x == 3){
				if(tempMas > longitud){
					iniciadorMas++;
					var elTres = longitud - iniciadorMas;
					tresMasB = documentoArray[elTres][1];
				} else {
					//almacenamos el tercer resultado
					tresMas = documentoArray[tempMas][1];
				}
			} else if(x == 4){
				if(tempMas > longitud){
					iniciadorMas++;
					var elCuatro = longitud - iniciadorMas;
					cuatroMasB = documentoArray[elCuatro][1];
				} else {
					//almacenamos el cuarto resultado
					cuatroMas = documentoArray[tempMas][1];
				}
			} else if(x == 5){
				if(tempMas > longitud){
					iniciadorMas++;
					var elCinco = longitud - iniciadorMas;
					cincoMasB = documentoArray[elCinco][1];
				} else {
					//almacenamos el quinto resultado
					cincoMas = documentoArray[tempMas][1];
				}
			}
		}
		//Sumamos los 5 resultados, los hacemos enteros y almacenamos en la variable valor02
		var valor02 = parseInt(unoMas) + parseInt(dosMas) + parseInt(tresMas) + parseInt(cuatroMas) + parseInt(cincoMas);
		var valor02b = parseInt(unoMasB) + parseInt(dosMasB) + parseInt(tresMasB) + parseInt(cuatroMasB) + parseInt(cincoMasB);
		//creamos variables para almacenar los valores cuando se resten 5 hacía abajo
		//Creamos variables para el caso de que el indice sea menor que 0
		var unoMenos = 0;
		var unoMenosB = 0;
		var dosMenos = 0;
		var dosMenosB = 0;
		var tresMenos = 0;
		var tresMenosB = 0;
		var cuatroMenos = 0;
		var cuatroMenosB = 0;
		var cincoMenos = 0;
		var cincoMenosB = 0;
		//de acuerdo a result obtenemos 5 valores antes del result
		for(var y = 1; y < 6; y++){
			//igual que en tempMas pero aquí se le resta el valor de y que cambia en cada ciclo
			var tempMenos = result - y;
			var iniciadorMenos = 5;
			if(y == 1){
				if(tempMenos < 0){
					iniciadorMenos++;
					unoMenosB = documentoArray[iniciadorMenos][1];
				} else {
					unoMenos = documentoArray[tempMenos][1];
				}				
			} else if(y == 2){
				if(tempMenos < 0){
					iniciadorMenos++;
					dosMenosB = documentoArray[iniciadorMenos][1];
				} else {
					dosMenos = documentoArray[tempMenos][1];
				}
			} else if(y == 3){
				if(tempMenos < 0){
					iniciadorMenos++;
					tresMenosB = documentoArray[iniciadorMenos][1];
				} else {
					tresMenos = documentoArray[tempMenos][1];
				}
			} else if(y == 4){
				if(tempMenos < 0){
					iniciadorMenos++;
					cuatroMenosB = documentoArray[iniciadorMenos][1];
				} else {
					cuatroMenos = documentoArray[tempMenos][1];
				}
				//cuatroMenos = documentoArray[tempMenos][1];
			} else if(y == 5){
				if(tempMenos < 0){
					iniciadorMenos++;
					cincoMenosB = documentoArray[iniciadorMenos][1];
				} else {
					cincoMenos = documentoArray[tempMenos][1];
				}
				// cincoMenos = documentoArray[tempMenos][1];
			}
		}
		//Hacemos la suma de todo
		var valor03 = parseInt(unoMenos) + parseInt(dosMenos) + parseInt(tresMenos) + parseInt(cuatroMenos) + parseInt(cincoMenos);
		var valor03b = parseInt(unoMenosB) + parseInt(dosMenosB) + parseInt(tresMenosB) + parseInt(cuatroMenosB) + parseInt(cincoMenosB);
		var sumaValores = parseInt(valor01) + valor02 + parseInt(valor02b) + valor03 + valor03b;
		//Mostramos los resultados
		alert(sumaValores);
		//Esto es solo para mostrar los valores que tomo cada variable y compararlos si son correctos con el texto
		$('.show').html("menos5: " + cincoMenos + "<br>" + "menos4: " + cuatroMenos + "<br>" + "menos3: " + tresMenos + "<br>" + "menos2: " + dosMenos + "<br>" + "menos1: " + unoMenos + "<br>" + "valorInicial: " + valor01 + "<br>" + "mas1: " + unoMas + "<br>" + "mas2: " + dosMas + "<br>" + "mas3: " + tresMas + "<br>" + "mas4: " + cuatroMas + "<br>" + "mas5: " + cincoMas );
		$('.negativos').html("negativo01: " + unoMenosB + "<br>" + "negativo02: " + dosMenosB + "<br>" + "negativo03: " + tresMenosB + "<br>" + "negativo04: " + cuatroMenosB + "<br>" + "negativo05: " + cincoMenosB );
	}
}