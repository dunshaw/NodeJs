const fs = require('fs')
// 同步读取文件  在关键位置捕获错误信息不能造成程序崩溃
// try{
//     // 可能出错的代码
//     let dirs = fs.readdirSync('./node02')
// }
// catch(err){
//     console.log(err)
// }
// console.log('gogogo')
// 异步读取

fs.readdir('./node2',(err,data)=>{
    // console.log(err);
    // console.log(data);
    if(err){
        console.log(err.Error)       
    }else{
        console.log(data)
    }
})
console.log('ggg')
// 错误的回调优先 在回调函数中，第一个参数表示错误对象，默认为null

/* 
    错误处理：  同步：try catch    异步：错误回调函数
    文件夹的错误
    c(creat) u(update) r(read) d(del)
    
*/