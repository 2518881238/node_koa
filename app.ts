const index = require('./src/index')
const path = require('path');
const koaStatic = require('koa-static');
const service_test = require('./src/service')

index.use(koaStatic(path.join(__dirname)+'/public/'));

setInterval(async () => {
    let a = await service_test.test()
    console.log('心跳',a)
},60 * 60 * 1000)

index.listen(3117,()=>{
    console.log("服务器已启动，http://localhost:3117");
})

