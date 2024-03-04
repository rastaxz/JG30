let day;

switch(new Date().getDay()){
    case 0:
    day="Domingo"
        break;

    case 1:
        day="Segunda";
            break;
    
    case 2:
        day="Terça";
        break;
    
    case 3:
        day="Quarta";
        break;
    
    case 4:
        day="Quinta";
        break;

    case 5:
        day="Sextamos"
        break;
    
    default:
        day="Sabadin";
        
}

document.writeln(`Hoje é ${day}`);