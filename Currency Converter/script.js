// let apiKey = "3f9fa32b79ec351408b6aa9f";
// let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
// const fromDropDown = document.getElementById("from-currency-select");
// const toDropDown = document.getElementById("to-currency-select");
//
// //Create dropdown from the currencies array
// currencies.forEach((currency) => {
//   const option = document.createElement("option");
//   option.value = currency;
//   option.text = currency;
//   fromDropDown.add(option);
// });
//
// //Repeat same thing for the other dropdown
// currencies.forEach((currency) => {
//   const option = document.createElement("option");
//   option.value = currency;
//   option.text = currency;
//   toDropDown.add(option);
// });
//
// //Setting default values
// fromDropDown.value = "USD";
// toDropDown.value = "AZN";
//
// let convertCurrency = () => {
//   //Create References
//   const amount = document.querySelector("#amount").value;
//   const fromCurrency = fromDropDown.value;
//   const toCurrency = toDropDown.value;
//
//   //If amount input field is not empty
//   if (amount.length != 0) {
//     fetch(api)
//       .then((resp) => resp.json())
//       .then((data) => {
//         let fromExchangeRate = data.conversion_rates[fromCurrency];
//         let toExchangeRate = data.conversion_rates[toCurrency];
//         const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
//         result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
//           2
//         )} ${toCurrency}`;
//       })
//         .catch(err=>alert(err))
//   } else {
//     alert("Please fill in the amount");
//   }
// };
//
// document
//   .querySelector("#convert-button")
//   .addEventListener("click", convertCurrency);
// window.addEventListener("load", convertCurrency);


const apikey = '3f9fa32b79ec351408b6aa9f'
const api = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

const option1 = document.querySelector('#from-currency-select')
const option2 = document.querySelector('#to-currency-select');
const amount = document.querySelector("#amount");
const result = document.querySelector('#result')

currencies.forEach((currency)=>{
const option =document.createElement('option')
    option.value = currency;
    option.text = currency;
    option1.add(option);

})

currencies.forEach((currency)=>{
    const option = document.createElement('option')
    option.value = currency;
    option.text = currency;
    option2.add(option);
})
option1.value = 'USD';
option2.value = 'TRY';


const convertcurrency = ()=>{
    const amountvalue = amount.value;
    const option1value = option1.value;
    const option2value = option2.value;
    if(amountvalue.length !=0){
        fetch(api)
            .then(response=>response.json())
            .then(data=>{
                const option1exchangerate = data.conversion_rates[option1value];
                const option2exchangerate = data.conversion_rates[option2value];
                const convertedamount = (amountvalue/option1exchangerate)*option2exchangerate;

               result.innerHTML= `${amount.value} ${option1value} = ${convertedamount.toFixed(2)} ${option2value}`;

            })
            .catch(err=>alert(err))
    }
    else{
        alert("Please fill the amount")
    }







}


document.querySelector('#convert-button').addEventListener('click',convertcurrency);
window.addEventListener("load", convertcurrency);





































