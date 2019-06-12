const url = require('url');

/* url 转成对象 */
let urlString = 'https:47.95.207.1:3000/fcj/recommend/hot/hehe?us=123&ps=456#nihao'
let urlObj = url.parse(urlString)
console.log(urlObj)

/* 对象转成URL */
let Obj ={
    protocol: 'https:',
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: '#nihao',
    search: '?us=123&ps=456',
    query: 'us=123&ps=456',
    pathname: '47.95.207.1:3000/fcj/recommend/hot/hehe',
    path: '47.95.207.1:3000/fcj/recommend/hot/hehe?us=123&ps=456',
    href:
     'https:47.95.207.1:3000/fcj/recommend/hot/hehe?us=123&ps=456#nihao' }


let strings = url.format(Obj);
console.log(strings);


/*   
    url 类比json 记忆
    url.parse 将url字符转成对象
    url.format 将url对象转成url字符


    
*/ 