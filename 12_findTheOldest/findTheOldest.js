const findTheOldest = function(people) {
    return people.sort((a, b) => {
            let ageA = a.hasOwnProperty('yearOfDeath') ? a.yearOfDeath - a.yearOfBirth : new Date().getFullYear() - a.yearOfBirth;
            let ageB = b.hasOwnProperty('yearOfDeath') ? b.yearOfDeath - b.yearOfBirth : new Date().getFullYear() - b.yearOfBirth;
            return ageA < ageB ? 1 : -1
        })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
