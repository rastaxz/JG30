function somar() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;


    let resultado = parseInt(n1) + parseInt(n2);

    document.getElementById("resultado").innerHTML = resultado;
}

function subtrair() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;


    let resultado = parseInt(n1) - parseInt(n2);

    document.getElementById("resultado").innerHTML = resultado;
}
function mult() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;


    let resultado = parseInt(n1) * parseInt(n2);

    document.getElementById("resultado").innerHTML = resultado;
}

function div() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;


    let resultado = parseInt(n1) / parseInt(n2);

    document.getElementById("resultado").innerHTML = resultado;
}

function Calcular(){
    let x = 0;
    x++;
    x=x+1;
    //x+=3;




 document.getElementById("operadores").innerHTML=x
    
}
function comparacao(){
    let a=false;

    document.getElementById("comparacao").innerHTML=x
}









let media=7;
let num=5 ?"Aprovado" :"reprovado";