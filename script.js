//API: https://api.countrystatecity.in/v1/countries

const dummyData = [
  {
    name: "country-1",
    states: [
      {
        name: "state-1.1",
        cities: [
          {
            name: "city-1.1.1",
          },
          {
            name: "city-1.1.2",
          },
          {
            name: "city-1.1.3",
          },
        ],
      },
      {
        name: "state-1.2",
        cities: [
          {
            name: "city-1.2.1",
          },
          {
            name: "city-1.2.2",
          },
          {
            name: "city-1.2.3",
          },
        ],
      },
      {
        name: "state-1.3",
        cities: [
          {
            name: "city-1.3.1",
          },
          {
            name: "city-1.3.2",
          },
          {
            name: "city-1.3.3",
          },
        ],
      },
    ],
  },

  {
    name: "country-2",
    states: [
      {
        name: "state-2.1",
        cities: [
          {
            name: "city-2.1.1",
          },
          {
            name: "city-2.1.2",
          },
          {
            name: "city-2.1.3",
          },
        ],
      },
      {
        name: "state-2.2",
        cities: [
          {
            name: "city-2.2.1",
          },
          {
            name: "city-2.2.2",
          },
          {
            name: "city-2.2.3",
          },
        ],
      },
      {
        name: "state-2.3",
        cities: [
          {
            name: "city-2.3.1",
          },
          {
            name: "city-2.3.2",
          },
          {
            name: "city-2.3.3",
          },
        ],
      },
    ],
  },

  {
    name: "country-3",
    states: [
      {
        name: "state-3.1",
        cities: [
          {
            name: "city-3.1.1",
          },
          {
            name: "city-3.1.2",
          },
          {
            name: "city-3.1.3",
          },
        ],
      },
      {
        name: "state-3.2",
        cities: [
          {
            name: "city-3.2.1",
          },
          {
            name: "city-3.2.2",
          },
          {
            name: "city-3.2.3",
          },
        ],
      },
      {
        name: "state-3.3",
        cities: [
          {
            name: "city-3.3.1",
          },
          {
            name: "city-3.3.2",
          },
          {
            name: "city-3.3.3",
          },
        ],
      },
    ],
  },
];

const createSelectDropdown = () => {
  const countries = document.getElementById("country");
  const states = document.getElementById("state");
  const cities = document.getElementById("city");
  let countryIndex = null;
  let stateIndex = null;

  countries.style.cursor = "pointer";

  states.disabled = true;
  states.style.cursor = "not-allowed";
  cities.disabled = true;
  cities.style.cursor = "not-allowed";

  // Method to fetch all countries
  const fetchCountries = () => {
    dummyData.forEach((data, idx) => {
      let option = document.createElement("option");
      option.value = idx;
      option.innerText = data.name;

      countries.appendChild(option);
    });

    countries.addEventListener("change", fetchStates);
  };

  // Method to fetch all states based on selected Country
  const fetchStates = (e) => {
    countryIndex = e.target.value;

    let allStates = dummyData[countryIndex].states;

    states.style.cursor = "pointer";
    states.disabled = false;

    allStates.forEach((state, idx) => {
      let option = document.createElement("option");
      option.value = idx;
      option.innerText = state.name;

      states.appendChild(option);
    });

    states.addEventListener("change", fetchCities);
  };

  // Method to fetch all states based on selected Country
  const fetchCities = (e) => {
    stateIndex = e.target.value;

    let allCities = dummyData[countryIndex].states[stateIndex].cities;

    cities.style.cursor = "pointer";
    cities.disabled = false;

    allCities.forEach((state) => {
      let option = document.createElement("option");
      option.value = state.name;
      option.innerText = state.name;

      cities.appendChild(option);
    });
  };

  fetchCountries();
};

window.onload = createSelectDropdown;
