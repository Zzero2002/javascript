var shape = prompt("enter the name of the shape")
// var circle = "";
// var rectangle = "";
// var triangle = "";
// var parallelogram = "";
// var trapezium = "";
// var eclipse = "";


if(shape == "square"){
   var side = parseInt(prompt("enter the length of the side"));
    
    alert("the area is = side^2 = " + side ^ 2);

}
else if(shape == "rectangle"){
   var length = parseInt(prompt("enter the length"));
   var width = parseInt(prompt("enter the width"));
    
    alert("the area is =  length * width = " + length * width);

}
else if(shape == "triangle"){
   var base = parseInt(prompt("enter the base"));
   var height = parseInt(prompt("enter the height"));
    
    alert("the area is = 1/2 * base * height = " + 1/2 * base * height);

}
else if(shape == "circle"){
   var radius = parseInt(prompt("enter the radius"));
    
    alert("the area is = 3.14 * radius^2 = " + 3.14 * radius^2);

}
else if(shape == "parallelogram"){
   var base = parseInt(prompt("enter the base"));
   var height = parseInt(prompt("enter the height"));
    
    alert("the area is = base * height = " + base * height);

}
else if(shape == "trapezium"){
   var length1 = parseInt(prompt("enter the legnth 1"));
   var lenght2 = parseInt(prompt("enter the length 2"));
   var height = parseInt(prompt("enter the height"));
    
    alert("the area is = 1/2 *(a+b) * height =  " + 1/2 *(length1+lenght2) * height);

}
else if(shape == "ellipse"){
    var minor_axis = parseInt(prompt("enter the minor"));
    var major_axis = parseInt(prompt("enter the major"));
     
     alert("the area is = 3.14 * minor * major =" + 3.14* minor_axis * major_axis);
 
 }