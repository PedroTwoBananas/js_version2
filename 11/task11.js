const asyncTimeout = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const promiseStack = async function (arrayFunction, inOrder) {
  for (let index = 0; index < arrayFunction.length; index += inOrder) {
    const elems = [];
    for (let elemIndex = 0; elemIndex < inOrder; elemIndex++) {
      if (arrayFunction[elemIndex + index]) {
        elems.push(arrayFunction[elemIndex + index]);
      }
    }
    await Promise.all(elems.map((fn) => fn()));
  }
};

promiseStack(
  [
    () => asyncTimeout(4000).then(() => console.log(1)),
    () => asyncTimeout(4000).then(() => console.log(1)),
    () => asyncTimeout(2000).then(() => console.log(2)),
    () => asyncTimeout(2000).then(() => console.log(2)),
    () => asyncTimeout(1000).then(() => console.log(3)),
    () => asyncTimeout(1000).then(() => console.log(3)),
    () => asyncTimeout(3000).then(() => console.log(4)),
  ],
  2
);
