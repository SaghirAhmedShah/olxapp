var addDiv;
var productName;
var addr;
var rate;
var discription;
var productNameText;

var addrText;
var rateText;
var discriptionText;

var rateU;
var productNameU;
var addButtonText;
var discriptionU;
var divFooterU;
var mainDiv;
var time;
var addButtonTextU;
var divFooter;
var divP;
var addButton;
var UpDatedAdds=document.childNodes[1].childNodes[2].childNodes[13];

var body = document.childNodes[1].childNodes[2];
var upNavbar=document.getElementsByClassName("up-navbar")
upNavbar1=body.childNodes[1];
upNavbar1=upNavbar;

// upNavbar.appendChild(awian123)
// var container = document.createElement("div")
// container.setAttribute("class", "container")
var main=document.getElementById("Main")
var myAdds=document.getElementById("my-adds")
// var myAddsP=document.createElement("h2")
// var myAddText=document.createTextNode("Your Adds")
// myAddsP.setAttribute("class","MyAdds")
// myAddsP.appendChild(myAddText)



var totalAdds=document.createElement('div')
totalAdds.setAttribute("class","Total-adds")





var formDiv = document.createElement("div")
formDiv.setAttribute("class", "form-elements")

var olxLogo=document.createElement("img")
olxLogo.setAttribute("src","images/olxlogo.jpg")
olxLogo.setAttribute("class","olxlogo")
console.log(olxLogo)

var input1 = document.createElement("input")
input1.setAttribute("type", "text")
var input1Text = document.createTextNode("Name")
// var br1 = document.createElement("br")
input1.setAttribute("class", "input1")


var input2 = document.createElement("input")
input2.setAttribute("type", "number")
var input2Text = document.createTextNode("Price")
// // var br2 = document.createElement("br")
input2.setAttribute("class", "input2")


var input3 = document.createElement("input")
input3.setAttribute("type", "text")
var input3Text = document.createTextNode("Discription")

// // var br3 = document.createElement("br")
input3.setAttribute("class", "input3")


var input4 = document.createElement("input")
input4.setAttribute("type", "text")
var input4Text = document.createTextNode("Address")

// // var br4 = document.createElement("br")
input1.setAttribute("class", "input4")

addButton = document.createElement("button")
addButtonText = document.createTextNode("Add")
addButton.appendChild(addButtonText)
addButton.setAttribute("onclick", "addButtonF()")
addButton.setAttribute("class", "add-button")


formDiv.appendChild(olxLogo)
formDiv.appendChild(input1Text)
formDiv.appendChild(input1)
// formDiv.appendChild(br1)


formDiv.appendChild(input2Text)
formDiv.appendChild(input2)
// formDiv.appendChild(br2)

formDiv.appendChild(input3Text)
formDiv.appendChild(input3)
// formDiv.appendChild(br3)

formDiv.appendChild(input4Text)
formDiv.appendChild(input4)
formDiv.appendChild(addButton)








// var mainDiv = document.createElement("div")
// mainDiv.setAttribute("class", "main-div")
// var img = document.createElement("img")
// img.setAttribute("src", "212.png")
// img.setAttribute("alt", "mobile-Add")
// img.setAttribute("class", "add1")


// var rate = document.createElement("h1")
// var rateText = document.createTextNode("RS 40000")
// rate.appendChild(rateText)
// rate.setAttribute("class", "rate")


// var productName = document.createElement("p")
// var productNameText = document.createTextNode("oppo reno 2f")
// productName.appendChild(productNameText)
// productName.setAttribute("class", "product-name")


// var discription = document.createElement("p")
// var discriptionText = document.createTextNode("8/128 warranty 6 mnth complete accessories except box")
// discription.appendChild(discriptionText)
// discription.setAttribute("class", "discription")


// var divFooter = document.createElement("div")
// divFooter.setAttribute("class", "footer-div")

// var addr = document.createElement("p")
// var addrText = document.createTextNode("karachi lahor")
// addr.appendChild(addrText)
// addr.setAttribute("class", "addr")


// var time = document.createElement("p")
// var timeText = document.createTextNode("today")
// time.setAttribute("class", "time")
// time.appendChild(timeText)

// divFooter.appendChild(addr)
// divFooter.appendChild(time)






// mainDiv.appendChild(img)
// mainDiv.appendChild(rate)
// mainDiv.appendChild(productName)
// mainDiv.appendChild(discription)
// mainDiv.appendChild(divFooter)



main.appendChild(formDiv)
// container.appendChild(mainDiv)








// body.appendChild(container)







function addButtonF() {
    
    if (input1.value == "" || input2.value == "" || input3.value == "" || input4.value == "") {
        alert("Form is empty!Plese fill")
    }
    else {
        // myAdds.appendChild(myAddsP)
        
        addDiv = document.createElement("div")
        addDiv.setAttribute("class", "Add-div")
        
        mainDiv = document.createElement("div")
        mainDiv.setAttribute("class", "main-div")
        var img = document.createElement("img")
        img.setAttribute("src", "212.png")
        img.setAttribute("alt", "mobile-Add")
        img.setAttribute("class", "add1")
        
        
        rate = document.createElement("h1")
        rateText = document.createTextNode(input2.value)
        rate.appendChild(rateText)
        rate.setAttribute("class", "rate")
        
        
        productName = document.createElement("p")
        productNameText = document.createTextNode(input1.value)
        productName.appendChild(productNameText)
        productName.setAttribute("class", "product-name")
        
        
        discription = document.createElement("p")
        discriptionText = document.createTextNode(input3.value)
        discription.appendChild(discriptionText)
        discription.setAttribute("class", "discription")
        
        
        divFooter = document.createElement("div")
        divFooter.setAttribute("class", "footer-div")
        
        addr = document.createElement("p")
        addrText = document.createTextNode(input4.value)
        addr.appendChild(addrText)
        addr.setAttribute("class", "addr")
        
        
        time = document.createElement("p")
        var timeText = document.createTextNode("today")
        time.setAttribute("class", "time")
        time.appendChild(timeText)
        
        
        
        
        
        
        
        divFooter.appendChild(addr)
        divFooter.appendChild(time)
        
        mainDiv.appendChild(img)
        mainDiv.appendChild(rate)
        mainDiv.appendChild(productName)
        mainDiv.appendChild(discription)
        mainDiv.appendChild(divFooter)
        
        
        var addFooter = document.createElement("div")
        addFooter.setAttribute("class", "add-footer")
        
        var dltButton = document.createElement("button")
        var dltButtonText = document.createTextNode("Delete")
        dltButton.appendChild(dltButtonText)
        dltButton.setAttribute("class", "dlt-button")
        dltButton.setAttribute("onclick", "dltButtonF(this)")
        
        var editButton = document.createElement("button")
        var editButtonText = document.createTextNode("Edit")
        editButton.appendChild(editButtonText)
        editButton.setAttribute("onclick", "editButtonF(this)")
        
        editButton.setAttribute("class", "edit-button")
        addFooter.appendChild(editButton)
        addFooter.appendChild(dltButton)
        
        
        
        addDiv.appendChild(mainDiv)
        addDiv.appendChild(addFooter)
        // console.log(document.childNodes[1].childNodes[2].childNodes[13])
        // addDiv.appendChild(editButton)
        totalAdds.appendChild(addDiv)
        myAdds.appendChild(totalAdds)
        // container.appendChild(mainDiv)
        // container.appendChild(dltButton)
        // divP=mainDiv;
    }
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
    
    
}

function dltButtonF(target) {
    parentTarget = target.parentNode.parentNode;
    
    totalAdds.removeChild(parentTarget)
}

function editButtonF(contant) {
    // console.log(contant.parentNode.parentNode.childNodes[0].childNodes[4])
    eParentTarget = contant.parentNode.parentNode;
    // console.log(ep)
    input1.value = contant.parentNode.parentNode.childNodes[0].childNodes[2].textContent;
    input2.value = contant.parentNode.parentNode.childNodes[0].childNodes[1].textContent;
    input3.value = contant.parentNode.parentNode.childNodes[0].childNodes[3].textContent;
    input4.value = contant.parentNode.parentNode.childNodes[0].childNodes[4].childNodes[0].textContent;



    addButton.removeChild(addButtonText)
    addButton.setAttribute("onclick", "Save(this)")
    addButtonText = document.createTextNode("Save")
    addButton.appendChild(addButtonText)


}
function Save(sTarget) {

    // sTarget=eParentTarget.childNodes[0] ;
    mainDiv = eParentTarget.childNodes[0];

    console.log(mainDiv.childNodes[1], rate);
    rate=mainDiv.childNodes[1];
    productName=mainDiv.childNodes[2];
    discription=mainDiv.childNodes[3];





    // divFooter=eParentTarget.childNodes[0].childNodes[1];
    // console.log(divFooter)  
    mainDiv.removeChild(rate)
    mainDiv.removeChild(productName)
    mainDiv.removeChild(discription)



    divFooter = mainDiv.childNodes[1];
    addr=divFooter.childNodes[0]
    time=divFooter.childNodes[1]



    console.log(divFooter)
    divFooter.removeChild(divFooter.childNodes[0])
    divFooter.removeChild(divFooter.childNodes[0])

    rate = document.createElement("h1")
    rateText = document.createTextNode(input2.value)
    rate.appendChild(rateText)
    rate.setAttribute("class", "rate")


    productName = document.createElement("p")
    productNameText = document.createTextNode(input1.value)
    productName.appendChild(productNameText)
    productName.setAttribute("class", "product-name")

    discription = document.createElement("p")
    discriptionText = document.createTextNode(input3.value)
    discription.appendChild(discriptionText)
    discription.setAttribute("class", "discription")

    // var abc=document.getElementsByClassName('footer-div')
    // console.log(abc.)
    addr = document.createElement("p")
    addrText = document.createTextNode(input4.value)
    addr.appendChild(addrText)
    addr.setAttribute("class", "addr")

    // console.log(eParentTarget)

    // divFooter.removeChild(time)
    // console.log(rate)
    mainDiv.appendChild(rate)
    mainDiv.appendChild(productName)
    mainDiv.appendChild(discription)
    divFooter.appendChild(addr)
    divFooter.appendChild(time)
    mainDiv.appendChild(divFooter)
    // eParentTarget.appendChild(mainDiv)


    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";

    addButton.removeChild(addButtonText)
    addButton.setAttribute("onclick", "addButtonF(this)")
    addButtonText = document.createTextNode("Add")
    addButton.appendChild(addButtonText)


}