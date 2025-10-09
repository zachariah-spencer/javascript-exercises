const convertToCelsius = function(temp) {
  result = (temp - 32) * (5/9);
  roundedResult = Math.round(result * 10) / 10;
  return roundedResult;
};

const convertToFahrenheit = function(temp) {
  result = (temp * (9/5)) + 32;
  roundedResult = Math.round(result * 10) / 10;
  return roundedResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
