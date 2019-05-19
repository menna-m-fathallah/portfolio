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

    
var timer;
var timeNow = {};
(function getRealTime() {
    var date = new Date();
    timeNow.hour = date.getHours();
    timeNow.min = date.getMinutes();
    timeNow.sec = date.getSeconds();
    console.log(timeNow);
    displayrealTime(timeNow.sec, timeNow.min, timeNow.hour);

})();
(function chooseTheme() {
    if (timeNow.hour < 19) {
        document.body.style.backgroundImage = "url(https://res.cloudinary.com/dvwnmwk2z/image/upload/v1551254414/bg2.jpg)";
        document.getElementById("clock").style.backgroundImage="url(https://res.cloudinary.com/dvwnmwk2z/image/upload/v1551254414/bg2.jpg)";
        document.getElementById("clock").style.border=" 0.5vw solid #fff";
        console.log(document.querySelectorAll(".dash,.ar-sec").style)
        Array.from(document.querySelectorAll(".dash,.ar-sec,.ar-min,.ar-hr,.dot")).map(function(elem){
         elem.style.backgroundColor="white";
        })
    }
})();

function displayrealTime(sec, min, hour) {
    console.log(sec, min, hour);
    document.getElementById("ar-sec").style.transform = 'rotate(' + sec * 6 + 'deg)';
    document.getElementById("ar-min").style.transform = 'rotate(' + min * 6 + 'deg)';
    if(hour>12){
     hour=hour-12;
    }
    if (min > 35) {
        var tic = (min - 35);
            console.log(tic);
            document.getElementById("ar-hr").style.transform = 'rotate(' + hour* 30 + tic + 'deg)';
    }
    else{
        document.getElementById("ar-hr").style.transform = 'rotate(' + (hour * 30 ) + 'deg)';
    }
    displayAnmation(sec, min, hour);
}
function displayAnmation(sec, min, hour) {
    var tic = 0;
    setInterval(function () {
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
        if (min == 60) {
            min = 0;
            hour++;
        }
        document.getElementById("ar-sec").style.transform = 'rotate(' + sec * 6 + 'deg)';
        document.getElementById("ar-min").style.transform = 'rotate(' + min * 6 + 'deg)';
        if (min > 35) {
            tic = (min - 35);
            if (tic % 5 == 0) {
            //    console.log(tic);
                document.getElementById("ar-hr").style.transform = 'rotate(' + (hour* 30 + tic) + 'deg)';
            }

        }
    }, 1000);
}
