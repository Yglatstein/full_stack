let app_screen = document.getElementsByClassName("container")[0]
let sound = document.createElement("audio")
sound.src = "./libs/music/pop2-84862.mp3"
let score = 0

function create_baloons(){
    let box = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute("src","https://www.freeiconspng.com/uploads/blue-balloon-png-14.png")
    image.setAttribute('width', '100px')
    box.appendChild(image)
    box.style.position = 'absolute'
    box.style.left = 'calc(50% - 100px)'
    box.style.top = 'calc(100% - 100px)'
    box.classList.add("box")
    app_screen.appendChild(box)
}

function play_sound(){
    sound.currentTime = 0;
    sound.play();
    console.log("played")
}


function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function gameLoop(){
    for(let i=0; i<4 ; i++){
        create_baloons()
        sleep(150)
    }

function update_Score(){
    score +=1
    let score_text = document.getElementById("score") as HTMLParagraphElement
    console.log(score_text)
    score_text.innerText = "score: " + score.toString()
}
    
    let balloons = document.getElementsByClassName("box")

    for (let i = 0; i<= balloons.length; i++){
        let balloon = balloons[i] as HTMLDivElement
        balloon.addEventListener('click' , function(event){
            play_sound()
            app_screen.removeChild(balloon)
            let rndLeft = Math.floor(Math.random() * 100) + 1
            balloon.style.left = rndLeft.toString() + 'vh'
            app_screen.appendChild(balloon)
            update_Score()
        })
    } 
}
    
gameLoop()





