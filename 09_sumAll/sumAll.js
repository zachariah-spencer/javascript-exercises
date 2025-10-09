const sumAll = function(a, b) {
  if(typeof(a) != "number" || typeof(b) != "number"){
    return "ERROR";
  }

  if(a < 0 || b < 0){
    return "ERROR";
  }

  if(a % 1 !== 0 || b % 1 !== 0){
    return "ERROR";
  }

  let i = (a < b) ? a : b;
  let end = (a > b) ? a : b;
  let sum = 0;

  for(; i <= end; i++){
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
