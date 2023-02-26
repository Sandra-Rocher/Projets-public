// Sélectionne l'élément HTML pour l'image de la roue
let roue = document.getElementById('img-roue');
let popup = document.getElementById('popup');
let close = document.getElementById('fermer');

// Définit les différentes sections de la roue
let sections = [
    { couleur: '#25B6D2', texte: '-10% sur tout les voyages' },
    { couleur: '#e04f5f', texte: '-10% sur un voyage en Corée du Sud' },
    { couleur: '#fb6e51', texte: '-25% sur un voyage en Italie' },
    { couleur: '#fecd54', texte: '-10% sur les voyages Venise et Paris' },
    { couleur: '#ffc107', texte: '-15% sur le voyage Japon' },
    { couleur: '#e04f5f', texte: '-20% sur tout les voyages' },
    { couleur: '#dc3545', texte: '-15% sur le voyage Mexique' },
];

// Fonction qui retourne un nombre aléatoire entre min et max
function nombreAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Fonction qui fait tourner la roue
function tourner() {
  // Définit un nombre aléatoire d'angles de rotation (entre 720 et 1080 degrés)
  let angles = nombreAleatoire(720, 1080);

  // Définit l'angle initial de la rotation (0 degré)
  let angleInitial = 0;

  // Calcule l'angle final de la rotation en ajoutant l'angle initial et l'angle aléatoire
  let angleFinal = angleInitial + angles;

  // Définit la durée de l'animation de la rotation (entre 4 et 8 secondes)
  let duree = nombreAleatoire(4, 8);

  // Calcule la vitesse de rotation en divisant l'angle aléatoire par la durée de l'animation
  let vitesse = angles / duree;

  // Définit l'animation de la rotation en utilisant des fonctions d'animation CSS
  roue.style.transitionTimingFunction = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  roue.style.transitionDuration = duree + 's';
  roue.style.transform = 'rotate(' + angleFinal + 'deg)';

  // Ajoute un délai pour que l'animation se termine avant d'afficher la pop-up
  setTimeout(function() {
    // Calcule l'indice de la section sur laquelle la roue s'est arrêtée
    let sectionIndice = Math.floor((angleFinal % 360) / (360 / sections.length));

    // Récupère les informations de la section à partir du tableau sections
    let section = sections[sectionIndice];

    // Affiche une pop-up avec le texte de la section
    popup.style.display = 'block';
    document.getElementById('resultat').innerHTML = section.texte;


    // Réinitialise la rotation de la roue
    roue.style.transitionTimingFunction = 'ease-out';
    roue.style.transitionDuration = '0.5s';
    roue.style.transform = 'rotate(' + angleFinal % 360 + 'deg)';
    roue.style.filter = 'grayscale(1)';
    roue.style.cursor = 'not-allowed';
  }, duree * 1000);
}

// Fonction Fermeture de la roue

// Ajoute un événement au clic sur l'image de la roue pour lancer la fonction tourner
roue.addEventListener('click', function() {
  tourner();
  roue.removeEventListener('click', tourner(), false);
}, { once: true });
close.addEventListener('click', function() {
   popup.style.display = 'none';
});