'use strict'
var db = firebase.firestore(),
	form = document.getElementById('form'),
	lista = document.getElementById('lista');
form.addEventListener("submit", escribir);
leer();

function escribir() {
	var data = {
	    nombre: form["nombre"].value,
	    grupo: form["grupo"].value,
	    materia: form["materia"].value,
	    fecha: form["fecha"].value
	}
	db.collection("alumnos").doc(form["boleta"].value).set(data)
	.then(() => {
	    alert("¡Alumno registrado!");
	})
	.catch((error) => {
	    console.error("Error al registrar: ", error);
	});
}

function leer() {
	lista.innerHTML = "";
	db.collection("alumnos").get().then((querySnapshot) => {
	    querySnapshot.forEach((doc) => {
			lista.innerHTML += "<p>Boleta: " + doc.id + " => { " +
							   "Nombre: " + doc.data().nombre +
							   ", Grupo: " + doc.data().grupo +
							   ", Materia: " + doc.data().materia +
							   ", Fecha: " + doc.data().fecha + " }</p>";
	    });
	});
}