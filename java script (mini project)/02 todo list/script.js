
let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector('input');


btn.addEventListener('click',function(){
    let addtsk = document.createElement('li');
    addtsk.innerHTML = input.value;+
    ul.appendChild(addtsk);

    let delBtn = document.createElement('button');
    delBtn.innerText=('Delete');
    delBtn.classList.add('button');

    addtsk.appendChild(delBtn);
    ul.appendChild(addtsk);


    input.value = "";
});


ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
        let list = event.target.parentElement;
        list.remove();
        console.log("delete");
    }    
});



// let delbtns = document.querySelectorAll(".delete");
//  for(delbtn of delbtns) {
//     delbtn.addEventListener("click",function() {
//         let per = this.parentElement;

//         console.log(per);
//         per.remove();
//     });
//  }





