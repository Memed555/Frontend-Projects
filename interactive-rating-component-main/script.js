const mainContainer = document.querySelector(".main-container");
const thankyouContainer = document.querySelector(".thank-you");
const buttonSubmit = document.querySelector("#submit");
const buttonRateagain = document.querySelector("#rateagain");
const rates = document.querySelectorAll(".btn");
const rating = document.querySelector("#rating");

buttonSubmit.addEventListener("click",()=>{
  thankyouContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
})   
buttonRateagain.addEventListener("click",()=>{
  thankyouContainer.style.display = "none";
  mainContainer.style.display = "block";
})   

rates.forEach((rate) => {
  rate.addEventListener("click",()=>{
  rating.innerHTML = rate.innerHTML;
  })
});




