/*   sign up coding" */

let signup_form = document.getElementById("signup_form")

signup_form.onsubmit = function (e) {
    e.preventDefault()

    let user = btoa(document.getElementById("username").value)
    let email = btoa(document.getElementById("email").value)
    let phone = btoa(document.getElementById("phone").value)
    let pass = btoa(document.getElementById("password").value)

    let user_object_data = {
        username: user,
        email: email,
        phone: phone,
        password: pass
    }

    let user_text_data = JSON.stringify(user_object_data)

    if (user != "" && email != "" && phone != "" && pass != "") {
        // encoded email as key
        localStorage.setItem(email, user_text_data)

        let signup_btn = document.getElementById("signup_btn")
        signup_btn.style.background = "#14b129"
        signup_btn.innerHTML = "<i class='fa-solid fa-circle-check'></i> Sign up successful!"

        setTimeout(function () {
            signup_btn.style.background = "linear-gradient(to right, #E100FF, #7F00FF)"
            signup_btn.innerHTML = "Sing up"
            signup_form.reset();
        }, 1500)
    }
}


/*    email validation coding           */

let emailInput = document.getElementById("email")

emailInput.onchange = function () {
    let email = btoa(document.getElementById("email").value) // encode here also
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


/*         login form   */

let login_form = document.getElementById("login_form")

login_form.onsubmit = function (e) {
    e.preventDefault()

    let email = document.getElementById("login_email")
    let password = document.getElementById("login_password")

    let login_email_war = document.getElementById("login_email_warning")
    let login_password_war = document.getElementById("login_password_warning")

    let encodedEmail = btoa(email.value)

    if (localStorage.getItem(encodedEmail) == null) {
        login_email_war.style.display = "block"
        email.style.borderBottomColor = "red"

        email.onclick = function () {
            login_email_war.style.display = "none"
            email.style.borderBottomColor = "#ccc"
        }

    } else {
        let text_data = localStorage.getItem(encodedEmail)
        let obj_data = JSON.parse(text_data)

        let correct_email = atob(obj_data.email)
        let correct_password = atob(obj_data.password)

        if (email.value == correct_email && password.value == correct_password) {
            alert("Login Success")
            login_form.reset()
        } else {
            login_password_war.style.display = "block"
            password.style.borderBottomColor = "red"

            password.onclick = function () {
                login_password_war.style.display = "none"
                password.style.borderBottomColor = "#ccc"
            }
        }
    }
}