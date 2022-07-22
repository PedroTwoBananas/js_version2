const shallowEquals = (obj1, obj2) => {
  const firstObjectKeys = Object.getOwnPropertyNames(obj1);
  const secondObjectKeys = Object.getOwnPropertyNames(obj2);

  if (firstObjectKeys.length !== secondObjectKeys.length) {
    return false;
  }

  for (let i = 0; i < firstObjectKeys.length; i++) {
    const key = firstObjectKeys[i];

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(shallowEquals({ a: 1, b: "2" }, { a: 1, b: "2" })); // true
console.log(shallowEquals({ a: 0 }, { a: undefined })); // false
console.log(shallowEquals({ a: {} }, { a: {} })); // false
console.log(shallowEquals({ a: [] }, { a: [] })); // false
console.log(shallowEquals({ a: () => {} }, { a: () => {} })); // false
