var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

for(var i=0; i < cognomi.length; i++){
    document.getElementById("lista").innerHTML += "<li>" + cognomi[i] + "</li>"
}

function myFunction() {
    var cognomeUtente = document.getElementById("cognome").value;
   
    cognomi.push(cognomeUtente);

    cognomi.sort();

    for(var i=0; i < cognomi.length; i++){
        document.getElementById("lista-ordinata").innerHTML += "<li>" + cognomi[i] + "</li>"
    }
}