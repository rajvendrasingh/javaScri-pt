// protoType in javascript

// const student={
//     fullname:"Rajvendra",
//     marks:"7.5cgpa",
//     printMarks: function (){
//         console.log("marks =",this.marks);

//     },
// };
// console.log(student)
// const employee = {
// callTax() {
//     console.log("tax rate is 10%");

// },
// };
// const karanArjun ={
//     salary:5000,
//     callTax() {
//     console.log("tax rate is 20%"); 
// },
// };

// karanArjun.__proto__=employee

// classes in java script

class ToyotaCar{
    start() {
     console.log("start");
    }

 stop() {
     console.log("stop");
    }
    
    setBrand(brand){
        this.brandName =brand;
    }
}
// for crating a new obj use class
let fortuner = new ToyotaCar();
fortuner.setBrand="fortuner";
let xuv = new ToyotaCar();
