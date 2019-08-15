var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log("数据库已创建!");
    db.close();
});

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbase = db.db("runoob");
    dbase.createCollection('site', function (err, res) {
        if (err) throw err;
        console.log("创建集合!");
        db.close();
    });
});

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var myobj = { name: "菜鸟教程", url: "www.runoob" };
    dbo.collection("site").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});
// 插入多条数据
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var myobj = [
        { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn' },
        { name: 'Google', url: 'https://www.google.com', type: 'en' },
        { name: 'Facebook', url: 'https://www.google.com', type: 'en' }
    ];
    dbo.collection("site").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        db.close();
    });
});
// find()
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    dbo.collection("site").find({}).toArray(function (err, result) { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

// 查询指定条件的数据
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var whereStr = { "name": '菜鸟教程' };  // 查询条件
    dbo.collection("site").find(whereStr).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
// 更新一条数据
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var whereStr = { "name": '菜鸟教程' };  // 查询条件
    var updateStr = { $set: { "url": "https://www.runoob.com" } };
    dbo.collection("site").updateOne(whereStr, updateStr, function (err, res) {
        if (err) throw err;
        console.log("文档更新成功");
        db.close();
    });
});
// 更新多条数据
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var whereStr = { "type": 'en' };  // 查询条件
    var updateStr = { $set: { "url": "https://www.runoob.com" } };
    dbo.collection("site").updateMany(whereStr, updateStr, function (err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " 条文档被更新");
        db.close();
    });
});

// 删除一条数据 
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var whereStr = { "name": '菜鸟教程' };  // 查询条件
    dbo.collection("site").deleteOne(whereStr, function (err, obj) {
        if (err) throw err;
        console.log("文档删除成功");
        db.close();
    });
});
// 删除多条数据
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var whereStr = { type: "en" };  // 查询条件
    dbo.collection("site").deleteMany(whereStr, function (err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " 条文档被删除");
        db.close();
    });
});
//排序 按 type 升序排列:
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var mysort = { type: 1 };
    dbo.collection("site").find().sort(mysort).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
// 查询分页
// 如果要设置指定的返回条数可以使用 limit() 方法，该方法只接受一个参数，指定了返回的条数
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    dbo.collection("site").find().limit(2).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
// $lookup 实现左连接
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    dbo.collection('orders').aggregate([
        {
            $lookup:
            {
                from: 'products',            // 右集合
                localField: 'product_id',    // 左集合 join 字段
                foreignField: '_id',         // 右集合 join 字段
                as: 'orderdetails'           // 新生成字段（类型array）
            }
        }
    ]).toArray(function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});

// 删除集合
// 我们可以使用 drop() 方法来删除集合：
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    // 删除 test 集合
    dbo.collection("test").drop(function (err, delOK) {  // 执行成功 delOK 返回 true，否则返回 false
        if (err) throw err;
        if (delOK) console.log("集合已删除");
        db.close();
    });
});
