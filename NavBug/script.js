
let nbr= 0; // variable pour compter le nombre d'erreur de l'utilisateur en dehors de la fonction car sinon nbr se remet a 0
function verifier() {
  const reponse = document.getElementById("reponse").value.toLowerCase(); // creer une variable pour recuperer la reponse et  
  // tolowercase met en minuscule la réponse
  const terminal = document.getElementById("terminal"); // creer une variable pour le terminal qui me permetra d'afficher des messages
  if (reponse === "1992") { // condition si la reponse est bien serveur
    terminal.innerHTML += "<p>Mot-clé correct! fuite possible!</p>"; // affiche le message dnas la div terminal et le <p> permet de faire un saut de ligne
    // le innerHTML permet d'ajouter  ou modif le contenu html pour ce code c'est dans une div
    setTimeout(() => { // att 2s avant d'aller sur la pageweb suivante
      window.location.href = "../LeBinaire/page4.html";
    }, 2000);
  } else {
    terminal.innerHTML += "<p>Mot-clé incorrect. le site ne tiendera plus longtemps</p>";
    nbr++;
    if (nbr >= 3) { // si l'utilisateur se trompe 3 fois il est redirigé vers la page 404
      setTimeout(() => {
        window.location.href = "../Acceuil/accueil.html">; // redirection vers la page d'accueil
      }, 2000);
    }

  }
}