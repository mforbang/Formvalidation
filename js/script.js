var signUpForm = document.querySelector('#signUpForm');
var usernameField = document.querySelector('usernameField');
var userNameErrorMessage = document.querySelector('#usernameErrorMessage');
console.log(signUpForm);

signUpForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    if(!signUpForm.username.value){
        usernameField.classList.add('errorField');
        usernameErrorMessage.classList.remove('hidden');
    }

    console.log(signUpForm.username.value);

});