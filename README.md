使用node-serialport的简单例子


var SerialPort = require('serialport');
var port = new SerialPort('COM5');

var senddata = [0x01, 0x02];

port.on('open', function () {
    port.write(senddata, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log('message written');
    });
});

// open errors will be emitted as an error event
port.on('error', function (err) {
    console.log('Error: ', err.message);
})

setInterval(function () {
    port.write(senddata, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log('message written');
    });
}, 5000);

注：版本不同可能使用方式不同，当前使用的版本是7.1.4

官方文档4.0.1地址：https://github.com/node-serialport/node-serialport/blob/4.0.1/README.md

