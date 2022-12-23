const clear = () => console.clear();

const log = message => console.log(message);

const oneSec = () => 1000;

const getCurrentTime = () => new Date();

const logClockTime = () => {
    var time = getClockTime();
    // clear();
    log(time);
}

const getClockTime = () => {
    var date = getCurrentTime();    
    var time = abstractClockTime(date);
    console.log(time)

    time = appendAMPM(time);
    console.log(time)

    time = civilianHours(time);
    console.log(time)

    time.hours = prependZero(time.hours);
    time.minutes = prependZero(time.minutes);
    time.seconds = prependZero(time.seconds);

    return `${time.hours}:${time.minutes}:${time.seconds} ${time.ampm}`
}

const abstractClockTime = date => (
    {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
)

const appendAMPM = clockTime => (
    {
        ...clockTime,
        ampm: (clockTime.hours <= 12) ? "AM" : "PM"
    }
)

const civilianHours = clockTime => (
    {
        ...clockTime,
        hours: (clockTime.hours <= 12) ? clockTime.hours : clockTime.hours - 12
    }
)

const prependZero = n => (n >= 10) ? "" + n : "0" + n;

const startTicking = () => 
    setInterval(logClockTime, oneSec());
    
startTicking();
