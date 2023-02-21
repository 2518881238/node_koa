const mysql = require('mysql');
const mysql_config = require('../utils/dataBase')
const con = mysql.createConnection(mysql_config);
class ExecuteSql {
    public querySql = (sql:string):Promise<any> => {
        return new Promise((resolve, reject)=>{
            con.query(sql,function (error: any, results: any) {
                if (error) reject(error);
                resolve(results);
            });
        })
    }
}

module.exports = new ExecuteSql()