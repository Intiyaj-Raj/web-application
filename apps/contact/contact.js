
// secure contact link
if (sessionStorage.getItem("user") == null) {
    window.location.replace("../../index.html")
}
else {

    const current_user = sessionStorage.getItem("user")

    // open new contact box 
    let add_icon = document.getElementById("new_contact")
    add_icon.onclick = function () {
        let bg = document.getElementById("contact_bg")
        bg.style.display = "block"

    }

    // close contact box
    let close = document.getElementById("close")
    close.onclick = function () {
        let bg = document.getElementById("contact_bg")
        bg.style.display = "none"
    }

    // add contact in localstorage
    let add = document.getElementById("add")

    add.onclick = function () {
        let c_name = document.getElementById("c_name")
        let c_num = document.getElementById("c_num")
        if (c_name.value != "" && c_num.value != "") {
            var new_contact = {
                name: c_name.value,
                number: c_num.value
            }

            let json_text = JSON.stringify(new_contact)
            localStorage.setItem(current_user + "_contact" + c_name.value, json_text)
        }
        else {
            alert("Please enter name and phone number")
            return false
        }
    }
}
