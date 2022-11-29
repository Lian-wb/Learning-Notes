const greeting = name => `hello ${name}`;
const x = 100;
exports.x = x;
module.exports.greeting = greeting; //此时文件b运行的话能输出x和greeting两个属性
// 当exports对象和moudle.exports对象指向的不是同一个对象时 以module.exports为准
module.exports = {
        name: 'zhangsan'
    } //此时将moudle.exports指向由默认的a文件改为新对象，exports指向对于b就无效了，b文件运行只会输出name: 'zhangsan'
exports = {
        age: 20
    } //依然只会输出name