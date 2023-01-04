
const form = document.createElement("form");
document.body.appendChild(form);
const userInput = document.createElement("input")
form.appendChild(userInput)
const userInputSpan = document.createElement("span")
form.appendChild(userInputSpan)
const placeholder = userInput.setAttribute("placeholder","نام کاربری")
const div = document.createElement("div")
form.appendChild(div)
const label = document.createElement("label")
div.appendChild(label)
const span = document.createElement("span")
label.appendChild(span)
label.style.marginRight = "10px"
const labelfor = label.setAttribute("for","name")
const spanTextNode = document.createTextNode("رمز عبور")
span.appendChild(spanTextNode)
const passInput = document.createElement("input")
div.appendChild(passInput)
const passInputSpan = document.createElement("span")
form.appendChild(passInputSpan)
const passInputName = passInput.setAttribute("name","name")
const passInputType = passInput.setAttribute("type","password")
const div2 = document.createElement("div")
form.appendChild(div2)
const label2 = document.createElement("label")
div2.appendChild(label2)
const span2 = document.createElement("span")
label2.appendChild(span2)
label2.style.marginRight = "10px"
const labelfor2 = label2.setAttribute("for","name")
const spanTextNode2 = document.createTextNode("تایید رمز عبور")
span2.appendChild(spanTextNode2)
const repassInput = document.createElement("input")
div2.appendChild(repassInput)
const repassInputSpan = document.createElement("span")
form.appendChild(repassInputSpan)
const repassInputName = repassInput.setAttribute("name","name")
const repassInputType = repassInput.setAttribute("type","password")
const button = document.createElement("button")
const buttonText = document.createTextNode("ثبت نام")
button.appendChild(buttonText)
document.body.appendChild(button)
const buttonType = button.setAttribute("type","button")
button.style.color = "green"
userInput.style.direction ="rtl"
userInput.style.display = "block"
userInput.style.marginBottom = "10px"
userInput.style.width = "500px"
userInput.style.height="30px"
userInput.style.borderRadius="5px"
repassInput.style.height ="30px"
repassInput.style.marginTop ="-10px"
repassInput.style.padding ="10px 20px"
repassInput.style.borderRadius="5px"
span2.style.background="#FFF"
span2.style.pading = "0px 10px"
span2.style.position ="relative"
div2.style.display = "flex";
div2.style.flexDirection = "column"
div2.style.width = "500px"
div2.style.direction ="rtl"
div2.style.marginTop = "10px"
passInput.style.height ="30px"
passInput.style.marginTop ="-10px"
passInput.style.padding ="10px 20px"
passInput.style.borderRadius="5px"
span.style.background="#FFF"
span.style.pading = "0px 10px"
span.style.position ="relative"
div.style.display = "flex";
div.style.flexDirection = "column"
div.style.width = "500px"
div.style.direction ="rtl"

button.onclick = function(){
    if(!userInput.value){
        const userSpanTextNode = document.createTextNode("الزامی")
        userInputSpan.appendChild(userSpanTextNode)
        userInputSpan.style.color ="red"
    }
    if (!passInput.value) {
        const passSpanTextNode = document.createTextNode("الزامی")
        passInputSpan.appendChild(passSpanTextNode)
        passInputSpan.style.color ="red"
    }
    if (!repassInput.value) {
        const repassSpanTextNode = document.createTextNode("الزامی")
        repassInputSpan.appendChild(repassSpanTextNode)
        repassInputSpan.style.color ="red"
    }
    if(passInput.value.length < 8 && passInput.value.length>0){
        const passSpanTextNode = document.createTextNode("رمز عبور باید حداقل دارای ۸ کاراکتر باشد")
        passInputSpan.appendChild(passSpanTextNode)
        passInputSpan.style.color ="red"
    }
    includeChar = passInput.value.split('').some(char => char.charCodeAt() > 65 && char.charCodeAt()< 120);
    includeNumber = /[0-9]/.test(passInput.value);

    if(passInput.value && (!includeChar || !includeNumber)) {
        passInputSpan.textContent = "رمز عبور باید شامل یک حرف و یک عدد باشد";
      }
    if(passInput.value !== repassInput.value){
        const repassSpanTextNode = document.createTextNode("رمزهای وارد شده یکسان نیستند")
        repassInputSpan.appendChild(repassSpanTextNode)
        repassInputSpan.style.color ="red"
    }
}