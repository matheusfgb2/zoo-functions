const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => ({
  child: entrants.filter(({ age }) => age < 18).length,
  adult: entrants.filter(({ age }) => age < 50 && age >= 18).length,
  senior: entrants.filter(({ age }) => age >= 50).length,
});

const calculateEntry = (entrants) => {
  if (!Array.isArray(entrants)) return 0;
  const { child = 0, adult = 0, senior = 0 } = countEntrants(entrants);
  return child * prices.child + adult * prices.adult + senior * prices.senior;
};

module.exports = { calculateEntry, countEntrants };
