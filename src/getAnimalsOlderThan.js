const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (specieName, age) => species
  .find(({ name }) => name === specieName).residents
  .every(({ age: residentAge }) => residentAge >= age);

module.exports = getAnimalsOlderThan;
