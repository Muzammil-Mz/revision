import fs from "fs/promises"
//used to append data... 

async function update() {
try{
    let data="new writings"
    await fs.appendFile("data.json",data)
}
catch(err){
    console.log(err);
    
}
}
update()