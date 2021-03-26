'use strict';
class Counter {
  constructor() {
    this.counter = 0;
    this.isPaused = false;
    this.seconds = 0;
    this.minuts = 0;
  }
  count() {
    this.counter++;
  }
  togglePause() {
    this.isPaused = this.isPaused ? false : true;
  }
  calcTime() {
    this.minuts = (this.counter / 60) | 0;
    this.seconds = this.counter % 60;
  }
  resetTimer() {
    this.counter = 0;
    this.calcTime();
    writeTime(this);
  }
}
function initlizeButtons() {
  let buttons = [...document.querySelectorAll('.time-button')];
  buttons[0].addEventListener('click', () => counter.togglePause());
  buttons[1].addEventListener('click', () => counter.togglePause());
  buttons[2].addEventListener('click', () => counter.resetTimer());
}

function startTimer() {
  setInterval(function () {
    if (!counter.isPaused) {
      counter.count();
      counter.calcTime();
      writeTime(counter);
    }
  }, 1000);
}
function writeTime(counter) {
  let time = document.querySelectorAll('.shm-time')[0];
  let formatNumber = n => (n > 9 ? '' + n : '0' + n);
  let minuts = formatNumber(counter.minuts);
  let seconds = formatNumber(counter.seconds);
  time.innerHTML = `${minuts}:${seconds}`;
}

let counter = new Counter();

initlizeButtons();
startTimer();
