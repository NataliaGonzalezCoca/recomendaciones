//* -------------- EDAD --------------

const edad = prompt ("Ingresa tu edad");

console.log(edad);

if(edad >= 18){
    alert("Apto para ver todo el contenido cinéfilo 👽");
}
else if (edad >= 12 && edad <=17){
    alert("Recuerda que aún no puedes ver películas clasificación R! 👀");
}
else if (edad >= 6 && edad <=11){
    alert("Máxima diversión con películas exclusivamente clasificación A 🎈🎇🎪");
}
else{
    alert("Para los más peques! Películas AA en compañía de toda la familia 🎠");
}
 //*----------------------PELÍCULA FAV-----------------------

const movie = prompt ("Ingresa tu película favorita");
const descripcion = prompt ("Cuéntanos por qué te gusta tanto");
console.log(movie);
console.log(descripcion);

//*-----------------RANGO CINÉFILO------------------------

const pelis = prompt ("¿Cuántas películas ves en una semana?");
console.log(pelis);

if(pelis >= 5){
    alert("WOW!! Tenemos a un verdadero cinéfino!! 🎬🍿🎞️📽️");
}
else if (pelis >= 2 && pelis <=4){
    alert("Te gustan las pelis, eh? Agrega más a tu lista! ✨");
}
else{
    alert("Urge una terapia de cine para ti!! 💪");
}

//Indica si una película está disponible en alguna plataforma
let dispo = true;
console.log(dispo);