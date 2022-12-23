setInterval(logClockTime, 1000);

function logClockTime() {
    var time = getClockTime();

    console.clear();
    console.log(time);
}

function getClockTime() {
    var date = new Date();
    var time = ""

    return date;
}