const Router = require('koa-router');
const router = new Router();
const service = require('../service/index')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fs = require("fs");

/**
 * 用户登录：
 * 用户输入邮箱和密码进行登录。
 */
router.post('/login', async (req: any) => {
    //从请求中获取用户账号和密码
    const {account, password} = req.request.body
    const responseBody = {code: 200, msg: "", token: ""}

    let user = await service.findOne(account)

    if (!user) {
        responseBody.code = 404;
        responseBody.msg = "用户名不存在"
        req.body = responseBody
        return
    }

    // 用户存在
    // 验证密码是否一致：password:请求中用户的密码，User.password:数据库中经过加密算法后保存的密码
    let result = bcryptjs.compareSync(password, bcryptjs.hashSync(user.password, 10))
    //如果密码错误：
    if (!result) {
        responseBody.code = 404;
        responseBody.msg = "密码错误"
        req.body = responseBody
        return
    }
    //密码正确：
    //借助json-web-token生成一个token
    //1.生成的token里面包含着用户信息在rule里面，也可以根据token解析出用户信息出来
    //不要把用户密码等隐私信息放在里面
    const rule = {
        name: user.name,
        email: user.email,
        id: user.id
    }

    //生成token:privateKey:"abcdefg",私钥，可以自己定义，生成token；expiresIn:"7d"token过期时间7天
    let token = await jwt.sign(rule, "abcdefg", {expiresIn: "7d"})

    responseBody.msg = "登录成功"
    responseBody.token = "Bearer" + token
    req.body = responseBody
    return

})

router.post('/upload',async (req:any) => {
    const file = req.request.files['']
    let type = file.type;
    const size = file.size;
    const fileName = file.name
    const maxSize = 800 * 1024;     //800K
    type = type.split("/")[1];
    if (type != "jpeg" && type != "jpg" && type != "png") {
        req.body = {"errMsg": "请上传png、jpg、jpeg格式照片"}
        return;
    } else if (size > maxSize) {
        req.body = {"errMsg": "图片大小不要超过800K"}
        return;
    } else if (type == "jpeg" || type == "jpg" || type == "png" && size < maxSize) {
        await fs.readFile(file.path, function (err:any, data:any) {
            if (err) {
                req.body = {"errMsg": "'图片上传失败'"};
                return;
            }
            let base64str = new Buffer(data).toString('base64'); //图片转字节
            fs.writeFileSync("public/upload/" + fileName, base64str, 'base64');  //写入本地
        });
        req.body = {url: "http://" + req.request.header.host +  '/upload/' + fileName};
    }
});

router.post('/submitArticle',async (req:any) => {
    console.log(req.request.body)
    // let token = req.request.header.token
    // const user = jwt.decode(token.replace('Bearer',''),'abcdefg')
    // console.log(user)
    const param = req.request.body
    param.author = '作者'
    param.updateBy = '作者'
    let result = await service.insertArticle(param)
    if(result.affectedRows == 1){
        req.body = {code: 200, msg: "success"}
    } else {
        req.body = {code: 503, msg: "failed"}
    }
})
module.exports = router
