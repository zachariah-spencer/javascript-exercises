const reverseString = function(string) {
  reversed = "";
  for(let i = 1; i <= string.length; i++){
    reversed += string[string.length - i];
  }

  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
