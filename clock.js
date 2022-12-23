const clear = () => console.clear();

const log = message => console.log(message);

const oneSec = () => 1000;

const getCurrentTime = () => new Date();

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

const doubleDigits = handler => clockTime => (
    {
    ...clockTime,
    hours: handler(clockTime.hours),
    minutes: handler(clockTime.minutes),
    seconds: handler(clockTime.seconds)
    }
)

const formatter = clockTime => 
    `${clockTime.hours}:${clockTime.minutes}:${clockTime.seconds} ${clockTime.ampm}`

// you can display the time with any other method than console.log, with this higher order function.
const display = displayHandler => formattedTime => displayHandler(formattedTime);


const compose = (...fns) => (arg) =>
        fns.reduce((acc, f) => f(acc), arg);

const startTicking = () => 
    setInterval(
        compose(
            clear,
            getCurrentTime, 
            abstractClockTime, 
            appendAMPM,
            civilianHours,
            doubleDigits(prependZero),
            formatter,
            display(log)), 
        oneSec());
        

startTicking();
