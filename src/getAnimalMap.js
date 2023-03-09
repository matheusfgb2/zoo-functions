const { species } = require('../data/zoo_data');

const getAllAnimalsMap = () => species
  .reduce((acc, { location, name }) => {
    acc[location] = acc[location] ? [...acc[location], name] : [name];
    return acc;
  }, {});

const getAnimalsNames = (sorted, genre) => species
  .reduce((acc, { location, name, residents }) => {
    const specieResidents = genre
      ? residents.filter((resident) => resident.sex === genre).map((resident) => resident.name)
      : residents.map((resident) => resident.name);
    const model = {
      [name]: !sorted ? specieResidents : specieResidents.sort(),
    };

    acc[location] = acc[location] ? [...acc[location], model] : [model];
    return acc;
  }, {});

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) {
    return getAllAnimalsMap();
  }
  const { sex, sorted } = options;
  if (sex) {
    return getAnimalsNames(sorted, sex);
  }
  return getAnimalsNames(sorted);
};

console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
