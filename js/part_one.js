function xyx(){
    var x = document.getElementById("text").value
    var y = document.getElementById("password").value
    if(x=="admin" && y =="123"){
        alert("welcome" + x);
        console.log("welcome"+x)
    }else{
        alert("no registeration found")
    }
}
// alert("welcome")