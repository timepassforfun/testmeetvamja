const updataAndFetch = () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const time = document.getElementById("time");
      time.innerText = Date();
      const tableBody = document.getElementById("stockData");
      tableBody.innerHTML = "";

      data.forEach((option) => {
        const row = document.createElement("tr");

        const optionCell = document.createElement("td");
        optionCell.textContent = option.option;
        row.appendChild(optionCell);

        const priceCell = document.createElement("td");
        priceCell.textContent = option.price;
        row.appendChild(priceCell);

        const tldCell = document.createElement("td");
        tldCell.textContent = option.tld;
        row.appendChild(tldCell);

        const otherCell = document.createElement("td");
        otherCell.textContent = option.other;
        row.appendChild(otherCell);

        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

setInterval(() => {
  updataAndFetch();
}, 1000);
