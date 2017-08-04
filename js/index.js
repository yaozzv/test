window.onload=function () {
    document.getElementById("close").onclick=function () {
        document.getElementById("topBanner").style.display="none";
    }
    var nav_col_ul = document.getElementById("nav_co1_ul");
    var nav_li_nav = document.getElementById("nav_li_nav");
    nav_col_ul.onmouseover=function () {
        nav_li_nav.style.display="block";
    }
    nav_col_ul.onmouseout=function () {
        nav_li_nav.style.display="none";
    }
    nav_li_nav.onmouseover=function () {
        nav_li_nav.style.display="block";
    }
    nav_li_nav.onmouseout=function () {
        nav_li_nav.style.display="none";
    }


}
//倒计时
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var hourNum = Number(hour.innerText);
var minuteNum = Number(minute.innerText);
var secondNum = Number(second.innerText);
setInterval("startTime()", 1000);
function startTime() {
    secondNum --;
    if(secondNum < 0 && (minuteNum != 0 || hourNum != 0)) {
        secondNum = 59;
        minuteNum--;
        if(minuteNum < 0 && hourNum != 0) {
            minuteNum = 59;
            hourNum--
        }
    }
    if(secondNum < 10) {
        second.innerText = "0" + secondNum;
    } else {
        second.innerText=secondNum;
    }
    if(hourNum < 10) {
        hour.innerText = "0" + hourNum;
    } else {
        hour.innerText=hourNum;
    }
    if(minuteNum < 10) {
        minute.innerText = "0" + minuteNum;
    } else {
        minute.innerText=minuteNum;
    }
    if(secondNum == 0 && minuteNum == 0 && hourNum == 0) {
        secondNum = 59;
        minuteNum = 59;
        hourNum = 2;
    }
}