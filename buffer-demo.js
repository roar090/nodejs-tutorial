const b1=Buffer.from('10')
const b2=Buffer.from('11','utf8')
const b3 = Buffer.from([65, 66]);
const b4 = Buffer.alloc(10);
console.log(b1,b2,b3.toString(),b4);
