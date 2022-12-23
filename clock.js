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

    // chaining functions
    // var time = civilianHours(appendAMPM(abstractClockTime(date)))

    // use a compose function, as a higher order function, instead of chaning functions
    var time = compose(abstractClockTime, appendAMPM, civilianHours)(date);
    
    time.hours = prependZero(time.hours);
    time.minutes = prependZero(time.minutes);
    time.seconds = prependZero(time.seconds);

    return `${time.hours}:${time.minutes}:${time.seconds} ${time.ampm}`
}

// an improved version of the compose function
// the form of a higher order function

const compose = (...fns) =>
    (arg) =>
        fns[2](fns[1](fns[0](arg)));


// function compose(...fns) {
//     return function tripleFunctions(arg) {
//         return fns[2](fns[1](fns[0](arg)));    
//     }
// }


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
