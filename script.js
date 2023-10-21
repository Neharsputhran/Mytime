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

function displayTimer(){
    milliseconds +=10;
    if(milliseconds == 1000){
        milliseconds=0;
        seconds++;
        if(seconds==60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
            }
        }
    }
    let h= hours<10 ? "0" +hours:hours;
    let m= minutes<10 ? "0" +minutes:minutes;
    let s= seconds<10 ? "0" +seconds:seconds;
    let ms= milliseconds < 10 ? "00" +milliseconds:milliseconds<100 ? "0"+milliseconds:milliseconds;

    timeRef.innerHTML=`${h} : ${m} : ${s} : ${ms}`;
}
// till here
// script for digital clock




function displayclock(){
    var d=new Date();
    var hour=d.getHours();
    var minute=d.getMinutes();
    var sec=d.getSeconds();
    var amOrpm="AM";
    if(hour<10)
    {
        hour="0"+hour;
    }
    if(minute<10)
    {
        minute="0"+minute;
    }
    if(sec<10)
    {
        sec="0"+sec;
    }
    if(hour>=12)
    {
       amOrpm="PM";
    }

    if(hour>12)
    {
        hour=hour-12;
    }
    document.getElementById("clock1").innerHTML=hour+" : "+minute+" : "+sec+" "+amOrpm;
}
setInterval(displayclock, 1000);    
    // document.getElementById("clocktype").addEventListener("click",() => {

    //     var d=new Date();
    //     var hour=d.getHours();
    //     var minute=d.getMinutes();
    //     var sec=d.getSeconds();
    //     var amOrpm="AM";
    //     if(hour>=12)
    //     {
    //               amOrpm="PM";
    //     }
    //     var current_id=document.getElementById("clocktype").value;
    //     if(current_id=="12 hours") 
    //     {
    //         document.getElementById("clocktype").value="24 hours";
    //            if(hour>12)
    //            {
    //              hour=hour-12;
    //            } 
    //            document.getElementById("clock1").innerHTML=hour+" : "+minute+" : "+sec+" "+amOrpm;   
    //         //    return hour,sec,minute;
               
    //     }           
    //     else
    //     {
    //         document.getElementById("clocktype").value="12 hours";
    //         // hour=hour+12;
    //         document.getElementById("clock1").innerHTML=hour+" : "+minute+" : "+sec+" "+amOrpm;
            
    //     }
        
        
    // })
  


// // timer
// import Timer from "./timer.js";

// new Timer(
//     document.querySelector(".timercontainer")
// );




