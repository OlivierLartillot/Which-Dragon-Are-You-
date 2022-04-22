
// Notre variable qui contient le "module" app (un objet)
let app = {
    // Tableau contenant des objets dragons
    dragons,
    // Méthode appelée au chargement de la page
    init: function() {

        let myForm = document.querySelector('form');
        myForm.addEventListener('submit', app.handleSubmit);        
    },

    handleSubmit: function(event) {
        event.preventDefault();
        let myFormInput = document.querySelector('form .name').value;
        app.nomDragon(myFormInput);
    },

    //afffichage de la div du dragon
    speechDragon: function(number) {
        const image = '<img src="images/'+ app.dragons[number].img + '">';
        const desc = '<p>' + app.dragons[number].desc + '</p>';
            if (number === 0) {
                const title = '<h3>Tu essaies de te faire passer pour le ' + app.dragons[number].nom +' ???</h3>';

                return title + image + desc;
            }

        const title = '<h3>Tu es le dragon ' + app.dragons[number].nom +' </h3>';
        
        return title + image + desc;
    },
    
    nomDragon: function (inputForm) {
        inputForm = inputForm.toUpperCase();
        const indiceInput = inputForm.length -1;
        const longueurInput = inputForm.length;
        const speech = document.querySelector('.speech');

            if (inputForm === "MASTER"){ 
                speech.innerHTML = app.speechDragon(0);
            }
            else if (inputForm.startsWith("OLI")){ 
                speech.innerHTML = app.speechDragon(5);
            }
            else if (longueurInput < 2) {
                speech.innerHTML = "<p>Tu dois entrer un nom de plus de 1 lettre !</p>";
            }

            else if (longueurInput === 8) {
                speech.innerHTML = app.speechDragon(3);
            } 
            else if ( (inputForm.charAt(0) === 'L') || (inputForm.charAt(indiceInput) === 'X') ){
                speech.innerHTML = app.speechDragon(2);
            } 
            else if ((longueurInput%3 === 0) || (longueurInput%5 === 0)) {
                console.log('c est bien un modulo 3 ', longueurInput%3);
                console.log('c est bien un modulo 5 ', longueurInput%5);
                speech.innerHTML = app.speechDragon(4);
            }
            else {
                speech.innerHTML = app.speechDragon(1);
            }
    },

}

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);
