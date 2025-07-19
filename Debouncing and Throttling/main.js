// Debouncing and Throttling in JavaScript
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const countDebounce = document.querySelector(".increment_count_debounce");
const countThrottle = document.querySelector(".increment_count_throttle");

let pressedCount = 0;
let triggerCountDebounce = 0;
let triggerCountThrottle = 0;

const myThrottle = (callback, delay) => {
  let startTime = 0;
  return (...args) => {
    let currentTime = new Date().getTime();
    if (currentTime - startTime < delay) return;
    startTime = currentTime;
    callback(...args);
  };
};

const myDebounce = (callback, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const debouncedCount = myDebounce(() => {
  countDebounce.innerHTML = ++triggerCountDebounce;
}, 1000);

const throttledCount = myThrottle(() => {
  countThrottle.innerHTML = ++triggerCountThrottle;
}, 1000);

btn.addEventListener("click", () => {
  btnPress.innerHTML = pressedCount++;
  debouncedCount();
  throttledCount();
});
