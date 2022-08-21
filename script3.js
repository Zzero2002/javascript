var time = parseInt(prompt("enter the time"))
if(time == 00){
    alert("it is 12 AM")
}else if(time == 12){
    alert("it is 12 PM")
}else if(time > 0 && time < 12){
    alert(time + " " + "AM")
}else if(time > 12 && time < 24){
    alert(time -12 + " " + "PM")
}