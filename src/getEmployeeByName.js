const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employee) => employees
  .find(({ firstName, lastName }) => firstName === employee || lastName === employee) || {};

module.exports = getEmployeeByName;
