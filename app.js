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

  operationButtons.forEach((op)=>{

    op.onclick=()=>{
  
  if(altEkranYazi==="") return ;
  
     if(altEkranYazi && ustEkranYazi) hesapla()
  
  
      islem = op.textContent;
  
      ustEkranYazi = altEkranYazi;
  
      altEkranYazi = "";
      updateEkran();
    }
  })
  
  equalButtons.onclick=()=>{
  
    hesapla()
  updateEkran()
  }


  const hesapla=()=>{
    let sonuc;
    switch (islem) {
      case "+":
       sonuc= +ustEkranYazi + Number(altEkranYazi);
        break;
      case "-":
       sonuc= ustEkranYazi - altEkranYazi;
        break;
    
      case "x":
      sonuc=  ustEkranYazi * altEkranYazi;
        break;
      case "÷":
      sonuc=  ustEkranYazi / altEkranYazi;
        break;
    
      default:
        return;
    }
    
     altEkranYazi=sonuc
    
    ustEkranYazi=""
    islem=""
    }