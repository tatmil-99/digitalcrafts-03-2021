// GET PEOPLE FUNCTION
const main = document.querySelector(".main");

const fetchPeopleData = async () => {
  let response = await fetch("https://fakerapi.it/api/v1/persons?_quantity=30");
  let json = await response.json();
  console.log(json);
  for (let info of json.data) {
    // console.log(info.firstname);
    // console.log(info.lastname);
    // console.log(info.email);
    // console.log(info.birthday);
    const card = document.createElement("div");
    card.className = "card";
    const container = document.createElement("div");
    container.className = "container";
    card.append(container);
    main.append(card);

    const name = document.createElement("h4");
    name.innerHTML = `${info.firstname} ${info.lastname}`;
    const emailUl = document.createElement("ul");
    const emailLi = document.createElement("li");
    const emailBirthdayLi = document.createElement("li");
    emailLi.innerHTML = info.email;
    emailBirthdayLi.innerHTML = info.birthday;
    emailUl.append(emailLi, emailBirthdayLi);
    container.append(name, emailUl);
  };
  return json;
};

const submit = document.querySelector(".get-ppl-btn");
submit.addEventListener("click", (event) => {
  fetchPeopleData();
});


// GET PLACES FUNCTION
const main = document.querySelector(".main");

const fetchPlacesData = async () => {
  let response = await fetch("https://fakerapi.it/api/v1/places?_quantity=1");
  let json = await response.json();
  console.log(json);
  for (let info of json.data) {
    // console.log(info.latitude);
    // console.log(info.longitude);
    const card = document.createElement("div");
    card.className = "card";
    const container = document.createElement("div");
    container.className = "container";
    card.append(container);
    main.append(card);

    const name = document.createElement("h4");
    name.innerHTML = "Latitude and Longitude:";
    const latitudeUl = document.createElement("ul");
    latitudeUl.className = "latitude-ul"
    latitudeUl.innerHTML = "Latitude:"
    const latitudeLi = document.createElement("li");
    latitudeLi.className = "latitude-li"
    const longitudeUl = document.createElement("ul");
    longitudeUl.className = "longitude-ul"
    longitudeUl.innerHTML = "Longitude:"
    const longitudeLi = document.createElement("li");
    longitudeLi.className = "longitude-li"
    latitudeLi.innerHTML = info.latitude;
    longitudeLi.innerHTML = info.longitude;
    latitudeUl.append(latitudeLi);
    longitudeUl.append(longitudeLi);
    container.append(name, latitudeUl, longitudeUl);
  };
  return json;
};


const submit = document.querySelector(".get-places-btn");
submit.addEventListener("click", (event) => {
  fetchPlacesData();
});