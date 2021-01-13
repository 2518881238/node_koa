const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const koaStatic = require('koa-static');
const mysql = require('mysql');
const mysql_config = require('./src/utils/dataBase')
app.use(koaStatic(__dirname + '/public'));
const con = mysql.createConnection(mysql_config);
app.use(router['routes']()).use(router.allowedMethods());//allowedMethods()方法允许post、get等请求，没有用这个方法页面会出现not found

function querySql(sql: any):any{
    return new Promise((resolve,rejects)=>{
        con.query(sql,function (error: any, results: any) {
            if (error) throw error;
            resolve(results);
        });
    })
}
app.use(async (ctx: { set: (arg0: string, arg1: string | number | boolean) => void; }, next: () => any) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
    await next();
})

router.get('/get', async (ctx:any)=>{
    ctx.set("Access-Control-Allow-Origin", "*");
    const sql = 'select * from user';
    let re = await querySql(sql);
    ctx.body = re;
});
router.get('/gett', async (ctx:any)=>{
    ctx.set("Access-Control-Allow-Origin", "*");
    let re = {
        name:'zhuhong'
    }
    ctx.body = re;
});

router.get('/xss', async (ctx:any)=>{
    ctx.set("Access-Control-Allow-Origin", "*");
    const sql = 'select * from user';
    let re = await querySql(sql);
    ctx.body = re;
});

app.listen(3000,()=>{
    console.log("服务器已启动，http://localhost:3000");
})

