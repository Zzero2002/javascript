const numbers =[];
for (var n =0;n<=5;n++){
    var x = parseInt(prompt("enter the numbers"));
    numbers.push(x);
}
console.log(numbers)
alert(numbers);
var sum = 0;
var average = 0;
for(var i = 0; i < numbers.length;i++){
 sum +=  numbers[i];
 average = sum / numbers[i];
}
alert(sum);
alert(average);
