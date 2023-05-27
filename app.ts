const index = require('./src/index')
const path = require('path');
const koaStatic = require('koa-static');

index.use(koaStatic(path.join(__dirname)+'/public/'));
index.listen(3117,()=>{
    console.log("服务器已启动，http://localhost:3117");
})

