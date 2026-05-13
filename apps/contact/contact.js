
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

    function all_contact() {
        for (let i = 0; i < localStorage.length; i++) {
            let all_keys = localStorage.key(i)
            if (all_keys.match(sessionStorage.getItem("user") + "_contact")) {
                let json_txt = localStorage.getItem(all_keys)
                let obj = JSON.parse(json_txt)
                console.log(obj)

                let contact_box = document.createElement('DIV')
                contact_box.setAttribute("class", "contact")

                let name_p = document.createElement('P')

                let name_i = document.createElement('I')
                name_i.setAttribute("class", "fas fa-user")

                let tool = document.createElement('DIV')
                tool.setAttribute("class", "tool")

                let edit_i = document.createElement('I')
                edit_i.setAttribute("class", "fas fa-edit")

                let del_i = document.createElement('I')
                del_i.setAttribute("class", "fas fa-trash")

                let line = document.createElement('HR')
                line.setAttribute("color", "purple")
                line.setAttribute("width", "75%")
                line.setAttribute("size", "2")

                let num_p = document.createElement("P")

                let num_i = document.createElement("I")
                num_i.setAttribute("class", "fas fa-mobile-alt")

                name_p.appendChild(name_i)
                name_p.innerHTML += "&nbsp; " + obj.name

                tool.appendChild(edit_i)
                tool.appendChild(del_i)

                num_p.appendChild(num_i)
                num_p.innerHTML += "&nbsp; " + obj.number

                contact_box.appendChild(name_p)
                contact_box.appendChild(tool)
                contact_box.appendChild(line)
                contact_box.appendChild(num_p)

                let all_contact_box = document.getElementById("all_contact_box")
                all_contact_box.appendChild(contact_box)
            }

        }
    }

    all_contact()
}


//   < div class="contact" >
//             <p><i class="fas fa-user"></i>&nbsp; Intiyaj Raj</p>
//             <div class="tool">
//                 <i class="fas fa-edit"></i>
//                 <i class="fas fa-trash"></i>
//             </div>
//             <hr color="purple" width="75%" size="2">
//             <p><i class="fas fa-mobile-alt"></i>&nbsp; 123456789</p>
//         </>