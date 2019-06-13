const cheerio = require('cheerio');
let $ = cheerio.load('<div><p>你好</p><img src="www.123.png"><img src="www.5555555.png"></div>')
// 将一组html格式的字符串转化为类dom之后，就可以用jq的语法选中其元素
console.log($('img').attr('src'));
console.log($('p').text());

$('img').each((index,obj)=>{
    console.log($(obj).attr('src'))
})
