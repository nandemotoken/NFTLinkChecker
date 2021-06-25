# -*- coding: utf-8 -*-

import os
import urllib.request
import json

heading = '<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><title>JSONテストArweave</title></head><body>'
footing = "</body></html>"

inputdir = "./input/"
outputdir = "./output/"
files=os.listdir(inputdir)
for f in files:
    print(f)
    url=open( inputdir + f,'r').read()
    print(url)
    text = urllib.request.urlopen(url).read().decode("utf-8")
    print(text)

    outfile="./output/" + f
    outurl=open(outputdir + f + ".html" , 'w')
    jsondata = json.loads(text)
    print(jsondata)
    writedata = heading+"<h1>"+ str(jsondata.get("name"))+'</h1><a href="'+str(jsondata.get("external_url"))+'">externalURL</a><br><img src="'+str(jsondata.get("image"))+'"></img>'+"<br><p>"+ str(jsondata.get("description")) +"</p>" + '<video controls><source src="'+str(jsondata.get("animation_url"))+'" type="video/mp4"></video>' + footing
    outurl.write(writedata)



