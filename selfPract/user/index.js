import fs from "fs/promises"
import readline from "readline-sync"


async function registerUser() {
    let dbread=await fs.readFile("./db.json","utf-8")
    let finalDB=JSON.parse(dbread)

    let userinputname=readline.question("enter name: ")
    let userinputpassword=readline.question("enter password: ")

    let dubcheck=finalDB.users.some((x)=>x.username===userinputname )
    if (dubcheck){
        console.log("name already exists");
        
    }

    let userObjecyt={
        username:userinputname,
        password:userinputpassword
    }

finalDB.users.push(userObjecyt)
let sendingdb=JSON.stringify(finalDB)
await fs.writeFile("./db.json",sendingdb)
console.log("Data sent success");

}

export {registerUser}