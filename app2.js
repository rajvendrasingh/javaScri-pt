class person{
    constructor(name){
        this.spcies=("homogenious")
        this.name=name;
    }
    eat(){
        console.log("eat");
    }
    // sleep(){
    //     console.log("sleep");
    // }
    // work(){
    //     console.log("do nothing");
    //}
}

class enginner extends person{
    constructor(name){
       
        super(name);     // invoke parent class constructor
       
       
    }
    work(){
        super.eat();
        console.log("solve problem and build somthing");
    }
}
let rajobj =new enginner("raj");

// class dr extends person{
//     work(){
//         console.log("treat patient");
//     }
// }
// let raj =new dr();
