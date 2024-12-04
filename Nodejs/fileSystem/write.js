import fs from "fs/promises"


async function writefile() {
    let data="hello......."
    try{
    let read=await fs.writeFile("data.son",data)
    console.log("success");
    
    }
    catch (err){

        console.log(err.message);//not good practice
        
    }
}
writefile()