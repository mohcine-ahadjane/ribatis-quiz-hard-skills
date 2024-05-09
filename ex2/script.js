function toggleForm() {
  const personType = document.querySelector(
    'input[name="personType"]:checked'
  ).value;
  console.log('personType', personType);

  if (personType === "physique") {
    document.querySelector("#physique").style.display =
      "block";
    document.querySelector("#morale").style.display =
      "none";
  } else {
    document.querySelector("#physique").style.display =
      "none";
    document.querySelector("#morale").style.display =
      "block";
  }
}
function checkForm() {
    let isValid = true;
    const personType = document.querySelector(
      'input[name="personType"]:checked'
    ).value;

    if(personType=="physique"){
        fields = document.querySelectorAll(".physique");
        for (let i = 0; i < fields.length; i++) {

            if (!fields[i].checkValidity()) {
  
              isValid = false;
            }
            console.log();
        }

        // Vérification de la validité du format du téléphone et de l'email
        const phone = document.querySelector('input[name="telephone"]').value;
        const email = document.querySelector('input[name="email"]').value;
        console.log('email', email);
        const phoneRegex = /^\d{10}$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!phoneRegex.test(phone)) {
        isValid = false;
      }
      if(email!="" && email!=null){ 
        if(!emailRegex.test(email)) isValid = false;
      }
    
    }
    else{
        fields = document.querySelectorAll(".morale");
        for (let i = 0; i < fields.length; i++) {

            if (!fields[i].checkValidity()) {
  
              isValid = false;
              console.log(fields[i]);
            }
          }
    }
   
    // Affichage d'un message d'erreur ou d'information selon la validité du formulaire
    const errorMessage = document.querySelector("#error-message");
    const successMessage = document.querySelector("#success-message");
    if (isValid) {
      errorMessage.style.display = "none";
      successMessage.style.display = "block";
    } else {
      errorMessage.style.display = "block";
      successMessage.style.display = "none";
    }

    return isValid;
  }

  
  function resetForm() {
    // Récupération de la valeur sélectionnée dans le champ de type radio
    const personType = document.querySelector(
        'input[name="personType"]:checked'
      ).value;
      
      var fields = null;

      if(personType=="physique"){
        fields = document.querySelectorAll(".physique");
      }
      else{
         fields = document.querySelectorAll(".morale");
      }
      for (let i = 0; i < fields.length; i++) {
        fields[i].value = "";
      }


    // Réinitialisation des messages d'erreur et d'information
    document.querySelector("#error-message").style.display = "none";
    document.querySelector("#success-message").style.display = "none";
  }

  