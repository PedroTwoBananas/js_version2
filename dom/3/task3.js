const data = { rowNum: 3, cells: 2 };

const createCell = (cellNum) => {
  const cell = document.createElement("td");
  cell.textContent = `Row${data.rowNum} cell${cellNum}`;
  return cell;
};

const insert_Row = () => {
  const newRow = document.createElement("tr");

  for (let i = 1; i <= data.cells; i++) {
    newRow.appendChild(createCell(i));
  }

  const sampleTable = document.getElementById("sampleTable");
  sampleTable.appendChild(newRow);

  data.rowNum++;
};
