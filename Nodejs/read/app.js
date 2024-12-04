import fs from "fs"
// const read=require("readline-sync")
// let name=read.question("whats your name: ")
// console.log(`Hey Welcome ${name}`);

// fs for es5
// fs/promises for es6

//read data using es5
let read=fs.readFile("1.js","utf-8",(err,data)=>{
    if (err){
        console.log(err);
        
    }
    else {
        console.log(data);
        
    }
})