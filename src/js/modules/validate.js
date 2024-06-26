// show/hide password checkbox
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

// passShowToggle.onclick = function () {
//     console.log("1")
//     passShowToggle.classList.toggle('view');
// };