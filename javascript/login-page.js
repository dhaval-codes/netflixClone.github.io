const emailInput = localStorage.getItem("email-checked");

document.querySelector('.existingEmail').value = emailInput;

function verification() {
    const password = document.querySelector('.password').value;

    const passwordString = String(password);
    
    const url = "http://127.0.0.1:5500/code/index-home.html"

    if (passwordString === 'test123') {
        window.location.href = url;
        setTimeout(redirect, 100);
    } else {
        alert('Wrong Password');
    }
}
