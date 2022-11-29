// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接，使当前开发环境（文件夹）连接到MongoDB下的某个仓库地址
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    // 连接成功，connect方法输出的是一个promise对象
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));