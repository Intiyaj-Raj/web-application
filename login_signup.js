let signup_form = document.getElementById("signup_form")

signup_form.onsubmit = function (e) {
    e.preventDefault()
    let user = document.getElementById("username").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let pass = document.getElementById("password").value

    let user_object_data = {
        username: user,
        email: email,
        phone: phone,
        password: pass
    }

    let user_text_data = JSON.stringify(user_object_data)

    if (user != "" && email != "" && phone != "" && pass != "") {
        localStorage.setItem(email, user_text_data)
        let signup_btn = document.getElementById("signup_btn")
        signup_btn.style.background = "#14b129"
        signup_btn.innerHTML = "<i class='fa-solid fa-circle-check'></i> Sign up successful!";

        setTimeout(function () {
            signup_btn.style.background = "linear-gradient(to right, #E100FF, #7F00FF)"
            signup_btn.innerHTML = "Sing up";
            signup_form.reset();
        }, 1500)
    }
}

let emailInput = document.getElementById("email")
emailInput.onchange = function () {
    let email = document.getElementById("email").value
    let signup_btn = document.getElementById("signup_btn")
    let warning = document.getElementById("email_notice")
    if (localStorage.getItem(email) != null) {
        warning.style.display = "block"
        emailInput.style.borderBottomColor = "red"
        signup_btn.disabled = true;
        signup_btn.style.background = "#ccc"

        emailInput.onclick = function () {
            emailInput.value = ""
            emailInput.style.borderBottomColor = "#ccc"
            warning.style.display = "none"
            signup_btn.disabled = false
            signup_btn.style.background = "linear-gradient(to right, #E100FF, #7F00FF)"
        }
    }
}