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

      import fs from "fs";

      fs.readFile("chhavi.txt", "utf-8", (err, data) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
        }
      })
     
      fs.promises.readFile("chhavi.txt","utf-8")
      .then((data => console.log(data)))
      .catch((err => console.log(err)))
function wakeup() {
    return Promise.resolve("mai soke utha abhi");
}

function brushkia() {
    return Promise.resolve("mai brush kiya");
}

function bfkia() {
    return Promise.resolve("mai breakfast kiya");
}

function wokrpegya() {
    return Promise.resolve("mai work pe gaya");
}

function vapisaaya() {
    return Promise.resolve("mai wapas aaya");
}

function dinnerkia() {
    return Promise.resolve("mai dinner kiya");
}
wakeup()
.then(() =>{console.log("me utha eek bar")
return brushkia()
})
.then(()=>{
    console.log("main utha 2 bar")
    return bfkia()
})
.then(()=>{
    console.log("main utha 3 bar")
    return wokrpegya()
})
.then(()=>{
    console.log("main uth 4 bar")
    return vapisaaya()
})
.then(()=>{
    console.log("main uth 5 bar")
    return dinnerkia()
})
