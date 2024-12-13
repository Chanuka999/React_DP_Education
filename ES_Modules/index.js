import { text,hello } from "./extra.js ";
import {readFile} from "fs/promises";

console.log(text);
console.log("test log from index.js");

async function textFile(){
    var data = await readFile('./sample.txt','utf8');
    console.log(data);
    
}
textFile();