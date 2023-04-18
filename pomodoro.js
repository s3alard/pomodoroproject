const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const pomodoroMinusButton = document.getElementById("pomodoro-minus-button");
const pomodoroPlusButton = document.getElementById("pomodoro-plus-button");
const shortBreakMinusButton = document.getElementById("short-break-minus-button");
const shortBreakPlusButton = document.getElementById("short-break-plus-button");
const longBreakMinusButton = document.getElementById("long-break-minus-button");
const longBreakPlusButton = document.getElementById("long-break-plus-button");

const currentPhase = document.getElementById("current-phase");
const mainDisplay = document.getElementById("main-display");
const pomodoroDisplay = document.getElementById("pomodoro-display");
const shortBreakDisplay = document.getElementById("short-break-display");
const longBreakDisplay  = document.getElementById("long-break-display");

var timeInterval = 0;
var pomodoroTime = 1500;
var pomodoroTimerTime = pomodoroTime;
var shortBreakTime = 300;
var shortBreakTimerTime = shortBreakTime;
var longBreakTime = 1500;
var longBreakTimerTime = longBreakTime;

var toggleStart=0;
var canEdit = 0;
var h = 0;
var z = 0;
var longStart = 0;
var iteration = 1;
startButton.textContent = "start";
mainDisplay.textContent = pomodoroTime/60 + ":00";
pomodoroDisplay.textContent = pomodoroTime/60 + ":00";
shortBreakDisplay.textContent = shortBreakTime/60 + ":00";
longBreakDisplay.textContent = longBreakTime/60 + ":00";

function MinuteFormatter(h){
    if(h%3600/60<10){
        return "0"+h%3600/60;
    }
    else{
        return h%3600/60;
    }
};

function DisplayFormatter(z){
    if(z%3600/60<10){
        if (z%60>9){
        return "0"+Math.floor(z%3600/60) + ":" + z%60;
        } else {
        return "0"+Math.floor(z%3600/60) + ":0" + z%60;
        }
    }
    else{
        if (z%60>9){
        return +Math.floor(z%3600/60) + ":" + z%60;
        } else {
        return +Math.floor(z%3600/60) + ":0" + z%60;
        }
    }
};

startButton.addEventListener("click",function(){ 
    if(toggleStart==0){
        toggleStart=1;
        startButton.textContent = "pause";
        timeInterval= setInterval(function () {
            if(longStart%4 == 0 && longStart != 0 &&longBreakTimerTime>0){
                currentPhase.textContent = "long break" + Math.floor(iteration/4);
                mainDisplay.textContent = DisplayFormatter(longBreakTimerTime);
                longBreakTimerTime=longBreakTimerTime-1;
            }else
            if (pomodoroTimerTime > 0){
                currentPhase.textContent = "pomodoro" + iteration;
                mainDisplay.textContent = DisplayFormatter(pomodoroTimerTime);
                pomodoroTimerTime=pomodoroTimerTime-1;

            }else
            if(shortBreakTimerTime > 0 ){
                currentPhase.textContent= "short break" + iteration;
                mainDisplay.textContent = DisplayFormatter(shortBreakTimerTime);
                shortBreakTimerTime=shortBreakTimerTime-1;
            }
            else{
                pomodoroTimerTime=pomodoroTime;
                shortBreakTimerTime=shortBreakTime;
                longBreakTimerTime = longBreakTime;
                iteration=iteration+1;
                longStart=longStart+1;
            };
        }, 1000);
    }
    else if(toggleStart==1){
        toggleStart=0;
        clearInterval(timeInterval);
        startButton.textContent = "start";

    }
});

resetButton.addEventListener("click",function(){
    clearInterval(timeInterval);
    canEdit=0;
    toggleStart=0;
    longStart = 0;
    iteration = 1;
    startButton.textContent = "start";
    currentPhase.textContent = "pomodoro" + iteration;
    pomodoroTime=1500;
    mainDisplay.textContent = pomodoroTime/60 + ":00";
    pomodoroDisplay.textContent = pomodoroTime/60 + ":00";
    shortBreakTime=300;
    shortBreakDisplay.textContent = shortBreakTime/60 + ":00";
    longBreakTime=1500;
    longBreakDisplay.textContent = longBreakTime/60 + ":00";
    pomodoroTimerTime = pomodoroTime;
    shortBreakTimerTime=shortBreakTime;
    longBreakTimerTime=longBreakTime;
});

pomodoroPlusButton.addEventListener("click",function() {
    if(canEdit==0){
        pomodoroTime +=60;
        pomodoroTimerTime = pomodoroTime;
        if(pomodoroTime>3600){
            pomodoroDisplay.textContent = Math.floor(pomodoroTime/3600)+":"+ MinuteFormatter(pomodoroTime) + ":00";
            }
            else{
        pomodoroDisplay.textContent = pomodoroTime/60 + ":00"};
    };
});

pomodoroMinusButton.addEventListener("click",function() {
    if(canEdit==0){
        pomodoroTime -=60;
        pomodoroTimerTime = pomodoroTime;
        if(pomodoroTime<0){
            pomodoroTime=0;
            pomodoroTimerTime = pomodoroTime;
        };
        if(pomodoroTime>3600){
            pomodoroDisplay.textContent = Math.floor(pomodoroTime/3600)+":"+ MinuteFormatter(pomodoroTime) + ":00";
            }
            else{
        pomodoroDisplay.textContent = pomodoroTime/60 + ":00"};
    };
});

shortBreakPlusButton.addEventListener("click",function() {
    if(canEdit==0){
        shortBreakTime +=60;
        shortBreakTimerTime=shortBreakTime;
        if(shortBreakTime>3600){
            shortBreakDisplay.textContent = Math.floor(shortBreakTime/3600)+":"+ MinuteFormatter(shortBreakTime) + ":00";
            }
            else{
        shortBreakDisplay.textContent = shortBreakTime/60 + ":00"};
    };
});

shortBreakMinusButton.addEventListener("click",function() {
    if(canEdit==0){
        shortBreakTime -=60;
        shortBreakTimerTime=shortBreakTime;
        if(shortBreakTime<0){
            shortBreakTime=0;
            shortBreakTimerTime=shortBreakTime;
        };
        if(shortBreakTime>3600){
            shortBreakDisplay.textContent = Math.floor(shortBreakTime/3600)+":"+ MinuteFormatter(shortBreakTime) + ":00";
            }
            else{
                shortBreakDisplay.textContent = shortBreakTime/60 + ":00"};
    };
});

longBreakPlusButton.addEventListener("click",function() {
     if(canEdit==0){
        longBreakTime +=60;
        longBreakTimerTime=longBreakTime;
        if(longBreakTime>3600){
            longBreakDisplay.textContent = Math.floor(longBreakTime/3600)+":"+ MinuteFormatter(longBreakTime) + ":00";
            }
            else{
                longBreakDisplay.textContent = longBreakTime/60 + ":00"};
        };
});


longBreakMinusButton.addEventListener("click",function() {
    if(canEdit==0){
        longBreakTime -=60;
        longBreakTimerTime=longBreakTime;
        if(longBreakTime<0){
            longBreakTime=0;
            longBreakTimerTime=longBreakTime;
            };
            if(longBreakTime>3600){
                longBreakDisplay.textContent = Math.floor(longBreakTime/3600)+":"+ MinuteFormatter(longBreakTime) + ":00";
                }
                else{
                    longBreakDisplay.textContent = longBreakTime/60 + ":00"};
    };
});