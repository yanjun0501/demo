var process = require('child_process')


    var workerProcess = process.exec('curl http://101.200.52.169/register.html?username=qq&password=qq&name=s4&profession=987987987&grade=878979878797&qq=hop&tel=hop ',
       function (error, stdout, stderr) {
          if (error) {
             console.log(error.stack);
             console.log('Error code: '+error.code);
             console.log('Signal received: '+error.signal);
          }
          console.log('stdout: ' + stdout);
          console.log('stderr: ' + stderr);
       });
 
       workerProcess.on('exit', function (code) {
       console.log('子进程已退出，退出码 '+code);
    });
 