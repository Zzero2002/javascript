while(true){
var age =parseInt(prompt("enter ur age"))
if(age <0){
    alert("you must enter a right age");
    parseINT(prompt("enter your age"));
}
else if(age >= 1 && age <= 10){
    alert("you are child");
}
else if(age >= 11 && age <= 18){
    alert("you are Teenager")
}
else if(age >= 19 && age <= 50){
    alert("you are Grown up")
}else if(age > 50){
    alert("you are old")
}else{
    alert("invalid")
    ;   
}
}









