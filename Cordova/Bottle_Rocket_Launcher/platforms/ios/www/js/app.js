var app = angular.module('BottleRocketLauncher', []);


app.controller('BottleRocketLauncherController', function($scope, rocketButtonFactory){
	this.rocketButtons = [];
	for (var i = 0; i < 8; i++) {
		this.rocketButtons.push(new rocketButtonFactory(1<<i,i));
		console.logthis.rocketButtons[i].value;
	}



});

app.factory('RocketButton',function rocketButton(){
	var RocketButton = function Button(value,display){
		this.status = 0; //0= Ready, 1 = Queued, 2 = Launched
		this.value = 0; // bit value sent to the Bluetooth controller
		this.display = 0; // What number or character to show
	}

	return RocketButton;
});