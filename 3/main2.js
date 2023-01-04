//creating child div
let div3 = document.createElement("div");
let paragraph3 = document.createElement("p");
paragraph3.innerText = "The main node's child node.";
div3.appendChild(paragraph3);
//creating parent div
let div2 = document.createElement("div");
let paragraph2 = document.createElement("p");
paragraph2.innerText = "The Target node.";
div2.appendChild(paragraph2);
div2.appendChild(div3);
//creating grandparent div
let div1 = document.createElement("div");
let paragraph1 = document.createElement("p");
paragraph1.innerText = "The main node's child node.";
div1.appendChild(paragraph1);
div1.appendChild(div2);
document.body.appendChild(div1);
//creating styling function and calling them for each div
function giveStyle(div, cb) {
  div.style.backgroundColor = "#75fb4c";
  div.style.border = "black 1px solid";
  div.style.height = "80%";
  div.style.padding = "1rem";
  cb();
}
giveStyle(div1, () => (div1.style.width = "600px"));
giveStyle(div2, () => (div2.style.width = "550px"));
giveStyle(div3, () => (div3.style.width = "500px"));
//creating buttons
let parentCopy = document.createElement("button");
let pText = document.createTextNode("Copy Parent Text");
parentCopy.appendChild(pText);
document.body.appendChild(parentCopy);

let childCopy = document.createElement("button");
let cText = document.createTextNode("Copy Child Text");
childCopy.appendChild(cText);
document.body.appendChild(childCopy);
//onclick functions
parentCopy.onclick = () => {
  div2.firstChild.innerText = "The Target node.";
  div2.firstChild.innerText =
    div1.firstChild.innerText +
    div2.firstChild.innerText +
    div3.firstChild.innerText +
    div2.firstChild.innerText;
};

childCopy.onclick = () => {
  div2.firstChild.innerText = "The Target node.";
  div2.firstChild.innerText =
    div3.firstChild.innerText + div2.firstChild.innerText;
};