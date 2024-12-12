function addShuwer(){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        const shuwer=true;
        if(shuwer){
            console.log("you take shuwer");
            resolve("you took shuwer");
        }else{
            reject("you dont took shuwer");
        }
         
      },3000);
   });
}

function completeHomework(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        const homework = true;
        if(homework){
            console.log("you do your homework");
            resolve("you complete your homewok");
        }else{
            reject("you didnot complete your homework");
        }
        
       },2000);
    });
}

function play(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const play = true;
            if(play){
                console.log("you play what you like");
                resolve("you played what you like");
            }else{
                reject("you do not play");
            }
          
               
        },1000);
    });
}

addShuwer()
.then((result)=>{
  console.log(result);
  return completeHomework()})
.then((result)=>{
   console.log(result);
   return play()})
.then((result)=>{
   console.log(result);
   console.log("All done" );
}).catch((err)=>{
   console.log(err);
   
});
