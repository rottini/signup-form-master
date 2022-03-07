const form = document.getElementById('form'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkInputFields();
});

function checkInputFields() {
    const fNameValue = firstName.value.trim();
    const lNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (fNameValue === '') {
        setErrorMsg(firstName, 'First Name Cannot be empty');
    }
    else if (fNameValue.length <= 2) {
        setErrorMsg(firstName, 'Minimum three characters');

    } else {
        setSuccessMsg(firstName);
    }


    if (lNameValue === '') {
        setErrorMsg(lastName, 'Last Name Cannot be empty');

    } else if (lNameValue.length <= 2) {
        setErrorMsg(lastName, 'Minimum three characters');

    } else {
        setSuccessMsg(lastName);
    }


    if (emailValue === '') {
        setErrorMsg(email, 'Email Cannot be empty');

    } else if (!validMail(emailValue)) {
        setErrorMsg(email, 'Looks like this is not an email');

    } else {
        setSuccessMsg(email);
    }


    if (passwordValue === '') {
        setErrorMsg(password, 'Password Cannot be empty');

    } else if (passwordValue.length <= 2) {
        setErrorMsg(password, 'Minimum three characters');

    } else {
        setSuccessMsg(password);
    }
}

function setErrorMsg(input, msg) {
    const boxControl = input.parentElement;
    boxControl.className = 'box-control error';
    const smallMsg = input.nextElementSibling;
    smallMsg.innerText = msg;
    email.placeholder = 'example@email/com';
    input.placeholder = '';
}

function setSuccessMsg(input) {
    const boxControl = input.parentElement;
    boxControl.className = 'box-control success';
}

function validMail(email) {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
}
