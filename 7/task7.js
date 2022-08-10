class MySet {
  constructor(array) {
    if (Array.isArray(array)) {
      for (let i = 0; i < array.length; i++) {
        this[i] = array[i];
      }
      this.size = Object.getOwnPropertyNames(this).length;
    } else {
      alert("Данный класс работает только с массивами");
    }
  }

  has(prop) {
    return this.hasOwnProperty(prop);
  }

  add(prop) {
    this[prop] = prop;
    this.size = Object.getOwnPropertyNames(this).filter(
      (key) => key !== "size"
    ).length;
  }

  delete(prop) {
    delete this[prop];
    this.size = Object.getOwnPropertyNames(this).filter(
      (key) => key !== "size"
    ).length;
  }

  clear() {
    let keys = Object.getOwnPropertyNames(this);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] !== "size") {
        delete this[keys[i]];
      }
    }
    this.size = Object.getOwnPropertyNames(this).filter(
      (key) => key !== "size"
    ).length;
  }
}

const mySet = new MySet([0, 1, 2, 3]);
const wrongSet = new MySet("ошибка");

console.log(wrongSet);
console.log(mySet); // { 0, 1, 2, 3, size: 4 }
console.log(mySet.size); // 4
console.log(mySet.has(6)); // false

mySet.add(4);
console.log(mySet); // { 0, 1, 2, 3, 4, size: 5 }

mySet.delete(2);
console.log(mySet); // { 0, 1, 2: 3, 3: 4, size: 4 }

mySet.clear();
console.log(mySet); // { size: 0 }
