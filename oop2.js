// class method /////////////
while(true){
var z = prompt("hire emp (add,remove)")
var persons = [];
if(z ==="add"){
    alert("you are about to hire employee")
class Person{
constructor(fullname,money,sleep,health){
    this.fullname= prompt("enter the fullname")
    this.money = prompt("enter your items")
    this.sleep = prompt("enter sleeping hours")
    this.health = prompt("enter the meals")

    this.sleepy = function (){
        if(sleep == 7){
            console.log("happy")
        }else if(sleep < 7 ){
            console.log("tired")
        }else if(sleep > 7){
            console.log("lazy")
        }
    }
    this.eat = function(){
        if(health == 3){
            console.log("100 health rate")
        }else if(health ==2){
            console.log("75 health care")
        }else if(health == 1){
            console.log("50 health care")
        }
    }
    this.buy = function(){
        if(money == 1){
            console.log("decrease money by 10")
        }
    }
}
}

class Employee extends Person{
    constructor(fullname,money,sleep,health,id,email,workmood
        ,salary,manager){
        super(fullname,money,sleep,health);
        this.id = prompt("enter the id")
        this.email = prompt("enter the mail")
        this.salary = prompt("enter the salary")
        this.workmood = prompt("enter the work hours")
        this.manager = prompt("enter if u are a manager or normal ")

       
        this.salarys = function(){
            if(salary >= 1000){
                prompt("it must be greater than 1000")
                prompt("enter the salary");
            }
        }
        this.hours = function(){
            if(workmood == 8){
                console.log("happy")
            }else if(workmood > 8){
                console.log("lazy")
            }else{
                console.log("tired")
            }

    }

    }
}
const zero = new Employee("ahmed hussein",1,7,3,2,'ahmed@gmail.com',9,1000,"normal")
 console.log(zero) ;
 persons.push(zero);
console.log(persons);
class Office{
    constructor(name,employees){
        this.name = name
        this.employees = employees

        this.getallemployees = function(){
            for(let i = 0; i == persons.length;i++){
                persons.push(zero);
                console.log(persons)
            }
            console.log(zero.fullname)

        },
        this.getemployee = function(){
            if(zero.manager === "manager"){
                console.log("your fullname is : "+ zero.fullname ,"And your id is = " +  zero.id ,"And your mail is :" + zero.email , "And your salary is unknown " )
                console.log("you are :") + zero.hours() + console.log("because you work = " + zero.workmood + " hours")
            }else{
                console.log("your fullname is : "+ zero.fullname ,"And your id is = " + zero.id ,"And your mail is :" +  zero.email , "And your salary are = " + zero.salary);
                console.log("you are :") +  zero.hours() + console.log("because you work = " + zero.workmood );
                 
                
            }
        },
        this.gethired = function(){
            console.log("your id is = "+ zero.id ," And your fullname is " + zero.fullname)
        },
        this.getfired = function(){
            console.log("you will get be fired id = " +zero.id);
        }
    }
}
var m = new Office();

m.getallemployees();
m.getemployee();
m.gethired();
m.getfired();
}else{
    var x = prompt("remove the person u want by typing his id")
     if(z==="remove"){    
        alert("you are about to remove someone")
             persons.splice(zero);
             console.log(persons)
         alert("you delete" + persons.id())
     }
 }

}