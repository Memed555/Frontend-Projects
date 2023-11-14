const button = document.querySelector("#btn");
const word1 = document.querySelector("#word1input");
const word2 = document.querySelector("#word2input");
const result = document.querySelector("#result");

let lowercaseword1;
let lowercaseword2;

button.addEventListener('click',()=>{
lowercaseword1 = word1.value.toLowerCase();
lowercaseword2 = word2.value.toLowerCase();
const cleanedword1 = cleanword(lowercaseword1);
const cleanedword2 = cleanword(lowercaseword2); 

isAnagram(cleanedword1,cleanedword2);

})
function cleanword(clean){
  return clean.replace(/[^\w]/g, "");
}
function isAnagram(worrd1,worrd2){
  if(worrd1.length !== worrd2.length){
    result.textContent = "Not an Anagram";
    result.classList.remove("success");
    result.classList.add("error");
  }
 else {
      result.textContent = "Is an Anagram";
      result.classList.remove("error");
      result.classList.add("success");
    }
}



















