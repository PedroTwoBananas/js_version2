Array.prototype.myFilter = function (callback, index = 0, array = this) {
  const filtered = [];

  for (let i = index; i < array.length; i++) {
    if (callback(this[i])) {
      filtered.push(this[i]);
    }
  }
  return filtered;
};

const data = ["один", "два", "три", "четыре"];

const filteredArr = data.myFilter((item) => item.length === 3, 2, data);

console.log(filteredArr);
