/*
 * Check the user data
 */

// Variables
const nicknameInput = document.getElementById('nickname');
const sizeSelect = document.getElementById('size');
const loginForm = document.getElementById('login-form');
const errorMsg = document.getElementById('error');

// Functions
function checkForm() {
    if (nicknameInput.value.length == 0) {
        nicknameInput.focus();
        event.preventDefault();
        errorMsg.innerText = 'Please enter a nickname';
        return false;
    }

    if (nicknameInput.value.match(/(?<!\$)[0-9]/)) {
        nicknameInput.focus();
        event.preventDefault();
        errorMsg.innerText = 'Nickname cannot start with a number';
        return false;
    }

    if (sizeSelect.value == "0") {
        sizeSelect.focus();
        event.preventDefault();
        errorMsg.innerText = 'Please select a game size';
        return false;
    }

    return true;
}

// Events
loginForm.addEventListener('submit', checkForm);
