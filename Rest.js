// const arr1 = [3,3,3,3,3];

// function sum(...args){
//     let sum =0;
//    for (const arg of args){
//     sum += arg;
//    }

//    console.log(sum);
   

// }

// sum(...arr1);

const arr1 = [1,2,3,4,5];

const [first,second,...rest_argument] = arr1;

console.log(first);
console.log(second);
console.log(rest_argument);

const obj1 = {
    one:10,
    two:20,
    three:30,
    four:40,
    five:50
}
const {one,two,...rest_obj} = obj1;

console.log(one);
console.log(two);
console.log(rest_obj);






