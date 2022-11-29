//用于创建网站服务器模块
const http = require('http');
//app对象就是网站服务器对象
const app = http.createServer();
//当客户端有请求来的时候，服务器响应
app.on('request', (req, res) => { //req是请求缩写，res是响应缩写
    res.end('<h2>hello user</h2>');
})

app.listen(3000); //这里表示服务器'app'监听'3000'端口
console.log('网站服务器启动成功') //在命令行工具中启动成功可以看到