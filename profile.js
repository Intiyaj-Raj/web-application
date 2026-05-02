window.onload = function () {
    if (sessionStorage.getItem("user") == null) {
        window.location.replace("./index.html")
    }
    else {

        let user_email = sessionStorage.getItem("user")
        let json_text = localStorage.getItem(user_email)
        let obj_data = JSON.parse(json_text)
        console.log(obj_data)

        let profile_name = document.getElementById("profile_name")
        profile_name.innerHTML = atob(obj_data.username)
        console.log(document.getElementById("profile_name"))



        let profile_upload = document.getElementById("profile_upload")

        profile_upload.onchange = function () {
            let reader = new FileReader();
            reader.readAsDataURL(profile_upload.files[0]);
            reader.onload = function () {
                let filename = reader.result;
                let profile_pic = document.getElementById("profile_pic")
                let profile_icon = document.getElementById("profile_icon")
                profile_pic.style.backgroundImage = "url(" + filename + ")"
                profile_pic.style.backgroundSize = "cover"
                profile_pic.style.backgroundPosition = "center"
                profile_icon.style.display = "none"
            }
        }
    }
}
