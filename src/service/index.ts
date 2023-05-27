const q = require('../sql/query')
const mysql1 = require('mysql');
const xss = require('xss')
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
    classifyOne:string
    classifyTwo:string
}

interface ISearchItem {
    classifyOne: string
    classifyTwo: string
    titleKey:string
}

class Service {

    public async test() {
        const sql = `SELECT 1 FROM DUAL`;
        return await q.querySql(sql)
    }

    public safe (str: string) {
        return xss(mysql1.escape(str))
    }
    public async findOne(account:string){
        const sql = `select * from sys_user A where user_name = ${this.safe(account)}`;
        const result = await q.querySql(sql)
        return result.length > 0 ? result[0] : ''
    }

    public async insertArticle(params:IArticle){
        const sql = `INSERT INTO blog.note (id,title,content,author,abstract,publish_time,encourage_num,views_num,cover_pic,status,update_by,update_time,classify_one,classify_two) VALUES
         ('${uuid.v1()}',${this.safe(params.title)},${mysql1.escape(params.content)},${this.safe(params.author)},${this.safe(params.abstract)},'${util.formatDate(new Date())}',0,0,${this.safe(params.coverPic)},1,${this.safe(params.updateBy)},
         '${util.formatDate(new Date())}','${params.classifyOne}','${params.classifyTwo}')`;
        return await q.querySql(sql)
    }

    public async queryArticleList(searchItem:ISearchItem){
        const classifyO = (searchItem.classifyOne && searchItem.classifyOne != '001') ? `'${searchItem.classifyOne}'`: null
        const classifyT = (searchItem.classifyTwo && searchItem.classifyTwo != '001') ? `'${searchItem.classifyTwo}'`: null
        const like = searchItem.titleKey ? `${this.safe(`%${searchItem.titleKey}%`)}` : null

        const sql = `select id, title, author, abstract, publish_time, encourage_num, views_num, cover_pic, status, update_by, update_time, classify_one, classify_two from blog.note n where classify_one = COALESCE(${classifyO}, classify_one) 
        and classify_two = COALESCE(${classifyT}, classify_two) and title like COALESCE(${like}, title)`

        return await q.querySql(sql)
    }
    public async queryArticleDetailsById(id: string) {
        const sql = `select * from blog.note n where id = ${this.safe(id)}`
        return await q.querySql(sql)
    }

    public async queryUserById(id: string) {
        const sql = `select * from sys_user A where user_id = ${this.safe(id)}`;
        return await q.querySql(sql)
    }

    public async insertComment({comment,Reviewer,parent,note}:{comment:string,Reviewer:string,parent:string,note:string}){
        const sql = `INSERT INTO blog.comment (id, comment, Reviewer, comment_time, encourage_num, parent, note) VALUES
        ('${uuid.v1()}', '${comment}', '${Reviewer}', '${util.formatDate(new Date())}', 0, '${parent}', '${note}')`
        console.log(sql)
        return await q.querySql(sql)
    }

    public async queryComment(nodeId:string){
        const sql = `SELECT * FROM blog.comment WHERE note='${nodeId}'`
        console.log(sql)
        return await q.querySql(sql)
    }
}

module.exports = new Service()