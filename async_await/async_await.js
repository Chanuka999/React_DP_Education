function completeBath(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const shuwer = true;
            if(shuwer){
                console.log("you take shuwer");
                resolve("you took shuwer");
            }else{
                reject("you dont take shuwer");
            }
           
        },3000);
    });
}

function dohomework(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const homework=true;
            if(homework){
                console.log("you do homework");
                resolve("you do homework");
            }else{
               reject("you dont homework");
            }
         
        },2000);
    });
}

function play(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          const play=true;
          if(play){
            console.log("what like you play");
            resolve("what like you play");
            
          }else{
            reject("you dont like to play");
          }
        },1000);  
    });
}

async function doAll(){
    try{
       const data= await completeBath();
       console.log(data);
       
        await dohomework();
        await play();
    }catch(error){
        console.log(error);
        
    }
   
} 

doAll();