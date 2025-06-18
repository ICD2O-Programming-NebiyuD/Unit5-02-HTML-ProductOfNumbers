function calculateProduct() {
    let sum = 0;
    let numbers = "";
  
    // Get the values from the inputs
    let userNum1 = parseInt(document.getElementById('userNum1').value); // how many times
    let userNum2 = parseInt(document.getElementById('userNum2').value); // number to add
  
    // Loop to add the second number as many times as the first number
    for (let counter = 1; counter <= userNum1; counter++) {
      sum += userNum2;
  
      // Build the string: "5 + 5 + 5" etc.
      if (counter < userNum1) {
        numbers += userNum2 + " + ";
      } else {
        numbers += userNum2;
      }
    }
  
    // Display the result in HTML
    document.getElementById('display-results').innerHTML = numbers + " = " + sum;
  }
  