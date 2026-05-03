let user_email = sessionStorage.getItem("user")
if (localStorage.getItem(user_email + "image") != null) {
    let profile_pic = document.getElementById("profile_pic")
    profile_pic.style.display = "none"
}


