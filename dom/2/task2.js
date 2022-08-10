const fistName = document.querySelector(".first-name-input");
const lastName = document.querySelector(".last-name-input");

const getFormvalue = () => {
  alert(`${fistName.value} ${lastName.value}`);
};
