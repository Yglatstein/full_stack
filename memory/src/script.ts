
let imagesPaths: Array<string> = ['../public/libs/images/img1.png', '../public/libs/images/img2.png', '../public/libs/images/img3.png', '../public/libs/images/img4.png', '../public/libs/images/img5.png', '../public/libs/images/img6.png']
let matchesFound: Array<string> = [];
let openImgs = 0, milliseconds = 0 , timeout = false, timerOn = false;
let selected1: HTMLImageElement, selected2: HTMLImageElement, isWin: boolean;
let [seconds,minutes] = [0,3];
let timerRef = document.querySelector('.timerDisplay');
let int = null

function displayTimer(){
    milliseconds+=10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds--;

        if(seconds == -1){
            seconds = 59;
            minutes--;

            if(minutes == 0){
                minutes = 3;
                timeout = true;
                console.log("gameOver");
                timerOn = false;
                

            }
        }
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    timerRef.innerHTML = `${m} : ${s}`;

    if(seconds == 0 && minutes == 0){
        timeout = true;
        confirm("GameOver");
    }

}

function set_timer(){
    document.getElementById('startGame').addEventListener('click', ()=>{
        timerOn = true;
        if(int!==null){
            clearInterval(int);
        }
        int = setInterval(displayTimer,10);
    });

    document.getElementById('resetGame').addEventListener('click', ()=>{
        timerOn = false;
        clearInterval(int);
        [seconds,minutes] = [0,3];
        timerRef.innerHTML = '00 : 00';

        let images = document.getElementsByTagName("img") 
        for(let i = 0; i<images.length; i++){
            let im = images[i] as HTMLImageElement;
            im.style.opacity = "0";

            openImgs = 0;
            matchesFound = [];
        }
    });
}

function shuffle_images(imagesPaths: Array<string>){
    let newImagesPathes = []
    for (let i = 0; i <= imagesPaths.length-1; i++){
        newImagesPathes[i*2] = imagesPaths[i];
        newImagesPathes[i*2+1] = imagesPaths[i];
    }

    let currentIndex = newImagesPathes.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [newImagesPathes[currentIndex], newImagesPathes[randomIndex]] = [
        newImagesPathes[randomIndex], newImagesPathes[currentIndex]];
    }
    return newImagesPathes;
}

function add_img_listenner(img: HTMLImageElement){
    img.addEventListener("click" , function onclick(e){
        if(timerOn){
            if(!(matchesFound.indexOf(img.src) > -1)){
                if(openImgs<2){
                    if (img.style.opacity == "0"){
                        img.style.opacity = "1";
                        openImgs+=1;
                        console.log("open: ", openImgs);
                   }
                   else{
                    img.style.opacity = "0";
                    openImgs -= 1;
                    console.log("open: ", openImgs);
                   }
                   if(openImgs == 1){
                    selected1 = img;
                    console.log("selected 1 src: ", selected1.src);
                    }
                    else if(openImgs == 2){
                        selected2 = img;
                        if(check_match(selected1, selected2)){
                            matchesFound.push(img.src);
                            if(matchesFound.length == imagesPaths.length){
                                confirm("you won!");
                                timerOn = false;
                                clearInterval(int);
                                [seconds,minutes] = [0,3];
                                timerRef.innerHTML = '00 : 00';

                            }
                            console.log('matches found: ', matchesFound);
                            openImgs = 0;
                        }
                        
                    } 
                }
                else{
                    if(img.style.opacity == "1"){
                        img.style.opacity = "0";
                        openImgs -= 1;
                        if (img == selected1)
                            selected1 = selected2;
                    }
                }
            }
        }
          
    })
    return img;
}

function set_images(imagesPaths: Array<string>){
    let gameboard = document.createElement("div");
    gameboard.classList.add("gameBoard");
    let image_table = document.createElement("ul");
    image_table.classList.add("images");

    let allImages = shuffle_images(imagesPaths);
    for (let i = 0; i < allImages.length ; i++){
        let table_line = document.createElement("li");
        let image_div = document.createElement("div");
        image_div.classList.add("picture");
        let img = document.createElement("img");
        img.style.opacity = "0";
        image_div.style.border = "5px solid #555";     
        img.src = allImages[i];
        img = add_img_listenner(img);
        image_div.appendChild(img);
        table_line.appendChild(image_div);
        image_table.appendChild(table_line);
    }

    gameboard.appendChild(image_table);
    document.body.appendChild(gameboard);
}

function check_win(){
    return matchesFound.length == imagesPaths.length;
}

function check_match(selected1: HTMLImageElement , selected2: HTMLImageElement){
    return selected1.src == selected2.src;
}

set_timer()
set_images(imagesPaths)