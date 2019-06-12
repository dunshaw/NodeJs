const fs = require('fs');

fs.readdir('./node01',(err,dirs)=>{
    for(let i of dirs){
        if(fixfile(i)){
            console.log("--"+i)
        }else{
            console.log("+"+i)
        } 
    }
})

function fixfile(dir){
    let stats = fs.statSync('./node01/'+dir)
    return stats.isFile()
}
