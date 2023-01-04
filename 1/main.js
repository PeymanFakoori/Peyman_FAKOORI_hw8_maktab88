const body =document.querySelector('body');
const paragragh = document.createElement('p');
const textNode = document.createTextNode('Click here and watch the text change! ');
paragragh.appendChild(textNode);
document.body.appendChild(paragragh);

paragragh.style.backgroundColor = "green";
paragragh.style.width = "400px"
paragragh.style.height = "250px";

paragragh.onclick = function() {
this.innerHTML += " Click here and watch the text change! "
}
paragragh.style.overflow = "auto" 