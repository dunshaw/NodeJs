const http = require('https');
const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');

// let url = 'https://www.bilibili.com'
let url = 'https://www.qunar.com'
let json = 'http://nodejs.org/dist/index.json'
http.get(url,(res)=>{

// ----------------------------------安全判断---------------------------------------- 
    const { statusCode } = res;   // 状态码
    const contentType = res.headers['content-type']; //文件类型
    console.log(statusCode,contentType);

    let err  =  null;
    if(statusCode != 200){
        err = new Error('请求状态码错误')
    }else if(!/^text\/html/.test(contentType)){
        // 格式类型
        err = new Error('请求类型错误') 
    }
    if(err){
        console.log(err)
        res.resume();    //重置缓存
        return false
    }



// ----------------------------------数据处理----------------------------------------    
    let total = ''
    // 数据分段 只要接收数据就会触发data事件， chunk 每次接收的数据片段
    res.on('data',(chunk)=>{
        console.log('数据传输')
        total+=chunk.toString('utf-8')
        // console.log(chunk.toString('utf-8'))
    })

    res.on('end',()=>{
        // fs.writeFileSync('./bilibili.html',total)        //保存本地html
        console.log('数据传输完毕');
        let $ = cheerio.load(total)                         // 使用cheerio转化网页数据，并爬取所需要的信息
        console.log($('#header-mobile-app').text())
        $('img').each((index,el)=>{
            console.log($(el).attr('src'));
        })

        // 下载img保存本地路径
        let imgurl =  'https://source.qunarzz.com/mkt_download/guide/osaka/imgs/cover300_ddc0f2bc.jpg';
        request(imgurl).pipe(fs.createWriteStream('./' + 'some.jpg'));
    })
}).on('error',(err)=>{
    console.log(err)
})