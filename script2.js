function mostraI() {
	document.getElementById("textoi").style.display = "none";
	document.getElementById("textor").style.display = "none";
	document.getElementById("textoc").style.display = "none";
	if (document.getElementById("opcaoi").checked == true){
		document.getElementById("textoi").style.display = "block";
	} else {
		document.getElementById("textoi").style.display = "none";
	}
}

function mostraR() {
	document.getElementById("textoi").style.display = "none";
	document.getElementById("textor").style.display = "none";
	document.getElementById("textoc").style.display = "none";
	if (document.getElementById("opcaor").checked == true){
		document.getElementById("textor").style.display = "block";
	} else {
		document.getElementById("textor").style.display = "none";
	}
}

function mostraC() {
	document.getElementById("textoi").style.display = "none";
	document.getElementById("textor").style.display = "none";
	document.getElementById("textoc").style.display = "none";
	if (document.getElementById("opcaoc").checked == true){
		document.getElementById("textoc").style.display = "block";
	} else {
		document.getElementById("textoc").style.display = "none";
	}
}

function calcularIMC() {
	var pes = document.getElementById("peso").value;
	var alt = document.getElementById("altura").value;
	var resi = parseFloat(pes) / parseFloat(alt*alt);
	alert ("O IMC é " + resi);
}

function calcularRetangulo() {
	var bas = document.getElementById("base").value;
	var altr = document.getElementById("alturar").value;
	var resr = parseFloat(bas) * parseFloat(altr);
	alert ("A área do retângulo é " + resr);
}

function calcularRaio() {
	var rai = document.getElementById("raio").value;
	var resc = 3.14 * parseFloat(rai) * parseFloat(rai);
	alert ("A área do círculo é " + resc);
}