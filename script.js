const fromCurrency = document.getElementById("fromcurrency");
const inputValue = document.getElementById('input');
const toCurrency = document.getElementById("tocurrency");
const answer = document.getElementById('answer');
const Convert = document.getElementById('convert');

fromCurrency.addEventListener("change", function() {
  let selectedCurrency = fromCurrency.value;
  console.log("Selected currency:", selectedCurrency);
});

toCurrency.addEventListener("change", function() {
  let convertCurrency = toCurrency.value;
  console.log("Convert into: ", convertCurrency);
});

const getRates = async (money) => {
  const url = `https://v6.exchangerate-api.com/v6/495f47d15875e8043cfc9735/latest/${money}`;
  answer.innerHTML = `Loading...`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  showRates(data);
}

const showRates = (data) =>{
   const finalAnswer =  data.conversion_rates[toCurrency.value] * inputValue.value;
   answer.innerHTML = ` ${finalAnswer}`
}

Convert.addEventListener('click', function() {
  let selectedCurrency = fromCurrency.value;    
  getRates(selectedCurrency);
});
