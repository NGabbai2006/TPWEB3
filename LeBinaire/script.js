function verifier() {
  const reponse = document.getElementById("reponse").value.toUpperCase(); // recupere la reponse de l'utilisateur et la met en majuscule pour eviter les erreurs de synstaxe
  const renvoie = document.getElementById("renvoie"); // variable pour la reponse de l'utilisateur

  if (reponse === "ASCII") { // verifie si la reponse est correcte
    renvoie.innerHTML = "> décryptage réussi !! Accès autorisé.";// affiche le message dnas la div renvoie 
    // le innerHTML permet d'ajouter  ou modif le contenu html pour ce code c'est dans une div
    setTimeout(() => { // att 2s avant d'aller sur la pageweb suivante
      window.location.href = "../suivant/page5.html";
    }, 2000);
  } else {
    renvoie.innerHTML = "> Erreur de décryptage. Recommencez.;"; // message d'erreur si la reponse est mauvaise
  }
}
