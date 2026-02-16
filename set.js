function ayush(){
    console.log("hello");
}
setTimeout(()=>{
    ayush()
},2000)
setTimeout(()=>{
    console.log("1");
setTimeout(()=>{
    console.log("2");
setTimeout(()=>{
    console.log("3");
setTimeout(()=>{
    console.log("4");
setTimeout(()=>{
    console.log("5");},2000)
    },2000)
    },2000)
     },2000)
      },2000)
      const nayapromise=new Promise((resolve,reject)=>{
        let deliver= true;
        if(deliver){
            resolve("deliver ho gya")
        }
        reject("nhi huaa deliver")
      });
      nayapromise
      .then(() =>console.log("ye mera hua resolve"))
      .catch(()=> console.log("ye mera ni hua resolve"))
