const { employees } = require('../data/zoo_data');

const isManager = (employeeId) => employees
  .some((employee) => employee.managers.includes(employeeId));

const getRelatedEmployees = (employeeId) => {
  if (!isManager(employeeId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees
    .filter((employee) => employee.managers.includes(employeeId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
