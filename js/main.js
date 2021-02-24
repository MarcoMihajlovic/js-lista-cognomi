var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

for(var i=0; i < cognomi.length; i++){
    document.getElementById("lista").innerHTML += "<li>" + cognomi[i] + "</li>"
}

var cognomeUtente = prompt("Inserisci il tuo cognome");

cognomi.push(cognomeUtente);

cognomi.sort();

for(var i=0; i < cognomi.length; i++){
    document.getElementById("lista-ordinata").innerHTML += "<li>" + cognomi[i] + "</li>"
}