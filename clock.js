setInterval(logClockTime, 1000);

function logClockTime() {
    var time = getClockTime();

    console.clear();
    console.log(time);
}

function getClockTime() {
    var date = new Date();
    
    var time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM"
    }

    return time;
}