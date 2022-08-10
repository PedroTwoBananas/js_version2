// { width: 100, height: 50 }

const arrToObj = (arr) => {
  const total = {};
  for (let i = 0; i < arr.length; i++) {
    total[arr[i].name] = arr[i].value;
  }
  return total;
};

const objToArr = (obj) => {
  const total = [];
  for (let key in obj) {
    total.push({ name: key, value: obj[key] });
  }
  return total;
};

const arr = [
  { name: "width", value: 100 },
  { name: "height", value: 50 },
];

const obj = { width: 100, height: 50 };

console.log(arrToObj(arr));
console.log(objToArr(arrToObj(arr)));
