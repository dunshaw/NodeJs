const express = require('express');
const app = express()    //express 实例化


// 简单的api接口
app.get('/user/login',(req,res)=>{
    // 接收get参数  req.query
    console.log(req.query);
    console.log('你好');
    res.send({'err':0,'msg':'okokok'});
})


app.listen(3000,()=>{
    console.log('server start')
})

