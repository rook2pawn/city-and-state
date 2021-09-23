const test = require("tape");

const CityState = require("../index.js");
const cityState = new CityState();

test("getStates", function (t) {
  t.plan(1);
  t.equal(cityState.getStates().length, 53);
});

test("getCitiesOfState", function (t) {
  t.plan(1);
  t.equal(cityState.getCitiesOfState("Indiana").length, 2583);
});

test("verify small towns", function (t) {
  t.plan(2);
  const indiana = cityState.getCitiesOfState("Indiana");
  const { city, timezone } = indiana.find(({ city }) => city == "Clayton");

  t.equal(city, "Clayton");
  t.equal(timezone, "America/Indiana/Indianapolis");
});
