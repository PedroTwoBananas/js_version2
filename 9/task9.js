const asyncTimeout = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

asyncTimeout(5000).then(() => console.log(2));
