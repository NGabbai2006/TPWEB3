function verifier() {
  const reponse = document.getElementById("reponse").value.toLowerCase(); // recup la reponse de l'user et la met en minuscule pour eviter les erreurs de synstaxe
  const renvoie= document.getElementById("renvoie"); // variable pour repondre a la reponse de l'utilisateur

  if (reponse === "ma premiere page web") { // verifie si la reponse est correcte
    renvoie.innerHTML = "<p>> Mot-clé correct. Accès a ta page web retrouvé.</p>";
    setTimeout(() => { // att 2s avant d'aller sur la pageweb suivante
      window.location.href = "../Classement/page6.html"; // redirige vers l'avant denière page'
    }, 2000); 
  } else {
    renvoie.innerHTML = "<p>> Mot-clé incorrect..</p>"; // message d'erreur si reponse  mauvaise
  }
}
