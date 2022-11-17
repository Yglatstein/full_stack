
let post= document.getElementById("post");
post.addEventListener("click", function(){
    let commentBoxValue= document.getElementById("comment-box").value;
 
    let li = document.createElement("li");
    let text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li); 
});

function backToGallery(){
    window.open("../public/index.html" , "_self")
}

let back_button = document.getElementsByTagName("button")[0]
back_button.addEventListener("click", backToGallery)
