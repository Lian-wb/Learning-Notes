// 1.引入系统模块http
const http = require('http');
const url = require('url');
// 2.创建网站服务器
const app = http.createServer();
// 3.为网站服务器对象添加请求事件
app.on('request', (req, res) => {
    // 4.实现路由功能
    // 1.获取客户端的请求方式
    const method = req.method.toLowerCase(); //这个方法可将请求方式大写转换为小写
    // 2.获取客户端的请求地址
    const pathname = url.parse(req.url).pathname;

    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    }); //响应返回给客户端的数据规范

    if (method == 'get') {

        if (pathname == '/' || pathname == '/index') {
            res.end('欢迎来到首页')
        } else if (pathname == '/list') {
            res.end('欢迎来到列表页')
        } else {
            res.end('您访问的页面不存在')
        }

    } else if (method == 'post') {

    }

});

app.listen(3000);
console.log('服务器启动成功')