function xyx(){
    var x = document.getElementById("text").value
    var y = document.getElementById("password").value
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if(regex.test(y)=== true){
        alert("welcome" + x);
        console.log("welcome"+y)
    }else{
         alert("your password should contains numbers,special number,capital letter")
        console.log(y)
    }
    

}
