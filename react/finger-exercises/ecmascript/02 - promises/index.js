// Hint: use setTimeout, create a new Promise and measure time with Date.now()

export function delay(time) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    if (time < 600) {
      setTimeout(() => resolve(Date.now() - start), time);
    } else {
      const reason = new Error('This time is too much !');
      reject(reason);
    }
  });
}

export function asyncDelay(time) {
  return delay(time);
}
