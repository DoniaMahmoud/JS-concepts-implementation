let i = 0;
function increment() {
  i++;
}

export default function debounce(func, wait) {
  let timeout = null;
  // not arrow function to preserve this of the caller not lexical scope
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

const debouncedIncrement = debounce(increment, 100);

// Simulating calls at different times
debouncedIncrement(); // t = 0
setTimeout(debouncedIncrement, 50); // t = 50
setTimeout(() => {
  console.log("Final i =", i); // should log 1
}, 2000);
