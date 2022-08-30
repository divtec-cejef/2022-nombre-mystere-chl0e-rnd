/**
 * Jeu du nombre mystère
 * @author  Chloé Renaud
 * @version 0.1
 * @since   2022-08-30 (date de création)
 */

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // Déclaration variables
    let nbMystere = tireNombre(1, 100);
    let nbEssais = 0;
    let reponse = 0;
    let message = 'Entrez un nombre entre 1 et 100';

    do {
        // Saisi du nombre
        reponse = Number(prompt(message));
        if (isNaN(reponse) || reponse < 1 || reponse > 100) {
            alert('Veuillez saisir un nombre correct !');
        } else {
            // Affichage de l'indice
            nbEssais++;
            message = reponse > nbMystere ? 'C\'est moins !' : 'C\'est plus !';
        }
    } while (reponse !== nbMystere);

    // le nombre mystère a été trouvé
    alert('Vous avez trouvé après ' + nbEssais + ' essais !');

}()); // main IIFE
