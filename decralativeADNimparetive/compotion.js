function add(x){
   return x+2;
}

function multify(x){
    return x*3;
}

function sub(x){
    return x-2;
}


let y = sub(multify(add(5)));

console.log(y);

