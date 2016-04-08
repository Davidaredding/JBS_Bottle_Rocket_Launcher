var SerialPort = require("serialport").SerialPort;
var port = new SerialPort("/dev/cu.wchusbserial1420",{baudrate:9600});

var arduino_ready = false;
var main_interval = {}
var relay = 0;

port.on('open',function(){
	console.log("serial port opened");
	console.log("Waiting for Arduino to initialize...")
	
});
 
port.on('data',function(data){
	if(data.toString('ascii') == "Ready"){
		console.log("Arduino is ready; beginning stream.")
		//testing 
		main_interval = setInterval(mainLoop,1500);
	}
	else{
		console.log(data.toString('ascii'));
	}
});

var value = 1;
function mainLoop(){
	//console.log("Writing : " + value);
	port.write(new Buffer([255]));
	/*value <<= 1 ;
	if(value > 128)
		value = 1;

	/*var r_channel = 1<<relay;
	var data = new Buffer([r_channel]);
	//console.log(data[0]);
	port.write(data);
	
	if(relay>=7)
		relay = 0;
	else
		relay ++
	*/

};
