const { species, employees } = require('../data/zoo_data');

const getSpecies = (animalsIds) => species
  .filter(({ id }) => animalsIds.includes(id))
  .map(({ name }) => name);

const getLocation = (speciesNames) => species
  .filter(({ name }) => speciesNames.includes(name))
  .map(({ location }) => location);

const getEmployeesCoverArr = () => employees
  .map((employee) => {
    const employeeSpecies = getSpecies(employee.responsibleFor);
    return {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employeeSpecies,
      locations: getLocation(employeeSpecies),
    };
  });

const getEmployeesCoverage = (employeeInfo) => {
  const employeesCoverage = getEmployeesCoverArr();
  if (employeeInfo) {
    const employeeCoverage = employeesCoverage
      .find((employee) => employee.fullName.includes(employeeInfo.name)
        || employee.id === employeeInfo.id);

    if (!employeeCoverage) {
      throw new Error('Informações inválidas');
    }

    return employeeCoverage;
  }
  return employeesCoverage;
};

module.exports = getEmployeesCoverage;
