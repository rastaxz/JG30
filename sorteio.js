let numDig;
let numSort = 7;
let mensagem=document.getElementById("mensagem");
let aviso = document.getElementById("Aviso");
let cont=1;


function adivinhacao() {
    numDig = parseInt(document.getElementById("numero").value);
    let comparacao=numDig-numSort;

    while (numDig !== numSort)
     {
        document.getElementById("tentativas").innerHTML=`Tentativa ${cont++}`;

        if (numDig > numSort) {
            aviso.innerHTML = "Tente novamente";
            mensagem.innerHTML=`Voce errou por ${comparacao}`;
            document.getElementById("numero").value = "";
            return;
        }
        else{
            comparacao=(numSort-numDig);
            aviso.innerHTML = "Tente novamente";
            mensagem.innerHTML=`Voce digitou um numero menor. O erro foi por ${comparacao}`;
            document.getElementById("numero").value="";
            return;
        }


    }
    mensagem.innerHTML="";
    aviso.innerHTML = `Parabens, voce acertou em ${cont} tentativas`;
}