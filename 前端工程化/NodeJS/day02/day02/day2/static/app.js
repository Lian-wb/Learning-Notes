const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const app = http.createServer();
app.on('request', (req, res) => {
    // 获取用户的请求路径，将req.url拆分成对象后再获得其中的请求地址pathname
    let pathname = url.parse(req.url).pathname;
    //判断用户输入，即如果没输入(/)也返回default页面
    pathname = pathname == '/' ? '/default.html' : pathname;
    // 将用户的请求路径转换为实际的服务器硬盘路径
    let realPath = path.join(__dirname, 'public' + pathname);
    //第三方模块mime的方法getType可以根据路径返回客户端请求的文件的类型（HTML文件运行时因为外链式也会调用css和js文件），从而便于读取文件时根据文件类型标明语言规范等
    let type = mime.getType(realPath)
        // 从服务器硬盘读取文件
    fs.readFile(realPath, (error, result) => {
        // 如果文件读取失败
        if (error != null) {
            res.writeHead(404, {
                    'content-type': 'text/html;charset=utf8'
                }) //标明响应数据的状态码和报文数据（这里是语言规范）
            res.end('文件读取失败');
            return;
        }
        //文件读取成功，为了防止某些浏览器不识别数据类型，我们需要做一些规范（该规范不应该是固定的，而是根据文件类型而改变）
        res.writeHead(200, {
            'content-type': type
        })
        res.end(result);
    });
});
app.listen(3000);
console.log('服务器启动成功')