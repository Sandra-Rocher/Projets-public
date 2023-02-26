
// Contact formulaire js ci dessous 

const regx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



let loginForm = document.getElementById("formu");

loginForm.addEventListener("submit", function(event){
    event.preventDefault();

    let votreNom = document.getElementById("votreNom");
    let votreEmail = document.getElementById("votreEmail");

    // console.log(regx.test(votreNom.value));
    // console.log(regx.test(votreEmail.value));

    if (votreNom.value == "" || votreEmail.value == "" || !regx.test(votreEmail.value)) {
        alert("Cases vide ou email invalide, veuillez recommencer");
    }
    else {
        alert("Tout est bon !");
    }

    document.getElementById("formu").reset();

})


// Contact formulaire js ci dessus 
