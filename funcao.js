
function operacao(){
    let n1=parseInt(document.getElementById("n1").value);
let n2=parseInt(document.getElementById("n2").value);
let operacao=document.getElementById("operacao").value;
let calculo;
let resultado=parseInt(document.getElementById("resultado").value);

    switch(operacao){
        case "+":
             calculo=n1+n2;
            break;

        case "-":
            calculo=n1-n2;
            break;

        case "/":
            calculo=n1/n2;
            break;

        case "*":
            calculo=n1*n2;
            break;
    }
resultado.innerHTML=calculo;

}