// function for various mathematical peration
// for addition operation
function add(number1, number2){
    return number1 + number2;
}

// for subtraction
function subtract(number1, number2){
    return number1 - number2;
}
// for multiplication
function multiply(number1, number2){
    return number1 * number2;
}
// for division
function divide(number1, number2){
    return number1 / number2;
}

 document.getElementById('add').addEventListener('click' function(){
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
 });

 // adding event listeners to subtraction
 document.getElementById('subtract').addEventListener('click' function(){
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1,  number2);
    document.getElementById('calculation-result').textContent = result;
 });

 // for multiplication
 document.getElementById('multiply').addEventListener('click' function(){
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1,  number2);
    document.getElementById('calculation-result').textContent = result;
 });

 // for division 
 document.getElementById('divide').addEventListenet('click' function(){
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1,  number2);
    document.getElementById('calculation-result').textContent = result;
 });