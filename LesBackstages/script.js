function verifier() {
  const reponse = document.getElementById("reponse").value.toLowerCase(); // creer une variable pour recuperer la reponse et  
  // tolowercase met en minuscule la réponse
  const terminal = document.getElementById("terminal"); // creer une variable pour le terminal qui me permetra d'afficher des messages

  if (reponse === "serveur") { // condition si la reponse est bien serveur
    terminal.innerHTML += "<p>Accès autorisé. Redirection...</p>"; // affiche le message dnas la div terminal et le <p> permet de faire un saut de ligne
    // le innerHTML permet d'ajouter  ou modif le contenu html pour ce code c'est dans une div
      setTimeout(() => { // att 2s avant d'aller sur la pageweb suivante
      window.location.href = "../Page3/page3.html";
    }, 2000); 
  } else { // sinon 
    terminal.innerHTML += "<p>Mot-clé incorrect. Intrusion détectée.</p>";
  }
}
