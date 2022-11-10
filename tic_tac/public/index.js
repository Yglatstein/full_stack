"use strict";
let buttons = document.getElementsByTagName("button");
let win_p = document.getElementsByTagName("p")[0];
console.log(buttons);
let is_game_over = false;
let current_player = "X";
let count_turns = 0;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', btnClick);
}
function btnClick(e) {
    let el = e.target;
    if (el.textContent != "")
        return;
    el.textContent = current_player;
    el.textContent = current_player;
    let check_win = checkWin();
    if (check_win) {
        win_p.textContent = current_player + " has won!";
        win_p.style.fontSize = "40px";
        //alert(current_player + " has won!")
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].textContent = "";
            current_player = "X";
        }
    }
    if (count_turns == 9) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].textContent = "";
            current_player = "X";
        }
        win_p.textContent = "game is over, no one won!";
        win_p.style.font = "40px";
    }
    else {
        if (current_player == "X")
            current_player = "O";
        else
            current_player = "X";
    }
}
function checkWin() {
    let is_win = false;
    if (buttons[0].textContent == buttons[1].textContent && buttons[1].textContent == buttons[2].textContent && buttons[2].textContent != "")
        is_win = true;
    else if (buttons[3].textContent == buttons[4].textContent && buttons[4].textContent == buttons[5].textContent && buttons[5].textContent != "")
        is_win = true;
    else if (buttons[6].textContent == buttons[7].textContent && buttons[7].textContent == buttons[8].textContent && buttons[8].textContent != "")
        is_win = true;
    else if (buttons[0].textContent == buttons[3].textContent && buttons[3].textContent == buttons[6].textContent && buttons[6].textContent != "")
        is_win = true;
    else if (buttons[1].textContent == buttons[4].textContent && buttons[4].textContent == buttons[7].textContent && buttons[7].textContent != "")
        is_win = true;
    else if (buttons[2].textContent == buttons[5].textContent && buttons[5].textContent == buttons[8].textContent && buttons[8].textContent != "")
        is_win = true;
    else if (buttons[0].textContent == buttons[4].textContent && buttons[4].textContent == buttons[8].textContent && buttons[8].textContent != "")
        is_win = true;
    else if (buttons[2].textContent == buttons[4].textContent && buttons[4].textContent == buttons[6].textContent && buttons[6].textContent != "")
        is_win = true;
    return is_win;
}
