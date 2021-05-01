function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var conversionResult = convertHoursToMinutes(2);
console.log('converstionResult: ' + conversionResult);

function getGreeting(name) {
  return name;
}

var greetingResult = getGreeting('World');
console.log('greetingResult: ' + 'Hello ' + greetingResult + '!');

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyResult = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyResult :' + addAndMultiplyResult);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideResult = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideResult: ' + multiplyAndDivideResult);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbersResult: ' + subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference: ' + getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log('getFullNameResult: ' + getFullNameResult);

function cube(number) {
  return number * number * number;
}
var cubeResult = cube(5);
console.log('cubeResult: ' + cubeResult);
