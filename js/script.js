
let newletterForm = document.getElementById('newsletter-form');
const allAgreeCheck = document.getElementById('all-agree');
let agree1 = document.getElementById("agree-1");
let agree2 = document.getElementById("agree-2");

const validate = (event) => {
    
    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let errors = document.getElementById('errors');

    errors.innerHTML = "";

    if (txtName.value.trim() === "") {
        let liError = document.createElement('li');
        liError.innerText = "Wpisz imię i nazwisko";
        errors.appendChild(liError);
    }

    if (txtEmail.value.trim() === "") {
        let liError = document.createElement('li');
        liError.innerText = "Wpisz adres email";
        errors.appendChild(liError);
    }

    if (!txtEmail.value.includes("@")) {
        let liError = document.createElement('li');
        liError.innerText = "Adres email musi zawierać '@'";
        errors.appendChild(liError);
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = "Wymagana przynajmniej jedna zgoda";
        errors.appendChild(liError);
    }

    if(errors.childElementCount > 0){
        event.preventDefault();
    }
}

const allAgree = (event) => {

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
}

newletterForm.addEventListener('submit', validate);
allAgreeCheck.addEventListener('change', allAgree);