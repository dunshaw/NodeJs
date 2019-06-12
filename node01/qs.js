const qs = require('querystring');
// 将query字符串变成对象
// let string = 'name=wangyi&pass=123&sex=10'
// let obj = qs.parse(string)

// 如果query字符的分割符号不是&和=，需要自己给切分符号
// 第一个参数为切分键值对，第二个切分键和值
// let string = 'name-wangyi*pass-123*sex-10'
// let obj = qs.parse(string,'*','-')

// console.log(obj)

// stringify
// let obj = { name: 'wangyi', pass: '123', sex: '10' }
// let string = qs.stringify(obj,'^','!')
// console.log(string)

// query string的编码和解码
let string = 'w=你 好&foo=bar'
let result = qs.escape(string)
console.log(result)


let escapes = 'w%3D%E4%BD%A0%20%E5%A5%BD%26foo%3Dbar'
console.log(qs.unescape(escapes))
