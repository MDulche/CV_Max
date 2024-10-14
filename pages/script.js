
$(document).ready(function() {
// Assurer que la modale est bien fermée dès le chargement de la page
$("#modalBox").hide(); //Assurez-vous que la modale est masquée dès le démarrage

// Sons
var toggleSound = $("#toggleSound")[0];
var openSound = $("#openSound")[0];
var hoverSound = $("#hoverSound")[0];

// Menu toggle
let menuToggle = document.querySelector(".menuToggle");
let menu = document.querySelector(".menu");

menuToggle.onclick = function () {
  menu.classList.toggle("active");
  toggleSound.currentTime = 0;
  toggleSound.play();
  if (menu.classList.contains("active")) {
    openSound.currentTime = 0;
    openSound.play();
  }
};

$("a").mouseenter(function() {
  hoverSound.currentTime = 0;
  hoverSound.play();
});

// Textes spécifiques pour chaque élément du menu
const menuTexts = {
  "home-outline": "Lieu de résidence : Saint-Etienne <br> Lieu de travail : La Grand-Croix",
  "settings-outline": "Poste actuel : Apprenti <br> Ecole : IRUP - BTS CIEL <br> Employeur : INFODOM / INFOREZO <br> Gestion du parc informatique des professionnelles sous contrat de maintenance.",
  "mail-outline": "Contact 01 42 92 81 00 / sjobs@mac.com",
  "key-outline": "Prénom et Nom : Styve JAUBS <br> Age : 36ans <br> Permis : EC",
  "camera-outline": "<img src='./source/images/camera-image.jpg' alt='Photo' style='width:100%; border-radius:10px;' /><br>",
  "game-controller-outline": "Compétences : <br> Contacts clientèles <br> Informatique : <br> -Technique : Installation et maintenace matérielle <br> -Développement : Python, HTML, CSS, SQL",
  "person-outline": "Expériences : <br><br> Équipier Polyvalent - McDonald's (Août 2023 - Juillet 2024) <br> - Tous les postes ont été occupés <br><br> Stagiaire - Tech On Me (Novembre 2022) <br> -Observation et mise en contact avec les clients <br> -Entretien matériel informatique <br><br> Agent d'entretien Communal - Mairie (Juillet 2022) <br> Peinture et entretien des mains courantes de deux stades",

};

// Gestion des clics dans le menu
$(".menu a").click(function(e) {
e.preventDefault();  // Prevent default link behavior
let iconName = $(this).find("ion-icon").attr("name"); // Get the icon name

// Vérifie si l'icône cliquée est "videocam-outline" (le bouton Projets)
if (iconName === "videocam-outline") {
  // Déclenche le téléchargement du fichier PDF
  window.location.href = '../source/CV-Telechargeable.pdf';  // Change le chemin selon l'emplacement du fichier PDF
} else {
  let menuItemText = menuTexts[iconName] || "Vous avez cliqué sur un élément."; // Get the text based on the icon
  showModal(menuItemText);
}
});


// Fonction pour afficher la modale
function showModal(text) {
$("#modalText").html(text); // Utilisation de .html() au lieu de .text()
$("#modalBox").fadeIn(); // Afficher la boîte modale
}

// Fonction pour fermer la modale
function closeModal() {
  $("#modalBox").fadeOut(); // Masque la boîte modale avec un effet fondu
}

// Fermer la modale lorsque l'utilisateur clique sur 'x'
$(".close").click(function() {
  $("#modalBox").fadeOut(); // Hide the modal box
});

// On peut aussi fermer la modale si on clique en dehors du contenu
$(window).click(function(event) {
  if (event.target.id === "modalBox") {
    closeModal();
  }
});
});
