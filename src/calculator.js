function add (numbers) {
  if(numbers == "") {
    return 0;
  }
  if(numbers.includes(",") | ("\n") ) {
    var numbersArray = numbers.split(/[\n,]+/);
    return sum(numbersArray);
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
