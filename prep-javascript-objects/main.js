var person = {
  firstName: 'Michael',
  lastName: 'Aguilar',
  hobby: 'sports'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log(fullName);
person.job = 'Chemist';
console.log(person.job);
person.previousJob = 'Researcher';
console.log(person.previousJob);
console.log(person);

var myCar = {
  make: 'Honda',
  model: 'Accord',
  year: '2012'
};
console.log(myCar);
myCar['owner'] = fullName;
console.log('My name is ' + myCar['owner'] + ' and I drive a ' +
myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.');
myCar['color'] = 'grey';
console.log(myCar);
