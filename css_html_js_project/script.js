let image_list = document.getElementsByClassName("picture")

let form = document.getElementsByClassName("add_picture")[0]
form.addEventListener("submit", addImage)

function addImage(ev){
    ev.preventDefault()
    let title = document.getElementById("title")
    let details = document.getElementById("description")
    let pic_addres = document.getElementById("address")

    let new_list_item = document.createElement("li")
    let box = document.createElement("div")
    box.classList.add("picture")
    let new_title = document.createElement("h2")
    let new_description = document.createElement("p")
    let new_img = document.createElement("img")

    new_title.innerText = title.value
    new_description.innerText = new_description.value
    new_img.src = pic_addres.value

    box.appendChild(new_title)
    box.appendChild(new_img)
    box.appendChild(new_description)

    new_list_item.appendChild(box)
    console.log("box is: ", box)
    console.log("list is: ", new_list_item)

    let pic_list = document.getElementsByClassName("pic_list")[0]
    console.log(pic_list)
    pic_list.appendChild(new_list_item)

}