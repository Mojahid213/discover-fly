//first-class ticket Increase
document.getElementById("firstClassPlus").addEventListener("click",function(){
    firstClassPrice(true);
    subtotalPrice();
    taxPrice();
    totalPrice();
})
//first-class ticket decrease
document.getElementById("firstClassMinus").addEventListener("click",function(){
    firstClassPrice(false);
    subtotalPrice();
    taxPrice();
    totalPrice();
})
//first-class ticket function
function firstClassPrice(IfIncrease){
    const inputCount = document.getElementById("firstClassInput");
    const inputCountNum = parseInt(inputCount.value);
    let totalInputCount = inputCountNum;
    if(IfIncrease==true){
        totalInputCount = inputCountNum+1;
    }
    if(IfIncrease==false && totalInputCount>0){
        totalInputCount = inputCountNum-1;
    }
    document.getElementById("firstClassInput").value = totalInputCount;
}

//economy-class ticket increase
document.getElementById("economyPlus").addEventListener("click",function(){
    economyClassprice(true);
    subtotalPrice();
    taxPrice();
    totalPrice();
})
//economy-class ticket decrease
document.getElementById("economyMinus").addEventListener("click",function(){
    economyClassprice(false);
    subtotalPrice();
    taxPrice();
    totalPrice();
})
//economy-class ticket function
function economyClassprice(ifincrease){
    const inputcount = document.getElementById("economyInput");
    const inputcountNum = parseInt(inputcount.value);
    let totalinputNum = inputcountNum;
    if(ifincrease==true){
     totalinputNum = inputcountNum+1;
    }
    if(ifincrease==false && totalinputNum>0){
        totalinputNum = inputcountNum-1;
    }
    document.getElementById("economyInput").value = totalinputNum; 
}
//subtotal price function
function subtotalPrice(){
   const firstInput = document.getElementById("firstClassInput");
   const firstInputNum = parseInt(firstInput.value);
   const firstClasstotal = firstInputNum*150;
   const economyInputId = document.getElementById("economyInput");
   const economyinputNum = parseInt(economyInputId.value);
   const economyClasstotal = economyinputNum*100;
   document.getElementById("subTotal").innerText = firstClasstotal+economyClasstotal;
}
//tax price function
function taxPrice(){
    const subTotalPrice = document.getElementById("subTotal");
    const subTotalNum = parseInt(subTotalPrice.innerText);
    const totaltaxPrice = (subTotalNum/100)*10;
    document.getElementById("MrTax").innerText = totaltaxPrice;
}
//total price function
function totalPrice(){
    const subTotalPrice = document.getElementById("subTotal");
    const subTotalNum = parseInt(subTotalPrice.innerText);
    const taxPrices = document.getElementById("MrTax");
    const taxpricesNum = parseInt(taxPrices.innerText);
    const theTotal = subTotalNum+taxpricesNum;
    document.getElementById("Total").innerText = theTotal;
}
//Book-now button handeler
document.getElementById("bookBtn").addEventListener("click",function(){
    document.getElementById("maintext").style.display = "none";
    document.getElementById("showedText").style.display = "block";
})