const { species, hours } = require('../data/zoo_data');

const makeWeekDaysObject = () => {
  const weekdays = Object.keys(hours)
    .reduce((acc, day) => {
      acc[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: species
          .filter((specie) => specie.availability.includes(day))
          .map(({ name }) => name),
      };
      return acc;
    }, {});
  weekdays.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return weekdays;
};

const getSchedule = (parameter) => {
  const schedule = makeWeekDaysObject();
  const animalDays = species.find(({ name }) => name === parameter);
  const findDay = schedule[parameter];
  if (animalDays) return animalDays.availability;
  if (findDay) return { [parameter]: findDay };
  return schedule;
};

module.exports = getSchedule;
