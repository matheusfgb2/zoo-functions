const { species } = require('../data/zoo_data');

const getSpeciesMap = () => species
  .reduce((acc, { location, name }) => {
    acc[location] = acc[location] ? [...acc[location], name] : [name];
    return acc;
  }, {});

const getNamesMap = (sorted, genre) => species
  .reduce((acc, { location, name, residents }) => {
    const specieResidents = genre
      ? residents.filter((resident) => resident.sex === genre).map((resident) => resident.name)
      : residents.map((resident) => resident.name);
    const specieObject = {
      [name]: sorted ? specieResidents.sort() : specieResidents,
    };

    acc[location] = acc[location] ? [...acc[location], specieObject] : [specieObject];
    return acc;
  }, {});

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) {
    return getSpeciesMap();
  }
  const { sorted, sex } = options;
  return getNamesMap(sorted, sex);
};

module.exports = getAnimalMap;
