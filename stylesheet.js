var LoginForm = document.getElementById("login");
var SwitchToSignUp = document.getElementById("SwitchSignUp");
var LoginBtn = document.getElementById("LoginBtn");

SwitchToSignUp.onclick = function () {
    LoginBtn.style.display = "none";
    SignUpForm.style.display = "block";
}

var SignUpForm = document.getElementById("SignUp");
var SwitchToLogin = document.getElementById("SwitchLogin");
var submitbtn = document.getElementById("submitbtn");

SignUpForm.style.display = "none";
SwitchToLogin.onclick = function () {
    SignUpForm.style.display = "none";
    LoginForm.style.display = "block";
}

var FirstName = document.getElementById("FirstName").value;
var LastName = document.getElementById("LastName").value;
var Email = document.getElementById("Email").value.indexOf("@");
var DOB = document.getElementById("DOB").value;
var Password = document.getElementById("Password").value;

LoginBtn.onclick = function () {
    submit = "true";
    if (Email == -1) {
        window.alert("Please enter a email");
        submit = "fales";
    }
    if (Password.Length > -1 && Password.Length < 4) {
        window.alert("The password at least need have 5 characters");
        submit = "false";
    }
    if (submit == "false") {
        return false;
    }
}