const Koa = require('koa');
const app = new Koa();
const route = require('../controller/index');
const koaBody = require('koa-body');

app.use(koaBody({
    multipart: true, // 支持文件上传
    formidable: {
        maxFieldsSize: 2 * 1024 * 1024, // 最大文件为2兆
        multipart: true // 是否支持 multipart-formdate 的表单
    }
}));

app.use(async (ctx: { set: (arg0: string, arg1: string | number | boolean) => void; }, next: () => any) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
    await next();
})


app.use(route['routes']()).use(route.allowedMethods());//allowedMethods()方法允许post、get等请求，没有用这个方法页面会出现not found

module.exports = app