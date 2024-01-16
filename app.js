//1. I am declaring the variables with user input.
const miles = prompt('Enter Number Here to convert from Miles to Kilometers');

//1.5 I am Converting from string value to a number value.
const numbMiles = Number(miles);

//2. I am multipliying the promp variable and assinging it to a new variable.
const kilometers = numbMiles * 1.60934;

//2.5 I am converting from string value to a number value.
const numbKM = Number(kilometers);

//3. I am rounding final answer to 2 decimal places and converting its string value into a number value.
const roundedResult = numbKM.toFixed(2);

const numbRoundedResult = Number(roundedResult);

//4. I am loging the result
console.log(`The distance of  ${numbMiles} Miles is equal to ${roundedResult} Kilometers`);

//5. I am adding an alert with the final answer
alert(`The distance of ${numbMiles} Miles is equal to ${numbRoundedResult} Kilometers`);


