// add new contact box 
let add_icon = document.getElementById("new_contact")
add_icon.onclick = function () {
    let bg = document.getElementById("contact_bg")
    bg.style.display = "block"

}

let close = document.getElementById("close")
close.onclick = function () {
    let bg = document.getElementById("contact_bg")
    bg.style.display = "none"
}

if (sessionStorage.getItem("user") == null) {
    window.location.replace("../../index.html")
}
