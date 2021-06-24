

var fs = require('fs');
var https = require('https');
var { exec } = require('child_process') 

heading = '<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><title>JSONテストArweave</title></head><body>'
footing = "</body></html>"


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
		json = JSON.parse(stdout)
		//console.log(json.name)
		data=heading+"<h1>"+json.name+'</h1><a href="'+json.external_url+'">externalURL</a><br><img src="'+json.image+'"></img>'+"<br><p>"+ json.description +"</p>" + '<video controls><source src="'+json.animation_url+'" type="video/mp4"></video>' + footing
		fs.writeFile("output/"+f+".html" , data, (err)=>{
			
		})
	}
	)
	
	})



