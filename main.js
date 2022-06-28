 noseX=0 ;
 noseY=0;
function preload() 
{ 
img_clown=loadImage("much.webp");
}


function setup() 
{ 
 canvas=createCanvas(500,500);  
 canvas.center();
video=createCapture(VIDEO); 
video.size(300,300);
video.hide(); 
posenet= ml5.poseNet(video,modelLoaded); 
posenet.on('pose',gotPoses); 

} 

function modelLoaded() 
{
     console.log("pose net is loaded"); 

} 
 
function gotPoses(results) 
{ 
if (results.length>0) 
{ 
    console.log(results); 
    noseX=results[0].pose.nose.x  + 85; 
    noseY=results[0].pose.nose.y + 93; 

}
}

function draw() 
{    
    fill("#03f4fc");
ellipse(55, 55, 70, 70);  
fill("#fc032c");
rect(86, 35, 320,40 );   
fill("#03f4fc");
ellipse(430, 55, 70, 70);  
fill("#fc032c");
rect(410,90, 40,320 ); 
rect(35,90, 40,320 );
fill("#03f4fc");
ellipse(55, 445, 70, 70);  
fill("#fc032c");
rect(86, 425, 320,40 );  
fill("#03f4fc"); 
ellipse(430, 445, 70, 70);

image(video,100,100,300,300);  
image(img_clown,noseX,noseY,30,30);  

}  

function take_snapshot() 
{ 
save('clown_filter.png');
}
