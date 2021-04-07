const mainContainer = document.querySelector(".main-container");

const fetchPeopleData = async () => {
  let response = await fetch("https://fakerapi.it/api/v1/persons?_quantity=2");
  let json = await response.json();
  console.log(json);
  for (let info of json.data) {
    console.log(info.firstname);
  };
  return json
};


const submit = document.querySelector(".get-ppl-btn");
submit.addEventListener("click", (event) => {
  fetchPeopleData();
});
