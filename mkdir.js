const fs = require('fs');
// 创建文件夹
// fs.mkdir('./test',(err)=>{
//     console.log(err);
// })

// // 文件夹重命名
// fs.rename('./test','./test01',(err)=>{
//     if(err){
//         console.log('失败！')
//     }else{
//         console.log('成功!')
//     }
// })

// 文件夹删除 (只能删除空文件夹)
fs.rmdir('./node01',(err)=>{
    console.log(err)
})