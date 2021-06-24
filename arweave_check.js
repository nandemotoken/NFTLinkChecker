

var fs = require('fs');
var https = require('https');
var { exec } = require('child_process') 

heading = '<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><title>JSONテストArweave</title></head><body>'
footing = "</body></html>"


fs.readdir('input' , async function(err , files){
	if(err) throw err;
	//console.log(files)
	for (i=0; i<files.length; i++){
	//console.log(f)
	const filename = files[i]
	var url = await fs.readFileSync("input/"+filename , 'utf-8');
	console.log(filename)
	//console.log(text)
	await exec("wget -O - " + url , async (err , stdout , stderr) =>{
	if (err){
		      console.log(`${stderr}`)
      return
	}
		console.log(`${stdout}`)
		json = JSON.parse(stdout)
		//console.log(json.name)
		data=heading+"<h1>"+json.name+'</h1><a href="'+json.external_url+'">externalURL</a><br><img src="'+json.image+'"></img>'+"<br><p>"+ json.description +"</p>" + '<video controls><source src="'+json.animation_url+'" type="video/mp4"></video>' + footing
		await fs.writeFile("output/"+filename+".html" , data, (err)=>{
		console.log(filename)	
		})
	}
	)
	}
	})



