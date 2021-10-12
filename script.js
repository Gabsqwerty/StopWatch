const timer = document.getElementById("timer");
const startIt = document.getElementById("start");
const stopIt = document.getElementById("stop");
const reset = document.getElementById("reset");
let number = 0;
let interval;
let startCounting = false;

function numberUp() {
  timer.innerHTML = number;
  number++;
}

function start() {
  if (startCounting != false && number === 0) {
    interval = setInterval(numberUp, 10);
  } else {
    return;
  }
}


startIt.addEventListener("click", () => {
  startCounting = true;
  start();
});

stopIt.addEventListener("click", () => clearInterval(interval));

reset.addEventListener("click", () => {
  number = 0;
  timer.innerHTML = number;
});

