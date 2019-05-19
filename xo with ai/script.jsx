document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
    }
    }
//=============common variable=========/
var turn = 0;
var text = [];
var indexOfEmpty = [];
var fackText = [];
var cells = document.getElementsByClassName("cell");
var winPlayer;
var randomplace=[];
cells = Array.from(cells);
/*===========common function===========*/
function isWin(text) {
    console.log("hello from iswin");
    // console.log("hello from iswin", text);
    if (text[0] == text[4] && text[0] == text[8] && text[0] !== ""){
       
        return text[0];
    }
    else if (text[2] == text[4] && text[2] == text[6] && text[2] !== "")
    {
        return text[2];
    }
    else if (text[0] == text[3] && text[0] == text[6] && text[0] !== "")
    {
        return text[0];
    }
    else if (text[1] == text[4] && text[1] == text[7] && text[1] !== "")
    {
        return text[1];
    }
    else if (text[2] == text[5] && text[2] == text[8] && text[2] !== "")
    {
        return text[2];
    }
    else if (text[0] == text[1] && text[0] == text[2] && text[0] !== "")
    {
        return text[0];
    }
    else if (text[3] == text[4] && text[3] == text[5] && text[3] !== "")
    {
        return text[3];
    }
    else if (text[6] == text[7] && text[6] == text[8] && text[6] !== "")
    {
        return text[6];
    }
    else
        return -1;
}
function allFull(){
 
}
function changeColor() {
    getCellText();
    if (text[0] == text[4] && text[0] == text[8] && text[0] !== ""){
        cells[0].style.backgroundColor="red";
        cells[4].style.backgroundColor="red";
        cells[8].style.backgroundColor="red";
    }
    else if (text[2] == text[4] && text[2] == text[6] && text[2] !== "")
    {
        cells[2].style.backgroundColor="red";
        cells[4].style.backgroundColor="red";
        cells[6].style.backgroundColor="red";
    }
    else if (text[0] == text[3] && text[0] == text[6] && text[0] !== "")
    {
        cells[0].style.backgroundColor="red";
        cells[3].style.backgroundColor="red";
        cells[6].style.backgroundColor="red";
    }
    else if (text[1] == text[4] && text[1] == text[7] && text[1] !== "")
    {
        cells[1].style.backgroundColor="red";
        cells[4].style.backgroundColor="red";
        cells[7].style.backgroundColor="red";
    }
    else if (text[2] == text[5] && text[2] == text[8] && text[2] !== "")
    {
        cells[2].style.backgroundColor="red";
        cells[5].style.backgroundColor="red";
        cells[8].style.backgroundColor="red";
    }
    else if (text[0] == text[1] && text[0] == text[2] && text[0] !== "")
    {
        cells[0].style.backgroundColor="red";
        cells[1].style.backgroundColor="red";
        cells[2].style.backgroundColor="red";
    }
    else if (text[3] == text[4] && text[3] == text[5] && text[3] !== "")
    {
        cells[3].style.backgroundColor="red";
        cells[4].style.backgroundColor="red";
        cells[5].style.backgroundColor="red";
    }
    else if (text[6] == text[7] && text[6] == text[8] && text[6] !== "")
    {
        cells[6].style.backgroundColor="red";
        cells[7].style.backgroundColor="red";
        cells[8].style.backgroundColor="red";
    }
}
function win() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.visibility = "hidden";
        cells[i].childNodes[0].style.visibility = "hidden";
    }
    document.getElementById("winner").appendChild(document.createTextNode("player "+winPlayer+" win "));
    document.getElementById("single").style.display="none";
    document.getElementById("two").style.display="none";
}
function getCellText() {
    text = [];
    /*take a copy of text of main array*/
    console.log("hello from get text");
    text = cells.map(function (elem) {
        return elem.childNodes[0].textContent;
    });
    console.log(text);
}
function Nowin(){
    findEmptyarea();
    if(indexOfEmpty.length==0){
        document.getElementById("winner").appendChild(document.createTextNode("NO player win "));
    }
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.visibility = "hidden";
        cells[i].childNodes[0].style.visibility = "hidden";
    }
}

/*==============two player==================*/
/*variables*/
function twoPlayers() {
    document.getElementById("single").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("new").style.display="unset";
    document.getElementById("single").disabled = true;
    document.getElementById("two").disabled = true;
    cells.map(function (elem) {
        elem.addEventListener("click", function () {
            console.log("hello from clicked");
            //if your clicked twice 
            if (elem.childNodes[0].textContent == "")
                writeOnScreen(elem);
            getCellText();
            winPlayer = isWin(text);
            if (winPlayer !== -1) {
                changeColor();
                setTimeout(win, 1000);
            }
        })
    });
}
function writeOnScreen(elem) {
    console.log("hello from writeOnScreen");
    if (turn % 2 == 0) {
        console.log("turn is ", turn);
        turn++;
        elem.childNodes[0].append("x");
        elem.style.color="crimson";
    }
    else if (turn % 2 == 1) {
        console.log("turn is ", turn);
        turn++;
        elem.childNodes[0].append("o");
    }
}

/*=============aiMode===============*/
function restart() {
    location.reload();
}
function aiMode() {
    document.getElementById("single").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("new").style.display="unset";
    cells.map(function (elem) {
        elem.addEventListener("click", function () {
            console.log("===========================================================");
            console.log("hello from clicked");
            //if your clicked twice 
            if (elem.childNodes[0].textContent == "") {
                turn++;
                console.log("turn=", turn);
                elem.childNodes[0].append("x");
                elem.style.color="crimson";
                getCellText();
                winPlayer = isWin(text);
                if (winPlayer !== -1) {
                    changeColor();
                    setTimeout(win, 1000);
                }
                else {
                    if(turn==5){
                        Nowin();
                    }
                    else  if (turn > 1) {
                        getCellText();
                        choosePlace();
                    }
                    else {
                        getCellText();
                        playInbestPlace();
                    }
                    getCellText();
                    winPlayer = isWin(text);
                    if (winPlayer !== -1) {
                        changeColor();
                        setTimeout(win, 1000);
                    }
                }

            }

        })
    });
}
var put = 0;
function choosePlace() {
    put = 0;
    console.log("hello from choosePlace ")
    findEmptyarea();
    fackText = text.map(function (elem, i) {
        return elem;
    });
    console.log("fackText:", fackText);
    for (var i = 0; i < randomplace.length; i++) {
        console.log("o time")
        var elem = randomplace[i];
        fackText[elem] = "o";
        console.log("fackText add o:", fackText, "win", isWin(fackText))
        if (isWin(fackText) === -1) {
            fackText[elem] = "";
            console.log("fackText remove o:", fackText);
        }
        else {
            cells[elem].childNodes[0].append("o");
            put = 1;
            break;
        }
    }
    if (put == 0) {
        for (var i = 0; i < randomplace.length; i++) {
            var elem = randomplace[i];
            fackText[elem] = "x";
            console.log("fackText add x:", fackText, "win", isWin(fackText))
            if (isWin(fackText) === -1) {
                fackText[elem] = "";
                console.log("fackText remove x:", fackText);
            }
            else {
                cells[elem].childNodes[0].append("o");
                put = 1;
                break;
            }
        }

    }
    if (put == 0) {
        playInbestPlace();
    }
}
function playInbestPlace() {
    console.log("hello from playInbestPlace ");
    findEmptyarea();
    for (var i = 0; i < randomplace.length; i++) {
        var elem = randomplace[i];
        if (elem % 2 === 0) {
            cells[elem].childNodes[0].append("o");
            put = 1;
            break;
        }
    }
    if (put == 0)
        cells[randomplace[0]].childNodes[0].append("o");
}
function findEmptyarea() {
    indexOfEmpty = [];
    console.log("hello from findEmptyarea ")
    text.filter(function (elem, i) {
        if (elem === "")
            indexOfEmpty.push(i);
    });
    console.log("hello from findEmptyarea ", indexOfEmpty)
 randomNmber();
}
function randomNmber() {
    randomplace=[];
    console.log("hello from randomNmber ")
    for (var i = 0; i < indexOfEmpty.length; i++) {
        var rand = Math.floor(Math.random() * indexOfEmpty.length);
        randomplace.push(indexOfEmpty[rand]);
        indexOfEmpty.splice(rand, 1);
        i--;//lenght of array --1 so i will start from index 0 again so make i=-1 i++ then i=0(array upadted after remove element so you need to start from 0 agin)
    }
    console.log("hello from randomNmber ", randomplace)
}