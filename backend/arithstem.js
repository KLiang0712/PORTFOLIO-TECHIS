"use strict";

var input = document.getElementById('input'), // input/output button
  number = document.querySelectorAll('.numbers div'), // number buttons
  operator = document.querySelectorAll('.operators button'), // operator buttons
  result = document.getElementById('result'), // equal button
  clear = document.getElementById('clear'), // clear button
  resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    // storing current input string and its last character in variables - used later
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if result is not diplayed, just keep adding
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷" || lastChar === "%") {
      // if result is currently displayed and user pressed an operator
      // we need to keep on adding to the string for next operation
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      // if result is currently displayed and user pressed a number
      // we need clear the input string and add the new input to start the new opration
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// adding click handlers to number buttons
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

    // storing current input string and its last character in variables - used later
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if last character entered is an operator, replace it with the currently pressed one
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷" || lastChar === "%") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      // if first key pressed is an opearator, don't do anything
      console.log("enter a number first");
    } else {
      // else just add the operator pressed to the input
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// on click of 'equal' button
result.addEventListener("click", function() {
  // this is the string that we will be processing eg. -10+26+33-56*34/23
  var inputString = input.innerHTML;

// clearing the input on press of clear
/*
Source: https://www.w3schools.com/tags/ev_ondblclick.asp
*/
  result.addEventListener("dblclick", function() {
  input.innerHTML = "";
})

// forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
  var numbers = inputString.split(/\+|\-|\×|\÷|\%/g);

  // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // first we replace all the numbers and dot with empty string and then split
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

  /* Now we are looping through the array and doing one operation at a time.
  Operations: 1. division (divd) 
              2. multiply (mult) 
              3. subtraction (subt)
              4. addition (plus)
              5. remainder (modr)
  
  As we move we are alterning the original numbers and operators array
  the final element remaining in the array will be the output. 
  
  Note: Using parseFloat is necessary, otherwise it will result in string concatenation :)
  */
  
  /* Divide */
  var divd = operators.indexOf("÷");
  while (divd != -1) {
    numbers.splice(divd, 2, parseFloat(numbers[divd]) / parseFloat(numbers[divd + 1]));
    operators.splice(divd, 1);
    divd = operators.indexOf("÷");
  }

  /* Multiply */
  var mult = operators.indexOf("×");
  while (mult != -1) {
    numbers.splice(mult, 2, parseFloat(numbers[mult]) * parseFloat(numbers[mult + 1]));
    operators.splice(mult, 1);
    mult = operators.indexOf("×");
  }

  /* Subtract */
  var subt = operators.indexOf("-");
  while (subt != -1) {
    numbers.splice(subt, 2, parseFloat(numbers[subt]) - parseFloat(numbers[subt + 1]));
    operators.splice(subt, 1);
    subt = operators.indexOf("-");
  }

  /* Add */
  var plus = operators.indexOf("+");
  while (plus != -1) {
    numbers.splice(plus, 2, parseFloat(numbers[plus]) + parseFloat(numbers[plus + 1]));
    operators.splice(plus, 1);
    plus = operators.indexOf("+");
  }

  /* Remainder % */
  var modr = operators.indexOf("%");
  while (modr != -1) {
    numbers.splice(modr, 2, parseFloat(numbers[modr]) % parseFloat(numbers[modr + 1]));
    operators.splice(modr, 1);
    modr = operators.indexOf("%");
  }

  input.innerHTML = numbers[0]; // displaying the output

  resultDisplayed = true; // turning flag if result is displayed
});