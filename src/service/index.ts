const q = require('../sql/query')
const mysql1 = require('mysql');
const uuid = require('uuid')
const util = require("../utils/util");
interface IArticle {
    title:string
    content:string
    author:string
    abstract:string
    publicTime:string
    encourageNum:number
    viewsNum:number
    coverPic:string
    status:number
    updateBy:string
    updateTime:string
}
class Service {
    public async findOne(account:string){
        const sql = `select * from sys_user A where user_name = ${mysql1.escape(account)}`;
        const result = await q.querySql(sql)
        return result.length > 0 ? result[0] : ''
    }
    public async insertArticle(params:IArticle){
        console.log('params', params)
        const sql = `INSERT INTO blog.note (id,title,content,author,abstract,publish_time,encourage_num,views_num,cover_pic,status,update_by,update_time) VALUES
         ('${uuid.v1()}','${params.title}','${params.content}','${params.author}','${params.abstract}','${util.formatDate(new Date())}',0,0,'${params.coverPic}',1,'${params.updateBy}','${util.formatDate(new Date())}')`;
        console.log(sql)
        return await q.querySql(sql)
    }
}

module.exports = new Service()