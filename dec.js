
var numDig = parseInt(document.getElementById("campo").value);
var mostrar = document.getElementById("mostrar");
mostrar.innerHTML = "";

function dec() {

    var numDig = parseInt(document.getElementById("campo").value);
    var mostrar = document.getElementById("mostrar");
    mostrar.innerHTML = "";


    for (let x = numDig; x > 0; x--) {
        mostrar.innerHTML += (`${x}<br>`);
    }

}

function dec1() {
    while (numDig > 0) {
        mostrar.innerHTML += "<p>" + (numDig--) + "</p>"
    }
}