const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids.reduce((acc, specieId) => {
  const currSpecie = species.find((specie) => specie.id === specieId);
  return [...acc, currSpecie] || [];
}, []);

module.exports = getSpeciesByIds;
