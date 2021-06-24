

var fs = require('fs');
var https = require('https');
var { exec } = require('child_process') 

var data = [];

fs.readdir('input' , function(err , files){
	if(err) throw err;
	for (f of files)
	//console.log(f)
	var url = fs.readFileSync("input/"+f , 'utf-8');
	//console.log(text)
	exec("wget -O - " + url , (err , stdout , stderr) =>{
	if (err){
		      console.log(`${stderr}`)
      return
	}
		console.log(`${stdout}`)
	}
	)
	
	})

const url = ''

