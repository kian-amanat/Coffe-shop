console.log('Starbucks Coffee Shop');



//// set variable

const myOrders = document.getElementById("orders")
const btn = document.getElementById("cl-btn")




//// latte function
function placeOrderLatte(seconds){
    counter = seconds
    const myDiv = document.createElement("div");
    const myBtn =document.createElement("button");
    const para = document.createElement("p");
    myBtn.innerText = "Cancel";
    myBtn.addEventListener('click', function handleClick(event) {
        myDiv.remove()
        clearInterval(interval);
      });
    myBtn.setAttribute("id" , " cl-btn");
    myDiv.setAttribute("class" , " order-item");
    const myH3 = document.createElement("h3");
    myH3.innerText = "Latte";
    myDiv.appendChild(myH3);
    myOrders.appendChild(myDiv);
    myDiv.appendChild(para);
    myDiv.appendChild(myBtn);
    const interval = setInterval(() => {
    para.innerText = ["Preparation time: " + counter + " seconds"];
    counter--;
    console.log(counter)
    
  ///// if statement  
        if( counter <= -1){
            clearInterval(interval);
            myDiv.remove()
            const myDiv1 = document.createElement("div");
            const para1 = document.createElement("p");
            para1.innerText = "Preparation time: 0 seconds";
            myDiv1.setAttribute("class" , " order-item ready");
            const myH31 = document.createElement("h3");
            myH31.innerText = "Latte";
            myDiv1.appendChild(myH31);
            myOrders.appendChild(myDiv1);
            myDiv1.appendChild(para1);
            
        }
    }, 1000);
    
}
placeOrderLatte(15)

///// espersso function
function placeOrderEssperso(seconds){
 
counter = seconds

const myDiv = document.createElement("div");
const myBtn =document.createElement("button");
const para = document.createElement("p");
myBtn.innerText = "Cancel";
myBtn.addEventListener('click', function handleClick(event) {
    myDiv.remove()
    clearInterval(interval);
  });
myBtn.setAttribute("id" , " cl-btn");
myDiv.setAttribute("class" , " order-item");
const myH3 = document.createElement("h3");
myH3.innerText = "Espersso";
myDiv.appendChild(myH3);
myOrders.appendChild(myDiv);
myDiv.appendChild(para);
myDiv.appendChild(myBtn);
const interval = setInterval(() => {
para.innerText = ["Preparation time: " + counter + " seconds"];
counter--;
console.log(counter)


 ///// if statement
    if( counter <= -1){
        clearInterval(interval);
        myDiv.remove()
        const myDiv1 = document.createElement("div");
        const para1 = document.createElement("p");
        para1.innerText = "Preparation time: 0 seconds";
        myDiv1.setAttribute("class" , " order-item ready");
        const myH31 = document.createElement("h3");
        myH31.innerText = "Espersso";
        myDiv1.appendChild(myH31);
        myOrders.appendChild(myDiv1);
        myDiv1.appendChild(para1);
        
    }
}, 1000);

 }
  placeOrderEssperso(10)