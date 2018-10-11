function add (numbers) {
  if(numbers == "") {
    return 0;
  }
  if(numbers.includes(",") | ("\n") ) {
    var numbersArray = numbers.split(/[\n,]+/);
    var negativeArray = [];
    var index = 0;
    for(var i = 0; i < numbersArray.length; i++) {
      if(numbersArray[i] < 0) {
        negativeArray[index] = numbersArray[i];
        index++;
      }
    }
    if(index > 0) {
      var errorMessage = "Negatives not allowed: ";
      for(var i = 0; i < negativeArray.length; i++) {
        errorMessage += negativeArray[i];
        if(i != (negativeArray.length - 1)) {
          errorMessage += ",";
        }
      }
      throw errorMessage;
    }
    else {
      return sum(numbersArray);
    }
  }
  else {
    return parseInt(numbers);
  }

  function sum(numbersArray) {
    var total = 0;

    for(var i = 0; i < numbersArray.length; i++) {
      total += parseInt(numbersArray[i]);
    }
    return total;
  }
}

module.exports = add;
