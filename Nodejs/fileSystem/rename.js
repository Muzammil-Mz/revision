import fs from "fs/promises"
async function rename() {
    try{
        let x=await fs.rename("data.son","beta.json")
    
console.log(x);
    }
    catch (err){
        console.log(err);
        
    }


}
rename()