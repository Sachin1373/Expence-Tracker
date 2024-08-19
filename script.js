const add = document.getElementById("Add");
const clearall=document.getElementById("Clear")
console.log(add);
let total=0.00
add.addEventListener('click', (e) => {
    
    const item = document.getElementById("Item").value;
    const amount = document.getElementById("amount").value;

    const newitem = document.createElement("li");
    newitem.textContent = `${item}: $${amount}`;
    
    const result = document.getElementById("results");
    result.appendChild(newitem);
  

    total += Number(amount);
    document.querySelector(".Total-Amount").innerHTML = `Total: $${total.toFixed(2)}`

    document.getElementById("Item").value = "";
    document.getElementById("amount").value = "";

    
});

clearall.addEventListener('click', ()=>{
    const result=document.getElementById("results")
    result.innerHTML=""

    total=0.00
    document.querySelector(".Total-Amount").innerHTML = `Total: $${total.toFixed(2)}`
})
