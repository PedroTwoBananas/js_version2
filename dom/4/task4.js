const getResult = (e) => {
  e.preventDefault();
  const radius = document.getElementById("radius").value;
  const result = (4 / 3) * 3.14 * radius ** 3;

  const volume = document.getElementById("volume");
  volume.value = result;
};

document.querySelector(".submit").addEventListener("click", getResult);
