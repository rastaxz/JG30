function semaforo(){
   let vermelho= document.getElementById("vermelho").checked;

   let amarelo= document.getElementById("amarelo").checked;

   let verde= document.getElementById("verde").checked;

   if(vermelho==true){
   document.getElementById("mensagem").innerHTML="Pare Agora";
   } else if(amarelo==true){
    document.getElementById("mensagem").innerHTML="Calme";
    }
    else if(verde==true){
        document.getElementById("mensagem").innerHTML="Pode prosseguir";
    }
 }
