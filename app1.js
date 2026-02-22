// setTimeout(()=>{
//     console.log("hello")
// },3000)
// callback in javascript

//  function getData (dataId,getnextData){
//     setTimeout(()=>{
//         console.log("data",dataId)
//         if(getnextData){
//         getnextData();}
//     },2000);
 
// }
// getData(1,()=>{
//      getData(2)
// });
// function student(a,b,){
//     setTimeout(()=>{
//         console.log("student",a)
//         if(b){
//             b();
//         }
       
        
//     },2000)
// }
// // tis is called callback hell
// student("rajvendra",()=>{
//     console.log("student");
//     student("shikhar",()=>{
//         console.log("student");
//     student("shivam",()=>{
//         console.log("student");
//         student("sekhar")
     
        
//     });
//     });
// });

// promises in java script

let promise=new Promise((resolve, reject) => {
    console.log("i am a student")
    reject("error")
})



