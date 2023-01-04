const body =document.querySelector('body');
const box = document.createElement('p');
const textNode = document.createTextNode(' Hover over me! ');
box.appendChild(textNode);
document.body.appendChild(box);

box.style.backgroundColor = "red";box.style.width = "400px"
box.style.height = "150px";

box.onmouseover=function(){
    box.style.backgroundColor = "blue";
}
box.onmouseout=function(){
    box.style.backgroundColor = "red";
}
