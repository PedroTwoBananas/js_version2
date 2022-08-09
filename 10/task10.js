const asyncTimeout = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const promiseStack = (promises) => {
  promises.forEach((promise) => {
    return promise();
  });
};

promiseStack([
  () => asyncTimeout(4000).then(() => console.log(1)),
  () => asyncTimeout(2000).then(() => console.log(2)),
  () => asyncTimeout(1000).then(() => console.log(3)),
  () => asyncTimeout(3000).then(() => console.log(4)),
]);

// С редактированием текущей задачи

// const asyncTimeout = (timeout) => {
//   return new Promise((resolve) => setTimeout(resolve, timeout));
// };
//
// const promiseStack = (promises) => {
//   return Promise.all(promises).then((resolve) => resolve);
// };
//
// promiseStack([
//   asyncTimeout(4000).then(() => console.log(1)),
//   asyncTimeout(2000).then(() => console.log(2)),
//   asyncTimeout(1000).then(() => console.log(3)),
//   asyncTimeout(3000).then(() => console.log(4)),
// ]);
