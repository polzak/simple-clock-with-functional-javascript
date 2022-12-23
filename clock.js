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

    if (time.hours > 12) {
        time.ampm = "PM";
        time.hours = time.hours - 12;
    } else if (time.hours > 11) {
        time.ampm = "PM"
    }

    return time;
}