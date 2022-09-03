function circle1(){
    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    var s3 = document.getElementById("s3");
    var s4 = document.getElementById("s4");
    var s5 = document.getElementById("s5");
    var s6 = document.getElementById("s6");
    s2.style.display = 'none';
    s3.style.display = 'none';
    s4.style.display = 'none';
    s5.style.display = 'none';
    s6.style.display = 'none';
    s1.style.display = 'block';
}
var c1 = document.getElementById("c1")
c1.addEventListener("click",circle1)

function circle2(){
    var s1 = document.getElementById("s1")
    var s2 = document.getElementById("s2")
    var s3 = document.getElementById("s3")
    var s4 = document.getElementById("s4")
    var s5 = document.getElementById("s5")
    var s6 = document.getElementById("s6")
    s2.style.display = 'block';
    s1.style.display = 'none';
    s3.style.display = 'none';
    s4.style.display = 'none';
    s5.style.display = 'none';
    s6.style.display = 'none';
}
var c2 = document.getElementById("c2")

c2.addEventListener("click",circle2)


function circle3(){
    var s1 = document.getElementById("s1")
    var s2 = document.getElementById("s2")
    var s3 = document.getElementById("s3")
    var s4 = document.getElementById("s4")
    var s5 = document.getElementById("s5")
    var s6 = document.getElementById("s6")
    s2.style.display = 'none';
    s1.style.display = 'none';
    s3.style.display = 'block';
    s4.style.display = 'none';
    s5.style.display = 'none';
    s6.style.display = 'none';
}
var c3 = document.getElementById("c3")

c3.addEventListener("click",circle3)

function circle4(){
    var s1 = document.getElementById("s1")
    var s2 = document.getElementById("s2")
    var s3 = document.getElementById("s3")
    var s4 = document.getElementById("s4")
    var s5 = document.getElementById("s5")
    var s6 = document.getElementById("s6")
    s2.style.display = 'none';
    s1.style.display = 'none';
    s3.style.display = 'none';
    s4.style.display = 'block';
    s5.style.display = 'none';
    s6.style.display = 'none';
}
var c4 = document.getElementById("c4")

c4.addEventListener("click",circle4)


function circle5(){
    var s1 = document.getElementById("s1")
    var s2 = document.getElementById("s2")
    var s3 = document.getElementById("s3")
    var s4 = document.getElementById("s4")
    var s5 = document.getElementById("s5")
    var s6 = document.getElementById("s6")
    s2.style.display = 'none';
    s1.style.display = 'none';
    s3.style.display = 'none';
    s4.style.display = 'none';
    s5.style.display = 'block';
    s6.style.display = 'none';
}
var c5 = document.getElementById("c5")

c5.addEventListener("click",circle5)

function circle6(){
    var s1 = document.getElementById("s1")
    var s2 = document.getElementById("s2")
    var s3 = document.getElementById("s3")
    var s4 = document.getElementById("s4")
    var s5 = document.getElementById("s5")
    var s6 = document.getElementById("s6")
    s2.style.display = 'none';
    s1.style.display = 'none';
    s3.style.display = 'none';
    s4.style.display = 'none';
    s5.style.display = 'none';
    s6.style.display = 'block';
}
var c6 = document.getElementById("c6")

c6.addEventListener("click",circle6)

var index = 0; 
var slides = document.getElementsByClassName("slide1")
var next = document.getElementById("right")
var previous = document.getElementById("left")

function showslides(x){
    if(x > slides.length -1){
        index=0;
    }
    if(x < 0){
        index = slides.length -1;
    }
    for(var i = 0;i < slides.length;i++){
		slides[i].style.display = "none"; 

    }
	slides[index].style.display = "block";
}
next.onclick = function(){
    index +=1;
    showslides(index);
}
previous.onclick = function() {
	index -= 1; 
	showslides(index); 
} 
showslides(index); 
