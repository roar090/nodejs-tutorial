function say(word) {
    console.log(word);
}

function execute(func, value) {
    func(value);
}

execute(say, 'wtf!');

execute(function (word) {
    console.log(word);
}, 'wtffff');

