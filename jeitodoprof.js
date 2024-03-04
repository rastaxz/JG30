

switch(new Date().getDay()){
    case 0:
    day="Domingo"
        break;

    case 1:
        document.getElementById("Hoje").innerHTML="Segunda";
            break;
    
    case 2:
        document.getElementById("Hoje").innerHTML="Terça";
        break;
    
    case 3:
        document.getElementById("Hoje").innerHTML="Quarta";
        break;
    
    case 4:
        document.getElementById("Hoje").innerHTML="Quinta";
        break;

    case 5:
        document.getElementById("Hoje").innerHTML="Sexta";
        break;
    
    default:
        document.getElementById("Hoje").innerHTML="Sabadin";
        
}
 