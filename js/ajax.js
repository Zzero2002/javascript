// function load() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function() {
//       document.getElementById("display").innerHTML = this.responseText;
//      var x =  JSON.parse(this.responseText)
//      mytext=  "";
//      for(var i = 0;i<x.length;i++){
//       console.log(x[i])
//      }
//     }
//      xhttp.open("GET", "https://reqres.in/api/users/email/2");
//     xhttp.send();
//   }
fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(res => {
        res.data.map(user => {
            document.write (`<table> <tr><td><h1 style="display:inline-block">${user.email}</h1></td> <td> <img style="display:inline-block" src=${user.avatar}></td><tr>`);
        });
    });
// function load(){
//   var xttp = new XMLHttpRequest();
//   xttp.onreadystatechange = function(){
//     if(this.readyState ===4 && this.status ===200){
//       // console.log(this.responseText);
//       var obj = JSON.parse(this.responseText);
//       myText =  '';
//     for(var i = 0;i < obj.length;i++){
//       console.log(obj[i].data);
//       myText = myText + obj[i].data + '<br>'
//       console.log(myText)
//     }
//     document.getElementById("display").innerHTML=myText
//     }
//   }
//   xttp.open("GET","users.json",true)
//   xttp.send();
// }