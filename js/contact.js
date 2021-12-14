const form = document.querySelector("#form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const sucsess = document.querySelector(".sucsess");

let nameValidation = false;
let subjectValidation = false;
let emailValidation = false;
let messageValidation = false;

function validateForm() {
    event.preventDefault();

    if (name.value.trim().length > 5) {
        nameError.style.display = "none";
        nameValidation = true;
    } else {
        nameError.style.display = "block";
    }


    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
        emailValidation = true;
    } else {
        emailError.style.display = "block";
    }

    if (subject.value.trim().length > 15) {
        subjectError.style.display = "none";
        subjectValidation = true;
    } else {
        subjectError.style.display = "block";
    }


    if (message.value.trim().length > 25) {
        messageError.style.display = "none";
        messageValidation = true;
    } else {
        messageError.style.display = "block";
    }
    
    if (nameValidation === true && emailValidation === true && messageValidation === true && subjectValidation === true) {
        sucsess.style.display = "block";
        document.getElementById("container").classList.add('hide');
    }

}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

form.addEventListener("submit", validateForm);

