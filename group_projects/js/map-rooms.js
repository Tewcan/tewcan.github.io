var layout0 = [
        {tileset:' forest',name:'entrance',nx:600,ny:350,enemy:2,level:1},
        {name:'exit',x:650,y:350,w:50,h:110,nx:600,ny:350,r:1},
        {name:'bush',x:0,y:0,w:50,h:450},
        {name:'bush',x:650,y:0,w:50,h:355},
        {name:'bush',x:0,y:0,w:700,h:50},
        {name:'bush',x:0,y:450,w:700,h:50},
        {name:'bush',x:150,y:50,w:50,h:150},
        {name:'water',x:150,y:250,w:300,h:50},
        {name:'bush',x:317,y:91,w:50,h:50},
        {name:'bush',x:400,y:150,w:250,h:50},
        {name:'bush',x:500,y:350,w:100,h:50},
        {name:'bush',x:420,y:330,w:50,h:50},
        {name:'bush',x:150,y:400,w:50,h:50} ]
var layout1 = [
        {tileset:' forest',name:'entrance',x:0,y:351,w:50,h:110,nx:50,ny:350,r:0},
        {name:'exit',x:300,y:0,w:100,h:50,nx:300,ny:50,r:2},
        {name:'bush',x:0,y:0,w:50,h:350},
        {name:'bush',x:650,y:0,w:50,h:450},
        {name:'bush',x:0,y:0,w:300,h:50},
        {name:'bush',x:0,y:450,w:700,h:50},
        {name:'bush',x:200,y:200,w:300,h:50},
        {name:'fountain',x:200,y:300,w:50,h:50},
        {name:'bush',x:400,y:0,w:300,h:50} ]
var layout2 = [
        {tileset:' forest',name:'entrance',x:300,y:450,w:100,h:50,nx:300,ny:400,r:1,enemy:3,level:2},
        {name:'exit',x:300,y:0,w:100,h:50,nx:300,ny:300,r:2},
        {name:'bush',x:0,y:0,w:50,h:450},
        {name:'bush',x:650,y:0,w:50,h:450},
        {name:'bush',x:0,y:0,w:300,h:50},
        {name:'bush',x:0,y:450,w:300,h:50},
        {name:'bush',x:150,y:50,w:50,h:150},
        {name:'bush',x:150,y:250,w:300,h:50},
        {name:'bush',x:400,y:450,w:300,h:50},
        {name:'bush',x:400,y:150,w:250,h:50},
        {name:'bush',x:500,y:350,w:100,h:50},
        {name:'bush',x:420,y:330,w:50,h:50},
        {name:'bush',x:400,y:0,w:300,h:50} ]
var rooms = [layout0,layout1,layout2]
var currentRoom = 1