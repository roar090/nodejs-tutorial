var events=require('events');
var emitter=new events.EventEmitter();
emitter.on('someEvent',function(arg1,arg2){
    console.log(arg2)
});
emitter.on('someEvent',function(arg1,arg2){
    console.log(arg1)
});
emitter.emit('someEvent','arg1','arg2')

console.log('listener count:'+events.emitter.listenerCount(emitter,'someEvent'))

