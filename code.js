console.log('hitesh');
const form = document.querySelector('form');
const restart = document.querySelector('.restart');
const body = document.querySelector('.container');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const results_2 = document.querySelector('.results_2');
  const weight = parseInt(document.querySelector('#weight').value);
  const height = parseInt(document.querySelector('#height').value);
  const results = document.querySelector('#results');
  if (
    weight == '' ||
    (height == '' && weight <= 0) ||
    (height <= 0 && isNaN(weight)) ||
    isNaN(height)
  ) {
    console.log(`value is invalid`);
    results.innerHTML = `weight and height is invalid`;
  } else {
    const value = weight / ((height * height) / 1000).toFixed(2);
    results.innerHTML = `${value}`;

    if (value < 18.6) {
      console.log(`you are under weight`);
      results_2.innerHTML = `you are under weight`;
    } else if (value > 24.9) {
      console.log(`you are overweight`);
      results_2.innerHTML = `you are overweight`;
    } else if (18.6 < value < 24.9) {
      console.log(`conratulation your body is healthy`);
      results_2.innerHTML = `conratulation your body is healthy`;
    }
  }
});

restart.addEventListener('click', function (rest) {
  console.log('restart');
  weight.value = '';
  height.value = '';
  const results = document.querySelector('#results');
  if (results !== ''){
    results.innerText = '';
  }
  const results_2 = document.querySelector('.results_2');
  if (results_2 !== '') {
    results_2.innerText = '';
  }
});
