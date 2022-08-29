// //function method////////////

function Person(fullname,money,sleep,health){
    this.fullname= fullname
    this.money = money
    this.sleep = sleep
    this.health = health

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
const ahmed = new Person('Ahmed hussein',1,9,3)
console.log( ahmed.fullname)
ahmed.sleepy() + ahmed.eat() + ahmed.buy()

// // class method /////////////

// class Person{
// constructor(fullname,money,sleep,health){
//     this.fullname= fullname
//     this.money = money
//     this.sleep = sleep
//     this.health = health

//     this.sleepy = function (){
//         if(sleep == 7){
//             console.log("happy")
//         }else if(sleep < 7 ){
//             console.log("tired")
//         }else if(sleep > 7){
//             console.log("lazy")
//         }
//     }
//     this.eat = function(){
//         if(health == 3){
//             console.log("100 health rate")
//         }else if(health ==2){
//             console.log("75 health care")
//         }else if(health == 1){
//             console.log("50 health care")
//         }
//     }
//     this.buy = function(){
//         if(money == 1){
//             console.log("decrease money by 10")
//         }
//     }
// }
// }
// const ahmed = new Person('Ahmed hussein',1,9,3)
// console.log( ahmed.fullname)
// ahmed.sleepy() + ahmed.eat() + ahmed.buy()


// ///////  OLOO METHOD /////////////
// const Person ={
// init(fullname,money,sleep,health){
//     this.fullname= fullname
//     this.money = money
//     this.sleep = sleep
//     this.health = health

//     this.sleepy = function (){
//         if(sleep == 7){
//             console.log("happy")
//         }else if(sleep < 7 ){
//             console.log("tired")
//         }else if(sleep > 7){
//             console.log("lazy")
//         }
//     }
//     this.eat = function(){
//         if(health == 3){
//             console.log("100 health rate")
//         }else if(health ==2){
//             console.log("75 health care")
//         }else if(health == 1){
//             console.log("50 health care")
//         }
//     }
//     this.buy = function(){
//         if(money == 1){
//             console.log("decrease money by 10")
//         }
//     }
//     return this
// }

// }
// const ahmed =Object.create(Person).init('Ahmed hussein',1,9,3)
// console.log( ahmed.fullname)
// ahmed.sleepy() + ahmed.eat() + ahmed.buy()

    //// factory ////

// function Person(fullname,money,sleep,health){
//         return{ 
//         fullname,
//          money,
//          sleep,
//          health,
        
//         sleepy() {
//             if(sleep == 7){
//                 console.log("happy")
//             }else if(sleep < 7 ){
//                 console.log("tired")
//             }else if(sleep > 7){
//                 console.log("lazy")
//             }
//         },
//         eat() {
//             if(health == 3){
//                 console.log("100 health rate")
//             }else if(health ==2){
//                 console.log("75 health care")
//             }else if(health == 1){
//                 console.log("50 health care")
//             }
//         },
//         buy() {
//             if(money == 1){
//                 console.log("decrease money by 10")
//             }
//         }
//     }
//     }
    
    
//     const ahmed =Person('Ahmed hussein',1,9,3)
//    console.log( ahmed.fullname)
//     ahmed.sleepy() + ahmed.eat() + ahmed.buy()