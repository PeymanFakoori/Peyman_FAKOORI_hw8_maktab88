let body = document.querySelector('body');
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let parentCopy = document.createElement("button");
let childCopy = document.createElement("button");

let textNode1 = document.createTextNode('Parents node text');
let textNode2 = document.createTextNode('The target node');
let textNode3 = document.createTextNode('The main nodes child node');
let btn1txt = document.createTextNode("Copy Parent Text");
let btn2txt = document.createTextNode("Copy Child Text");

div3.appendChild(textNode3);
div2.appendChild(textNode2);
div1.appendChild(textNode1);
body.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(div3);
parentCopy.appendChild(btn1txt);
document.body.appendChild(parentCopy);
childCopy.appendChild(btn2txt);
document.body.appendChild(childCopy);

div1.style.backgroundColor = "lawngreen";
div1.style.width = "500px"
div1.style.height = "250px";
div1.style.border = "1px solid black";
div1.style.marginLeft = "20px";

div2.style.backgroundColor = "lawngreen";
div2.style.width = "400px"
div2.style.height = "200px";
div2.style.border = "1px solid black";
div2.style.marginLeft = "20px";
div2.style.overflow = "auto" 

div3.style.backgroundColor = "lawngreen";
div3.style.width = "350px"
div3.style.height = "150px";
div3.style.border = "1px solid black";
div3.style.marginLeft = "20px";

parentCopy.onclick = function() {
    div2.innerHTML = `${div1.innerText} ${div2.innerHTML}`;
};
  
childCopy.onclick = function(){
    div2.innerHTML = `${div3.innerText} ${div2.innerHTML}`;
  };
