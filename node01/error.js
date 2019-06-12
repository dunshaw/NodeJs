let err = new Error('发生错误!');  // 假设这是一个错误对象
// console.log(err);     // 打印错误，不会终止
throw err;              // 抛出错误 ，会终止
console.log('123');