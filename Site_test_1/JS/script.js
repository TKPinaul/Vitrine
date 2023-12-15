document.addEventListener('DOMContentLoaded', function() {
    
    var sousGroupe = document.querySelectorAll('#deroule-nav');
    var sousList = document.querySelectorAll('.nav-sous_grp');

    const loginForm = document.querySelector("#zoneConect1");
    const registerForm = document.querySelector("#zoneConect2");
    const conectButton = document.getElementById("conect-button");
    const saveButton = document.getElementById("save-button");

    // Gestion des menu déroulant liée au title de la nav
    function deroule(e) {
        e.stopPropagation();
        var obj = this.querySelector('.nav-sous_grp');
        if (!this.open) {
            sousList.forEach(ferme);
            obj.style.display = "block";
            this.open = true;
        } else {
            obj.style.display = "none";
            this.open = false;
        }
    }
    var ferme = function(obj, i) {
        obj.style.display = "none";
        sousGroupe[i].open = false;
    }
    var init = function(obj) {
        obj.addEventListener("click", deroule);
        obj.open = false;
    }
    sousGroupe.forEach(init);
    window.addEventListener("click", function() {
        sousList.forEach(ferme);
    });
    window.addEventListener("scroll", function() {
        sousList.forEach(ferme);
    });

    // Gestion de l'affichage des formulaire de connection et d'inscription
    saveButton.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "flex";
    });
    conectButton.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.display = "flex";
        registerForm.style.display = "none";
    });

    
});