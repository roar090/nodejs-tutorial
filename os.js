var os =require('os');

console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem()/1024/1024/1024);
console.log(os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());
console.log();