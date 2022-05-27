// //initialize
// let a = 10;
// let b;
// //re-declaration
// let c = "apple";
// // let c = "banana"
// //re_Assignment
// const e = "red";
// e = "blue";

// // console.log(e);

// let a = 10;

// function house() {
//    let a = 20; //re-declaration
    
//     console.log("1",a)
// }


// house();

// console.log("2",a)
// // console.log("3",a)
// let myName = "Reuben";
// function sayHi() {
//     let myName = "Obama";
//     console.log(myName + " says good morning.");

//     function sayHi2() {

//         console.log(myName + " says good morning again");
//     }
// //sayHi2()
// sayHi2();
// }
// sayHi();
// let myName = "Reuben";

// function sayHi() {     
//     let myName = "Obama";
//     console.log(myName + " says good morning.");
//     //obama
//     sayHi2();  //global scope find function 2
// }
// //-----------------------------
// function sayHi2() { 

//     console.log(myName + " says good morning again");// global scope
// }

// sayHi();

// let myName = "Reuben";
// function sayHi() {    
//     let myName = "Obama";
//     console.log(myName + "says good morning.") 
//     //obama
//     function sayHi2() {
//         console.log(myName + "says good morning again");
//     }

//     function sayHi3() {
//         let myName = "Jacinda";
//         sayHi2();
//     }

//     sayHi3();

// }
// sayHi();

let myName = "Reuben";

function sayHi(){  
   
   console.log(myName + " says good morning.")  //reuben
   function sayHi2(){
     console.log(myName + " says good morning again");
   }//reuben
   function sayHi3(){
      let myName = "Jacinda";
      sayHi2();
    }
sayHi3();
}
sayHi();