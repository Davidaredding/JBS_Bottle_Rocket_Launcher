var express = require('express');
var app = express();




//Setup simple webserver using express
app.use(express.static('../Cordova/Bottle_Rocket_Launcher/www'));

app.listen(8080, function(){
	console.log('Server listening on port 8080');
});