// fetching all html elements into js
let stopwatch_second = document.querySelector(".stopwatch-second");
let stopwatch_milliSecond = document.querySelector(".stopwatch-milliSecond");
let start_button = document.querySelector(".buttons>button:nth-child(1)");
let reset_button = document.querySelector(".buttons>button:nth-child(2)");

// click event for start and reset button
start_button.addEventListener("click", handleStopwatchStart);
reset_button.addEventListener("click", handleStopwatchReset);

// interval id
let intervalId = null;

// Initializing seconds and milliseconds
let seconds = 0;
let milliSeconds = 0;

// flag is used to check if the condition is true then change the button value from start to stop
let flag = false;

// flag is used to check if the condition is true then change the button value from stop to start
let temp = false;

// function to handle stopwatch start button
function handleStopwatchStart() {
  flag = true;

  if (flag === true) {
    start_button.textContent = "STOP";
  }

  start_button.removeEventListener("click", handleStopwatchStart);

  // on single click both the event is triggered at the same moment
  start_button.addEventListener("click", handleStopwatchStop);
  start_button.addEventListener("click",function(){
    clearInterval(intervalId);
    temp = true;

    if(temp === true){
        start_button.textContent = "START";
    }
    start_button.addEventListener("click",handleStopwatchStart);
  })

  intervalId = setInterval(function () {
    milliSeconds++;
    if (milliSeconds === 99) {
      seconds++;
      milliSeconds = 0;
    }
    stopwatch_milliSecond.textContent = milliSeconds;
    stopwatch_second.textContent = seconds;
  }, 10);
}

// function to handle stopwatch stop button
function handleStopwatchStop(){
    clearInterval(intervalId);
}

// function to handle stopwatch reset button
function handleStopwatchReset(){
    clearInterval(intervalId);
    milliSeconds = 0;
    seconds = 0;
    start_button.removeEventListener("click",handleStopwatchStop);
    start_button.addEventListener("click", handleStopwatchStart);

    stopwatch_milliSecond.textContent = milliSeconds;
    stopwatch_second.textContent = seconds;

}