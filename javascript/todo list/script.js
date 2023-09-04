let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function() {


    
    //create a newr list item to display todo task on page
    let item = document.createElement("li");
    //input vakue set to the inner text of html
    item.innerText = inp.value;
    //it insert int ul item
    
    
    let delBtn = document.querySelector("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");



    item.appendChild(delBtn);
    ul.appendChild(item);
    


    console.log(inp.value);
    inp.value ="";  //it clear int input value 
}); 
