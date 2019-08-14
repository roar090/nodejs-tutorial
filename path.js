
console.log(__filename);
console.log(__dirname);
t=setInterval(()=>{
    console.log(Date.now());
},300);

setTimeout(()=>{
    console.log('wait for 5 seconds')
    clearTimeout(t);
},5000);
