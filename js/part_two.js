

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

function Addtolocalstorage(tasks){
 window.localStorage.setItem("tasks",tasks);
}

function function1() {
    var ul = document.getElementById("first");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    button1.appendChild(document.createTextNode("Done"))
    button2.appendChild(document.createTextNode("Remove"))
    var li = document.createElement("li");
    var x = document.getElementById("text").value
    li.appendChild(document.createTextNode(x));
    ul.appendChild(li);
    button1.classList.add("bt1");
    button2.classList.add("bt2");
    li.appendChild(button1);
    li.appendChild(button2);
    li.setAttribute("class", "lists4");
    Addtolocalstorage(x);

  }
  Addtolocalstorage()


document.addEventListener("click" , function(e){
if(e.target.className == 'bt2'){
    e.target.parentNode.remove();
}
if(e.target.className == 'bt1'){
    var x = document.getElementsByClassName("lists4")
    e.target.parentNode.style.background = 'green';
    e.target.parentNode.style.border = '2px solid black';
}
})



