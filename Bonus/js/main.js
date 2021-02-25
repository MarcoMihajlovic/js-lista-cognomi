var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

var cognomi2 = "";

var x = 0;

for(var i=0; i < cognomi.length; i++){
    document.getElementById("lista").innerHTML += "<li>" + cognomi[i] + "</li>"
}

function myFunction() {

    for(var i=0; i < cognomi2.length; i++){
        document.getElementById("lista-ordinata").innerHTML = ""
    }

    var cognomeUtente = document.getElementById("cognome").value;
   
    cognomi.push(cognomeUtente);

    cognomi.sort();

    cognomi2 = cognomi;

    for(var i=0; i < cognomi.length; i++){
        document.getElementById("lista-ordinata").innerHTML += "<li>" + cognomi[i] + "</li>"
    }

    for(var i=0; i < cognomi.length; i++){
        ++x;
        if (cognomi[i] == cognomeUtente) {
            alert("La tua posizione è: " + x);
        }
    }
}