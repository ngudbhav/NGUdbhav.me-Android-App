var j = require("jimp");
j.read("logo.png", function(err, lenna){
console.log("executing");
	if(err) throw err;
	else{
		lenna.resize(200,57)//720x1280//4x2.5
		.write("logo.png");
		console.log("done");	
		}
});
