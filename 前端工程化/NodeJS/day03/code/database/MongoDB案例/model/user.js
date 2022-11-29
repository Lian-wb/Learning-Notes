const mongoose = require('mongoose');
// 2.创建用户集合规则
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 20
    },
    age: {
        type: Number,
        min: 18,
        max: 80
    },
    password: String,
    email: String,
    hobbies: [String] //爱好是数组类型且为字符串
})

// 2.创建用户集合，返回集合构造函数
const User = mongoose.model('User', UserSchema);
// 把 User函数开放出去
module.export = User;