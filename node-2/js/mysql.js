//请求查询数据库：引用mysql
var mysql = require('mysql');
//mysql里的方法，创建连接：
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306', //3306端口
    database: 'test' //数据库叫test
});
//创建连接：
connection.connect();

var sql = 'insert into peopleInfo(id,username,password,age,sex) values (?,?,?,?,?)';
var addSqlParams = [6, "马鲁源", "222", 19, "男"]
    // var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
    // var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
    //查
connection.query(sql, addSqlParams, function(err, result) {

    //处理错误：
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});
connection.end();