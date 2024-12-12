// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const arr3 = [...arr1,...arr2];
// console.log(arr3);

// const obj1 = {
//     name1:'chanuka',
//     address1:'laxapana'
// };

// const obj2 = {
//     name2:'kamal',
//     address2:'colombo'
// };

// const obj3 ={...obj1,...obj2};

// console.log(obj3);

// function sum(a,b,c){
//    console.log(a+b+c);
   
// }

// const arr1 = [1,2,3];
// const obj1 = { 
//     one:10,
//     two:20,
//     three:30              
// }

// sum(...arr1);
// sum(...Object.values(obj1));

const arr1 = [1,2,3];
const arr2 = [...arr1];

arr1[0] =5;

console.log(arr1,arr2);

const obj1 = {
    one:10,
    two:20,
    three:30
}

const obj2 ={...obj1};

obj2['one'] = 50;

console.log(obj1,obj2);
