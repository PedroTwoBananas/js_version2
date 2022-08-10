const asyncTimeout = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const promiseStack = (promises) => {
  promises.reduce((acc, fn) => acc.then(fn), Promise.resolve());
};

promiseStack([
  () => asyncTimeout(4000).then(() => console.log(1)),
  () => asyncTimeout(2000).then(() => console.log(2)),
  () => asyncTimeout(1000).then(() => console.log(3)),
  () => asyncTimeout(3000).then(() => console.log(4)),
]);
