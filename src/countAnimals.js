const { species } = require('../data/zoo_data');

const countAnimals = (animals) => {
  if (!animals) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  return species
    .find((specie) => specie.name === animals.species).residents
    .reduce((acc, resident) => ((!animals.sex || resident.sex === animals.sex) ? acc + 1 : acc), 0);
};

module.exports = countAnimals;
