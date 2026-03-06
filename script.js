console.log("Script started")

 function changeColor(){
    console.log("click");
    let color = prompt("Enter a new color for the poem");
    let element = document.getElementById("poem");
    element.style.color = color;

 }

 function changeFontSize(){
    console.log("click");
    let fontSize = prompt("Enter a new font size for the poem");
    let element = document.getElementById("poem");
    element.style.fontSize= fontSize;

 }

 function changePoem(){
    console.log("click");
    let changeTittle = prompt("Enter a new tittle");
    let changePoem = prompt("Enter a new poem");
    let h1 = document.getElementById("tittle") 
    let p = document.getElementById("poem") 
    h1.innerText = changeTittle;
    p.innerText = changePoem;


 }

 

