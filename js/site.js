const fearsForm = document.querySelector('#fears-form');
const numInputs = document.querySelectorAll('.numInput');
const sum = document.querySelector('#sum');
const output = document.querySelector('#output');

fearsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  output.innerHTML = findSum();
})

const findSum = () => {
  for (let i = 0; i < numInputs.length; i++) {
    let num1 = parseInt(numInputs[i].value);
    let num2;


    for (let j = 0; j < numInputs.length; j++) {
      num2 = parseInt(numInputs[j].value)
      
      // Check for valid input
      if (!Number.isInteger(num2))
      {
        return 'Please enter numbers only.'
      }
      
      // Check sum
      if (num1 + num2 === parseInt(sum.value)) {
        return `${num1} + ${num2} = ${sum.value}`;
      }
    }
  }
  return 'No matching sum could be found.'
}

