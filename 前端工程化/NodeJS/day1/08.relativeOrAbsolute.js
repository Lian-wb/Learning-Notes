const fs = require('fs');
const path = require('path');

console.log(__dirname);
console.log(path.join(__dirname, '01.helloworld.js'))

fs.readFile(path.join(__dirname, '01.helloworld.js'), 'utf8', (err, doc) => { //将读取文件的相对路径拼接为绝对路径
    console.log(err)
    console.log(doc)
});