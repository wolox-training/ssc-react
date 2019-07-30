// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  return new Promise((resolve, reject) => {
    if (time < 600) {
      setTimeout(() => resolve(time), time);
    } else {
      const reason = new Error('This time is too much !');
      reject(reason);
    }
  });
}

export function asyncDelay() {

}
