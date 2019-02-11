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