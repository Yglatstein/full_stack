let image_links = ["../public/libs/images/pic1.jpg", "../public/libs/images/pic2.jpg", "../public/libs/images/pic3.jpg", "../public/libs/images/pic4.jpg" ]


function set_gallery(images_links: Array<string>){
    let gallery = document.createElement("div")
    gallery.classList.add("gallery")

    let image_table = document.createElement("ul")
    image_table.classList.add("pic_list")

    for (let i = 0; i < images_links.length ; i++){
        let table_line = document.createElement("li")
        let image_div = document.createElement("div")
        image_div.classList.add("picture")
        let img = document.createElement("img")
        img.src = image_links[i]
        //img.onclick = function
        img.addEventListener("click" , function(e){
            let image_name = e.path[0].src
            image_name = image_name.slice(41,-4)
            let image_url = "../public/" + image_name + ".html"

            window.open(image_url , "_self")
        })


        image_div.appendChild(img)
        table_line.appendChild(image_div)
        image_table.appendChild(table_line)
    }

    gallery.appendChild(image_table)

    document.body.appendChild(gallery)
}

set_gallery(image_links)