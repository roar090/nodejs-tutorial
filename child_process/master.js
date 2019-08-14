const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.exec('node ./child_process/support.js ' + i, function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });

    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 ' + code);
    });


    for (var i = 0; i < 3; i++) {
        var workerProcess_spawn = child_process.spawn('node', ['./child_process/support.js', i]);

        workerProcess_spawn.stdout.on('data', function (data) {
            console.log('stdout: ' + data);
        });

        workerProcess_spawn.stderr.on('data', function (data) {
            console.log('stderr: ' + data);
        });

        workerProcess_spawn.on('close', function (code) {
            console.log('子进程已退出，退出码 ' + code);
        });
    }

    for (var i = 0; i < 3; i++) {
        var worker_process = child_process.fork("support.js", [i]);

        worker_process.on('close', function (code) {
            console.log('子进程已退出，退出码 ' + code);
        });
    }
}