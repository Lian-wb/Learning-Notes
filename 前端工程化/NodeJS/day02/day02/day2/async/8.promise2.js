const fs = require('fs');

// fs.readFile('./1.txt', 'utf8', (err, result1) => {
// 	console.log(result1)
// 	fs.readFile('./2.txt', 'utf8', (err, result2) => {
// 		console.log(result2)
// 		fs.readFile('./3.txt', 'utf8', (err, result3) => {
// 			console.log(result3)
// 		})
// 	})
// });

//因为目的是依次访问文档（依次执行），所以要将三个promise包裹进函数，通过设置函数调用顺序来一次执行promise
function p1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./1.txt', 'utf8', (err, result) => {
            resolve(result)
        })
    });
}

function p2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./2.txt', 'utf8', (err, result) => {
            resolve(result)
        })
    });
}

function p3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./3.txt', 'utf8', (err, result) => {
            resolve(result)
        })
    });
}

p1().then((r1) => {
        console.log(r1); //第一个then拿到p1的结果
        return p2(); //将第二个promise对象return出去
    })
    .then((r2) => {
        console.log(r2);
        return p3();
    })
    .then((r3) => {
        console.log(r3)
    })