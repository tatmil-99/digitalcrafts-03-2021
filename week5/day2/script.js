// GET PEOPLE FUNCTION

const fetchPeopleData = async () => {
  let response = await fetch("https://fakerapi.it/api/v1/persons?_quantity=30");
  let json = await response.json();
  
  const body = document.querySelector(".main-container");
  const main = document.createElement("main");
  main.className = "main";
  body.append(main);

  for (let info of json.data) {
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

let submit = document.querySelector(".get-people-btn");
submit.addEventListener("click", (event) => {
  fetchPeopleData().catch(alert);
});


// GET PLACES FUNCTION

const fetchPlacesData = async () => {
  let response = await fetch("https://fakerapi.it/api/v1/places?_quantity=30");
  let json = await response.json();

  const body2 = document.querySelector(".main-container");
  const main2 = document.createElement("main");
  main2.className = "main2";
  body2.append(main2);
  
  for (let info of json.data) {
    const card = document.createElement("div");
    card.className = "card";
    const container = document.createElement("div");
    container.className = "container";
    card.append(container);
    main2.append(card);

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


submit = document.querySelector(".get-places-btn");
submit.addEventListener("click", (event) => {
  fetchPlacesData().catch(alert);
});

// single func version
