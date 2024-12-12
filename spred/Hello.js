const arr1 = [1,2,3];

function sum(a,b,c){
    return a+b+c;

}

console.log(sum(...arr1));

const obj1 = {
    first:10,
    second:20
}

const obj2 = {
    third:30,
    fourth:40
}

const obj3 = {...obj1,...obj2};
console.log(obj3);
