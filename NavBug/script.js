
function verifier() {
  const reponse = document.getElementById("reponse").value.toLowerCase(); // creer une variable pour recuperer la reponse et  
  // tolowercase met en minuscule la réponse
  const terminal = document.getElementById("terminal"); // creer une variable pour le terminal qui me permetra d'afficher des messages

  if (reponse === "1992") { // condition si la reponse est bien serveur
    terminal.innerHTML += "<p>Mot-clé correct! fuite possible!</p>"; // affiche le message dnas la div terminal et le <p> permet de faire un saut de ligne
    // le innerHTML permet d'ajouter  ou modif le contenu html pour ce code c'est dans une div
      setTimeout(() => { // att 2s avant d'aller sur la pageweb suivante
      window.location.href = "../page4/page4.html";
    }, 2000); 
  } else { 
    terminal.innerHTML += "<p>Mot-clé incorrect. le site ne tiendera plus longtemps</p>";
  }
}