 function api(){
    return new promise ((resolve,reject)=>{
        setTimeout(() => {
            console.log("weather")
        resolve(200);
        }, 2000);
    });
  
}
async function getweatherData(){
    await api();
}



function getData(){
    return new Promise((resolve, reject) => {
        console.log("geting data....") 
        setTimeout(()=>{
           console.log("data1");
           resolve("succes");
        },4000);
    });
};
function getData1(){
      console.log("geting data....") 
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
           console.log("data2");
           resolve("succes");
        },4000);
    });
};
function getData2(){
      console.log("geting data....") 
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
           console.log("data3");
           resolve("succes");
        },4000);
    });
};
// console.log("getting data1....")
// getData().then((res)=>{
//     console.log(res);
//     console.log("getting data2....")
// getData1().then((res)=>{
//     console.log(res);

//     console.log("getting data3....")
// getData2().then((res)=>{
//     console.log(res);
// })

// })
// })
// promise chaning ;


// getData().then((res)=>{
    
//     return getData1();

// }).then((res)=>{
//   return getData2();
// }).then((res)=>{
//     console.log(res);
// });

   