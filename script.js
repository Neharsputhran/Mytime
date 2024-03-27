//home color
// $("a").click(function(){
//     $("a").css("background-color", "black");
//     $(this).css("background-color", "red")
// });



// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('nav a').forEach(link => {
//     if(link.href.includes(`${activePage}`)){
//         link.classList.add('active');
//     }
// }) 

// script for stopwatch
let [milliseconds, seconds, minutes, hours]=[0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int= null;

document.getElementById("start-timer").addEventListener("click",() => {
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("stop-timer").addEventListener("click",() => {
        clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click",() => {
        clearInterval(int);
        [milliseconds, seconds, minutes, hours]=[0, 0, 0, 0];
        timeRef.innerHTML = "00 : 00 : 00 : 000 ";
});


// Clock
var is12HourFormat = false;

function displayClock() {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var sec = d.getSeconds();
    var amOrpm = "AM";

    if (is12HourFormat) {
        if (hour > 12) {
            hour -= 12;
            amOrpm = "PM";
        } else if (hour === 0) {
            hour = 12;
            amOrpm = "AM";
        } else if (hour === 12) {
            amOrpm = "PM";
        } else {
            amOrpm = "AM";
        }
    }
    else if (hour > 12) {
       
        amOrpm = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    sec = (sec < 10) ? "0" + sec : sec;

    document.getElementById("clock1").innerHTML = hour + " : " + minute + " : " + sec + " " + amOrpm;
}

function toggleClockType() {
    is12HourFormat = !is12HourFormat;
    document.getElementById("clocktype").value = is12HourFormat ? "24 hours" : "12 hours";
    displayClock(); // Update the clock display after changing the clock type
}

setInterval(displayClock, 1000);
document.getElementById("clocktype").addEventListener("click", toggleClockType);

// // timer
// import Timer from "./timer.js";

// new Timer(
//     document.querySelector(".timercontainer")
// );




