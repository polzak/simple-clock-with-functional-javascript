const clear = () => console.clear();

const log = message => console.log(message);

const oneSec = () => 1000;

const getCurrentTime = () => new Date();

const logClockTime = () => {
    var time = getClockTime();
    clear();
    log(time);
}

const getClockTime = () => {
    var date = getCurrentTime()
    
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

    time.hours = prependZero(time.hours);
    time.minutes = prependZero(time.minutes);
    time.seconds = prependZero(time.seconds);

    return `${time.hours}:${time.minutes}:${time.seconds} ${time.ampm}`
}

const prependZero = n => (n >= 10) ? "" + n : "0" + n;

const startTicking = () => 
    setInterval(logClockTime, oneSec());
    
startTicking();
