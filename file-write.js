var fs=require('fs');

content='我是通过fs.writefile方法写入的内容。';
fs.writeFile('output.txt',content,(err)=>{
    if(err){
        console.error(err);
    }
    console.log('数据写入成功');
});