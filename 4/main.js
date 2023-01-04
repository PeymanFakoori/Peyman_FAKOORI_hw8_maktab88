const div=document.createElement("div")
document.body.appendChild(div);

const myTask = document.createElement("h1")
div.appendChild(myTask)

const myTaskText = document.createTextNode("My Task")
myTask.appendChild(myTaskText)

const orderdList = document.createElement("ol")
div.appendChild(orderdList)

const orderItem1 = document.createElement("li")
orderdList.appendChild(orderItem1)

const orderItem1Text = document.createTextNode("user dashbord")
orderItem1.appendChild(orderItem1Text)

const orderItem2 = document.createElement("li")
orderdList.appendChild(orderItem2)

const orderItem2Text = document.createTextNode("admin dashbord")
orderItem2.appendChild(orderItem2Text)

const orderItem3 = document.createElement("li")
orderdList.appendChild(orderItem3)

const orderItem3Text = document.createTextNode("autentication")
orderItem3.appendChild(orderItem3Text)

const unOrdered = document.createElement("ul")
orderItem3.appendChild(unOrdered)
const unOrderItem1 = document.createElement("li")
const unOrderItem1Text = document.createTextNode("login")
unOrdered.appendChild(unOrderItem1)
unOrderItem1.appendChild(unOrderItem1Text)

const unOrderItem2 = document.createElement("li")
const unOrderItem2Text = document.createTextNode("register")
unOrdered.appendChild(unOrderItem2)
unOrderItem2.appendChild(unOrderItem2Text)

const unOrderItem3 = document.createElement("li")
const unOrderItem3Text = document.createTextNode("logout")
unOrdered.appendChild(unOrderItem3)
unOrderItem3.appendChild(unOrderItem3Text)

const orderItem4 = document.createElement("li")
orderdList.appendChild(orderItem4)

const orderItem4Text = document.createTextNode("about page")
orderItem4.appendChild(orderItem4Text)

const orderItem5 = document.createElement("li")
orderdList.appendChild(orderItem5)

const orderItem5Text = document.createTextNode("content page")
orderItem5.appendChild(orderItem5Text)

const input = document.createElement("input")
div.appendChild(input)

const button = document.createElement("button")
const buttonText = document.createTextNode("add task")
button.appendChild(buttonText)
div.appendChild(button)


div.style.width = "350px";
div.style.height = "300px";
div.style.border = "3px solid black";
div.style.padding = "15px";
div.style.margin= "auto";
myTask.style.color = "red"
orderdList.style.listStyleType ="upper-roman"
unOrderItem2.style.textDecoration = "line-through"
orderItem5.style.textDecoration = "line-through"
button.style.marginLeft = "5px"