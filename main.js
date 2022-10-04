const firstName = document.querySelector('#firstNameInput');
const lastName = document.querySelector('#lastNameInput');
const emailAddress = document.querySelector('#emailInput');
const password = document.querySelector('#passInput');

const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const emailAddressError = document.querySelector('#emailError');
const passError = document.querySelector('#passError');

const button = document.querySelector('#button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name cannot be empty');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name cannot be empty');
    validateEmail(emailAddress.value, emailAddress, emailAddressError, 'Looks like this is not an email');
    validateEmpty(password.value, password, passError, 'Password cannot be empty');
});
function validateEmail(valueInput, divInput, divError, messageError) {
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (regExp.test(valueInput)) {
        hideError(divInput, divError);
    }
    else {
        showError(divInput, divError, messageError, 'email');
    }

}
function validateEmpty(valueInput, divInput, divError, messageError) {
    if (valueInput.length == 0) {
        showError(divInput, divError, messageError);
    }
    else {
        hideError(divInput, divError);
    }
}
function showError(divInput, divError, messageError, type) {
    if (type === 'email') {
        divInput.placeholder = 'email@example/com';

    }

    divInput.style.border = '1px solid red';
    divError.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="" />
    <p class="error">${messageError}</p>`
}
function hideError(divInput, divError) {
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = '';
}