var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var user = [];

if (localStorage.getItem("user") != null) {
    user = JSON.parse(localStorage.getItem ("user"))
} else {
    user = [];
}

function signUp() {
    if (signupName.value == '' || signupEmail.value == '' || signupPassword.value =='' ) {
        document.getElementById("message").classList.remove("d-none");
    } else {
        var newEmail = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value
        }
        user.push(newEmail)
        location.href = '../index.html'
        localStorage.setItem("user", JSON.stringify(user));
    }
}

document.getElementById("Login").addEventListener("click",function () {
    if (signinEmail.value == '' || signinPassword.value == '') {
        document.getElementById("incorrect").classList.remove("d-none");
    } else {
        checkUser();
    }
})



function checkUser() {
    for (let i = 0; i < user.length; i++) {
        if (signinEmail.value == user[i].email && signinPassword.value == user [i].password) {
            var takeUserName = user[i].name;
            localStorage.setItem("userName", takeUserName);
            location.href = "../home.html";
            break;
       }
        
    }
}

document.getElementById("name").innerHTML = localStorage.getItem("userName");

document.getElementById("logBtn").addEventListener("click", function () {
    localStorage.removeItem("userName")
})


