var app = angular.module('BottleRocketLauncher', []);


app.controller('BottleRocketLauncherController', function($scope, RocketButtonFactory){
	this.mode = 0; // 0 = Immediate Launch, 1 = Multi-Launch
	this.rocketButtons = [];
	for (var i = 0; i < 8; i++) {
		this.rocketButtons.push(new RocketButtonFactory(1<<i,i+1));
	}



});

app.factory('RocketButtonFactory',function rocketButton(){
	var RocketButton = function Button(value,display){
		self = this;
		this.status = 0; //0= Ready, 1 = Queued, 2 = Launched
		this.value = value; // bit value sent to the Bluetooth controller
		this.display = display; // What number or character to show
	}

	return RocketButton;
});