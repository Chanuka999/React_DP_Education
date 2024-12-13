function fileopen(callback){
    setTimeout(()=>{
        console.log("file open");
        callback();
    },3000);
    
}

function addsomthing(){
    console.log("add somthing");
    
}

function removesomthig(){
    console.log("removesomthing");
    
}
fileopen(addsomthing);

fileopen(removesomthig);

