const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalButtons = document.querySelector(".equal");
const acButtons = document.querySelector(".ac");
const pmButtons = document.querySelector(".pm");
const percentButtons = document.querySelector(".percent");
const ustEkran = document.querySelector(".previous-display");
const altEkran = document.querySelector(".current-display");

let ustEkranYazi = "";
let altEkranYazi = "";

let islem = "";

numberButtons.forEach((number) => {
    number.onclick = () => {
  
      ekranaHazirlik(number.textContent);
  
      updateEkran();
    };
  });
  
  
  const ekranaHazirlik = (num) => {
  
  if(num==="." && altEkranYazi.includes(".")) return
  
  if(altEkranYazi.length > 9) return
  
    if(altEkranYazi==="0" && num==="0") return
  
  altEkranYazi += num;
  }

  const updateEkran = () => {

    altEkran.textContent = altEkranYazi;
  
   if (islem) {
     ustEkran.textContent = `${üstEkranYazi}  ${işlem}`;
   } else {
     ustEkran.textContent = "";
   }
   
  };

