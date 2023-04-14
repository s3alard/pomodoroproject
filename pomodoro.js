const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const pomodoroMinusButton = document.getElementById("pomodoro-minus-button");
const pomodoroPlusButton = document.getElementById("pomodoro-plus-button");
const shortBreakMinusButton = document.getElementById("short-break-minus-button");
const shortBreakPlusButton = document.getElementById("short-break-plus-button");
const longBreakMinusButton = document.getElementById("long-break-minus-button");
const longBreakPlusButton = document.getElementById("long-break-plus-button");

var mainDisplay = document.getElementById("main-display");
var pomodoroDisplay = document.getElementById("pomodoro-display");
var shortBreakDisplay = document.getElementById("short-break-display");
var longBreakDisplay  = document.getElementById("long-break-display");

var pomodoroTime = 1500;
var shortBreakTime = 300;
var longBreakTime = 1500;

pomodoroDisplay.textContent = pomodoroTime/60 + ":00";
shortBreakDisplay.textContent = shortBreakTime/60 + ":00";
longBreakDisplay.textContent = longBreakTime/60 + ":00";

function MinuteFormatter(x){
    if(x%3600/60<10){
        return "0"+x%3600/60;
    }
    else{
        return x%3600/60;
    }
};

resetButton.addEventListener("click",function(){
    pomodoroTime=1500;
    pomodoroDisplay.textContent = pomodoroTime/60 + ":00";
    shortBreakTime=300;
    shortBreakDisplay.textContent = shortBreakTime/60 + ":00";
    longBreakTime=1500;
    longBreakDisplay.textContent = longBreakTime/60 + ":00";
});

pomodoroPlusButton.addEventListener("click",function() {
    pomodoroTime +=60;
    if(pomodoroTime>3600){
        pomodoroDisplay.textContent = Math.floor(pomodoroTime/3600)+":"+ MinuteFormatter(pomodoroTime) + ":00";
        }
        else{
    pomodoroDisplay.textContent = pomodoroTime/60 + ":00"};
});

pomodoroMinusButton.addEventListener("click",function() {
    pomodoroTime -=60;
    if(pomodoroTime<0){
        pomodoroTime=0;
    };
    if(pomodoroTime>3600){
        pomodoroDisplay.textContent = Math.floor(pomodoroTime/3600)+":"+ MinuteFormatter(pomodoroTime) + ":00";
        }
        else{
    pomodoroDisplay.textContent = pomodoroTime/60 + ":00"};
});

shortBreakPlusButton.addEventListener("click",function() {
    shortBreakTime +=60;
    if(shortBreakTime>3600){
        shortBreakDisplay.textContent = Math.floor(shortBreakTime/3600)+":"+ MinuteFormatter(shortBreakTime) + ":00";
        }
        else{
    shortBreakDisplay.textContent = shortBreakTime/60 + ":00"};
});

shortBreakMinusButton.addEventListener("click",function() {
    shortBreakTime -=60;
    if(shortBreakTime<0){
        shortBreakTime=0;
    };
    if(shortBreakTime>3600){
        shortBreakDisplay.textContent = Math.floor(shortBreakTime/3600)+":"+ MinuteFormatter(shortBreakTime) + ":00";
        }
        else{
            shortBreakDisplay.textContent = shortBreakTime/60 + ":00"};
});

longBreakPlusButton.addEventListener("click",function() {
    longBreakTime +=60;
    if(longBreakTime>3600){
        longBreakDisplay.textContent = Math.floor(longBreakTime/3600)+":"+ MinuteFormatter(longBreakTime) + ":00";
        }
        else{
            longBreakDisplay.textContent = longBreakTime/60 + ":00"};
});


longBreakMinusButton.addEventListener("click",function() {
    longBreakTime -=60;
    if(longBreakTime<0){
        longBreakTime=0;
        };
        if(longBreakTime>3600){
            longBreakDisplay.textContent = Math.floor(longBreakTime/3600)+":"+ MinuteFormatter(longBreakTime) + ":00";
            }
            else{
                longBreakDisplay.textContent = longBreakTime/60 + ":00"};
});

