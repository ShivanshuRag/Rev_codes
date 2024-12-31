
const cretePromise = new Promise((resolve , reject)=>{
    setTimeout(()=>{
      console.log(" promise is first");
      resolve()
    }, 1000)

}).then(()=>{
    // console.log("promise is resolved");
});


const promise4 = new Promise((resolve , reject)=>{

    setTimeout(()=>{

        user = false
       if(!user){
        resolve({ username : "shivanshu", age : 21})
       }else{
        reject(" this error on promisse 4")
       }
        
       

    }, 1000)

})
promise4.then((mess)=>{
 console.log(mess);
}).catch((err)=>{
    console.log(err);
})



const promise5 = new Promise((resolve , reject)=>{

    setTimeout(()=>{

        user = true
       if(!user){
        resolve({ username : "shivanshu singh", age : 21})
       }else{
        reject(" this error on promisse 5")
       }
        
       

    }, 1000)

})

async function forPromise5(){
  try {
      const print = await promise5
      console.log(print);
  } catch (error) {
    console.log(error);
  }

}

forPromise5()