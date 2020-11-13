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

router.post('/get', async (ctx:any)=>{
    ctx.set("Access-Control-Allow-Origin", "*");
    const sql = 'select * from buy_food';
    let re = await querySql(sql);
    ctx.body = re;
});

app.listen(3000,()=>{
    console.log("服务器已启动，http://localhost:3000");
})

