let http = require("http");
//创建服务器：
http.createServer((req, res) => {
    //汉字解决：
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    })
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'test'
    });
    connection.connect();
    //声明，select拿取表：
    connection.query('select * from peopleInfo', function(error, results, fields) {
        if (error) throw error;
        console.log(results);
        //数据显示在浏览器上：
        res.end(JSON.stringify(results));
    })
}).listen(8082, '127.0.0.1'); //监听端口，访问