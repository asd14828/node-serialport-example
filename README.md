官网：https://serialport.io/en/

Parsers说明：  
parser-byte-length：  
大概意思是定义了一个长度为length字节的buffer，串口收到数据后先放到buffer中，放满了才发送给程序，超出的部分等buffer发送清空后继续放入  
parser-cctalk：  
一种在货币交易等行业广泛使用的串行协议  
parser-delimiter：  
意思是遇到某个字符时才把buffer中的数据发给程序，比如设为’a’，那么用字符发送时遇到’a’即发送，用hex发送时遇到61（‘a’的ASCII码）时发送；注：官方例子中’\n’字符用串口工具字符发送没生效，但用hex发送其ASCII码（0A）和在node.js项目中可以生效  
parser-readline:  
可以自定义换行符，遇到换行符时发送，默认为’\r\n’，对应ASCII为0D 0A；但目前打hex日志时为乱码  
parser-ready：  
程序先收到自定义字符串，例’READY’后才开始接收数据  
parser-regex：  
正则表达式  
parser-slip-encoder：  
没弄清楚是什么意思，require模块也报错  

例子：  

var SerialPort = require('serialport');  
var port = new SerialPort('COM5');  

//发hex  
var senddata = [0x01,0x02];  
//发字符串  
//senddata = 'test data';  

function writeport()
{
    port.write(senddata, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log('send: ' + senddata);
    });
}

port.on('open', function () {
    writeport();
});

// open errors will be emitted as an error event
port.on('error', function (err) {
    console.log('Error: ', err.message);
})

setInterval(function () {
    writeport();
}, 5000);


port.on('data', function (data) {
    //收hex  
    console.log('recv: ' + data.toString('hex'));  
    //收字符串  
    //console.log('recv: ' + data.toString('ascii'));  
  });


注：版本不同可能使用方式不同，当前使用的版本是7.1.4  
官方文档4.0.1地址：https://github.com/node-serialport/node-serialport/blob/4.0.1/README.md  

