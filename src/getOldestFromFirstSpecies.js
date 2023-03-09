const { species, employees } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (employeeId) => {
  const firstSpecieId = employees.find(({ id }) => id === employeeId).responsibleFor[0];
  const { name, sex, age } = species
    .find(({ id }) => id === firstSpecieId).residents
    .sort((a, b) => b.age - a.age)[0];
  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;
