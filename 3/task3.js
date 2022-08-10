const keys = ["user", "name"];
const newName = "Sam";

const admin = {
  isAdmin: true,
  getPass: () => alert("I will give you pass"),
  getBlock: () => alert("I will block you"),
};

const addName = (keys, name, user) => {
  keys.reduce((prevObj, key, index) => {
    if (index === keys.length - 1) {
      prevObj[key] = name;
      return user;
    }
    prevObj[key] = {};
    return prevObj[key];
  }, user);
  return user;
};

const updateUserName = addName(keys, newName, admin);

console.log(updateUserName);
