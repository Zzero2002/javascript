

function checky(){
    document.getElementsByClassName("list");
    var green = document.getElementsByClassName("lists1")[0];
    green.style.background = "green";
    green.style.border = "2px solid black";
    
}
function deleted(){
    var red = document.getElementsByClassName("lists1")[0];
    red.parentNode.removeChild(red)
}
function checky2(){
    document.getElementsByClassName("list");
    var green = document.getElementsByClassName("lists2")[0];
    green.style.background = "green";
    green.style.border = "2px solid black";
    
}
function deleted2(){
        document.getElementsByClassName("list");
    var red = document.getElementsByClassName("lists2")[0];
    red.parentNode.removeChild(red)
}
function checky3(){
    document.getElementsByClassName("list");
    var green = document.getElementsByClassName("lists3")[0];
    green.style.background = "green";
    green.style.border = "2px solid black";
    
}
function deleted3(){
    document.getElementsByClassName("list");
    var red = document.getElementsByClassName("lists3")[0];
    red.parentNode.removeChild(red)
}


function function1() {
    var ul = document.getElementById("first");
    var lio = document.getElementsByTagName("li");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    button1.appendChild(document.createTextNode("&#128151;"))
    button2.appendChild(document.createTextNode("&#128514;"))
    var li = document.createElement("li");
    var x = document.getElementById("text").value
    li.appendChild(document.createTextNode(x));
    ul.appendChild(li);
    button1.classList.add("bt1");
    button2.classList.add("bt2");
    button1.style.float="right";
    button2.style.float="right";

    li.appendChild(button1);
    li.appendChild(button2);
    li.setAttribute("class", "lists4");

  }

function deleted4(){
    document.getElementsByClassName("list");
var red = document.getElementsByClassName("lists4")[0];
red.parentNode.removeChild(red)
}
function checky4(){
document.getElementsByClassName("list");
var green = document.getElementsByClassName("lists4")[0];
green.style.background = "green";
green.style.border = "2px solid black";
}



