//导入所需模块
var mysql=require("mysql");
var logger = require('../framework/logger/application')
//导入配置文件
var env = 'dev'
var cfg  =require("../conf/db.json")[env];
var pool = mysql.createPool({
    host:cfg.host,
    user:cfg.user,
    password:cfg.password,
    database:cfg.database,
    port:cfg.port
});
//导出执行相关
var execute=function(sql,callback){
    logger.info("[execute sql] "+sql)
    sql = sql + ";"
    pool.getConnection(function(err,conn){
        console.log("error1")
        if(err){
            callback(err,null,null);
            console.log("error")
        }else{
            conn.query(sql,function(err,vals,fields){
                if (err) throw err;
                console.log(vals)
                console.log(fields)
                //释放连接
                conn.release();
                //事件驱动回调
                callback(err,vals);
            });
        }
    });
};

module.exports=execute;