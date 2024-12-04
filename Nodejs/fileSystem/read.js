// const fs=require ("fs") es5
// for import type modeule required in package.json
// import fs from "fs" //es6 without promises


//es6 without promises
// fs.readFile("./data.json","utf-8",(err,data)=>{
//     if (err){
//         console.log(err);

//     }else {
//         console.log(data);

//     }
// })




import fs from "fs/promises" // es6 

async function main() {
    try {
        let read = await fs.readFile("data.json", "utf-8")
        console.log(read);

    } catch (error) {
        console.log(error);

    }

}
main()