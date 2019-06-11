### marckdown使用

# 标题1
## 标题2

``` js
 console.log('111')
```
> 文件引用（内容引用）
+ 列表1
    + xxx
    - xxxx
+ 列表2
    1.1111
    2.xxxx
[官网链接](www.baidu.com)

# node
## what is node ?
    + chrome V8 runtime
    + 事件驱动
    + 非阻塞的i/O
    i/o ：input output 输入输出流，正常下i/o的操作都是阻塞的（ajax同步）
    网络请求 数据库处理 文件的读写 。。。。都是阻塞的

    优点：高并发特别好（仅次于pyhton）


## why need node ？
    1.防止甩锅（明确数据交互错误来源）
    2.能够书写api 斜杠青年
    3.了解前后端的交互流程
    4.全栈（全干）工程

### api 接口
[api接口文档](http://47.95.207.1:3000/apidoc/)


### 前端js运行环境
    + 浏览器
     - 基本语法
     - bom
     - dom
     - ajax
     - 系统文件数据库（不能，不是语言不能，处于安全问题不能）
    + 服务器
     - 基本语法
     - 能操作数据库
     - 能操作本地文件

    限制语言能力的不是语言本身，而是语言的运行环境（平台）。

### node运行环境 REPL

    直接在命令行输入代码就是REPL环境

### 模块化
    + 内置模块
     - 文件操作
    + 第三方模块
    + 自定义模块
        - 创建一个模块（1个js就是1个模块）
        - 导出一个模块（module.export = name）
        - 引用一个模块并且调用

#### 打印当前目录的目录树
1. 实现的效果
2. 分析功能点
 - 当前目录结构
 - 分辨是文件还是文件夹
