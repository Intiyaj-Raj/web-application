let login_box = document.getElementById("login")
let signup_box = document.getElementById("sign-up")

function loginBox() {
    login_box.style.display = "block"
    signup_box.style.display = "none"

}

function signupBox() {
    login_box.style.display = "none"
    signup_box.style.display = "block"
}