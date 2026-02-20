// // quistion no.1
let DATA= "secret information";
class user {
    constructor(name,email){
    this.name=name;
    this.email=email


    }  
    viewData(){
        console.log("data",DATA);
    };
};
// quistion no2.
class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    
    // constructor(name, email){
    //     super(name, email);
    // }
    
        editData(){
        DATA="edit web data";
        }
    };
let student1 = new user("raj","abc@gmail.com");
let student2 = new user("shivam","bcd@gmail.com");
let student3 = new user("yash","efg@gmail.com");
let teacher1 = new user("deain","college@gmail.com");
let admin1 = new Admin("admin","admin@gmail.com")


// error handing
let a =5;
let b=10;
console.log("a =",a);
console.log("b =",b);
console.log("a+b =",a+b);
try{                      // error
console.log("a+b =",a+c);}
catch (err){
console.log("error")
}
console.log("a+b =",a+b);
console.log("a+b =",a+b);