const cities = require("./data/cities.json");
const states = require("./data/states.json");

const stateHash = {};
cities.forEach(({ state_name, city, timezone }) => {
  if (stateHash[state_name] === undefined) stateHash[state_name] = [];
  stateHash[state_name].push({ timezone, city });
});
class CityState {
  constructor(params = {}) {}

  getStates() {
    return states;
  }
  getCitiesOfState(state) {
    return stateHash[state] || [];
  }
}

module.exports = exports = CityState;
