'use strict'
const firebase = require("firebase");
var db = firebase.firestore(),
	form = document.getElementById('form'),
	output = document.getElementById('output');
form.setEventListener("submit", escribir);
// Required for side-effects
require("firebase/firestore");

function escribir() {
	db.collection("alumnos").add({
	    boleta: form["boleta"].value,
	    nombre: form["nombre"].value,
	    grupo: form["grupo"].value,
	    materia: form["materia"].value,
	    fecha: form["fecha"].value
	})
	.then((docRef) => {
	    console.log("Document written with ID: ", docRef.id);
	})
	.catch((error) => {
	    console.error("Error adding document: ", error);
	});
	leer();
}

function leer() {
	db.collection("alumnos").get().then((querySnapshot) => {
	    querySnapshot.forEach((doc) => {
			output.innerHTML += "<p>" + doc.id => doc.data() + "</p><br>";
	    });
	});
}