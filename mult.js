let multiplicacao;
let num=prompt("De qual tabuada voce quer? ");
let conta=(num*multiplicacao);

for(multiplicacao=0;multiplicacao<=10;multiplicacao++){
    document.writeln(`${num} x ${multiplicacao} =${conta}<br>`);
}