const Koa = require('koa');
const app = new Koa();
const route = require('../controller/index');
const koaBody = require('koa-body');
const cors = require('koa2-cors')

// 实例化koa 之后的代码如下：
app.use(cors({
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'token'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))

app.use(koaBody({
    multipart: true, // 支持文件上传
    formidable: {
        maxFieldsSize: 2 * 1024 * 1024, // 最大文件为2兆
        multipart: true // 是否支持 multipart-formdate 的表单
    }
}));

app.use(route['routes']()).use(route.allowedMethods());//allowedMethods()方法允许post、get等请求，没有用这个方法页面会出现not found

module.exports = app