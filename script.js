function addition(nombreA, nombreB){

    return nombreA + nombreB


}

function soustraction(nombreA, nombreB){

    return nombreA - nombreB;
}

function multiplication(nombreA, nombreB){

    return  nombreA * nombreB;
}

function division(nombreA, nombreB) {
    if(nombreB == 0) {
        throw new Error("Impossible de diviser par 0.");
    }
    return nombreA / nombreB;
}

let restart = false;

do{
    do{
        var choixUtilisateur = Number(prompt("Que souhaitez-vous faire? \n\n 1 -Addition \n 2 - Multiplication \n 3 - Soustraction \n 4 - Division"));
    
    } while (choixUtilisateur!= 1 && choixUtilisateur != 2 && choixUtilisateur != 3 && choixUtilisateur != 4);
    
    
    
    do{
        var premierNombre = Number(prompt("Donnez nous votre premier nombre"));
        var deuxiemeNombre = Number(prompt("Donnez nous votre deuxieme nombre"));
    
    
    } while(isNaN(premierNombre) || isNaN(deuxiemeNombre))
    
    
    try{
    
        switch (choixUtilisateur) {
            case 1:
                var resultat = addition(premierNombre, deuxiemeNombre);
                
                break;
            case 2:
                var resultat = multiplication(premierNombre, deuxiemeNombre);
        
                
                break;
        
            case 3:
                var resultat = soustraction(premierNombre, deuxiemeNombre);
        
                
                break;
        
            case 4:
               var resultat = division(premierNombre, deuxiemeNombre);            
                break;
    
            default:
                 new Error("Une erreur est survenue.");
        
        }
        alert("Le resultat est " + resultat);
    
    }
    
    catch(error){
        alert(error); // Si une erreur est survenue, on affiche l'erreur
    }

      
restart = confirm("Souhaitez-vous recommencer un calcul ?"); // On demande grâce à la boîte de dialogue confirm() si l'utilisateur veut recommencer
  
} while(restart)











