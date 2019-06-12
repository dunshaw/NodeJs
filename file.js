const fs = require('fs');

// 创建文件(覆盖写入)
fs.writeFile('write.txt','今年是星期三,明天周四',(err)=>{
    console.log(err);
})
// 写入文件
fs.appendFile('write.txt','你好啊，美女你好啊，美女你好啊，美女你好啊，美女',(err)=>{
    console.log(err);
})
// 读取文件
fs.readFile('write.txt','utf-8',(err,data)=>{
    console.log(err);
    console.log(data);
    // console.log(data.toString('utf-8'));      // 默认的是二进制的数据流，buffer
})
// 删除文件
fs.unlink('./write.txt',(err)=>{
    console.log(err);
})