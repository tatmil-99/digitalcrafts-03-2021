function tipFunction() {
  const billAmt = document.querySelector("#bill-amt").value;
  const tipAmt = document.querySelector("#tip-amt").value;

  const tipOperation = billAmt * (tipAmt / 100);
  let totalAmt = Number(billAmt) + Number(tipOperation);
  totalAmt = totalAmt.toFixed(2);

  const paragraph = document.querySelector("#display-total");
  paragraph.innerText = (`Your total amount is: $${totalAmt}`);

  const tipHistoryList = document.querySelector("#tip-history");
  const newLiItem = document.createElement("li");
  newLiItem.innerText = `$${tipOperation}`;
  tipHistoryList.append(newLiItem);
};

const form = document.querySelector("form");

const validateNum = (num) => {
  const numRegex = /[0-9]+$/;
  return numRegex.test(num);
};

form.addEventListener("submit", (event) => {
  const formInput1 = document.querySelector("#bill-amt").value;
  const formInput2 = document.querySelector("#tip-amt").value;
  if (!validateNum(formInput1) || !validateNum(formInput2)) {
    alert("Please enter a valid number");
  } else {
    event.preventDefault();
    tipFunction();
  }; 
});
