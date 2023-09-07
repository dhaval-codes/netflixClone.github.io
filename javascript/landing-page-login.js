function checkInputEmail() {

    const inputByEmailLandingPage1 = document.querySelector('.js-input').value;

    const inputEmailString = String(inputByEmailLandingPage1);

    const inputEmail = inputEmailString.toLowerCase();    
    
    const url = "http://127.0.0.1:5500/code/index-login.html";

    if (inputEmail === 'test@gmail.com') {
         window.location.href = url;
        // setTimeout(()=>{
        //     window.location.href = url;
        // },1000);
        localStorage.setItem("email-checked", inputEmail);
    } else {
        alert('You are not an authorised user to visit this website');
    }
}
/*
var link = document.createElement('a');
link.setAttribute('href', 'https://www.example.com');
link.textContent = 'Click me';
document.body.appendChild(link);
link.click();
*/

