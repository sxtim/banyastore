// password show/hide checkbox
var inpPass = document.getElementById('input-pass');
var passShowToggle = document.getElementById('pass-show-toggle');



function showHidePassword () {

    if (inpPass.type === 'password') {
        console.log("hi")
        inpPass.setAttribute('type', 'text');
        passShowToggle.classList.add('view');
    } else {
        passShowToggle.classList.remove('view');
        inpPass.setAttribute('type', 'password');
    }
}
passShowToggle.addEventListener('click', showHidePassword);

// password coincidence
// let regForm = document.getElementById('reg-form')
//
// if (regForm) {
//     function checkPassword() {
//         console.log("hello")
//         let pass = document.getElementById("input-pass").value;
//         let passConfirm = document.getElementById("input-pass-confirm").value;
//         let message = document.getElementById("inp-msg");
//         if (pass.length !== 0 && passConfirm.length !== 0) {
//             if (pass === passConfirm) {
//                 message.textContent = "Passwords Match";
//                 message.style.backgroundColor = "#3ae374";
//             } else {
//                 message.textContent = "Passwords don't Match";
//                 message.style.backgroundColor = "#ff4d4d";
//             }
//         } else {
//             alert("Passwords can't be empty!");
//             message.textContent = "";
//         }
//     }
// }

const password = document.getElementById("input-pass")
const confirm_password = document.getElementById("input-pass-confirm");

function validatePassword(){
    if(password.value !== confirm_password.value) {
        confirm_password.setCustomValidity("Пароли не совпадают");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
