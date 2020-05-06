let body;
let zoom;
let playing = false;

function preload(){

	body = createVideo('DMDocBody.mp4'); //loads video
	body.volume(0); //sets volume to zero to comply with CORS

	zoom = createVideo('dMDocZoom.mp4');
	zoom.volume(0);

	body.hide(); //hides mov file
	zoom.hide();


}


function setup(){

	canvas = createCanvas(windowWidth, windowHeight);

}

function draw(){

	background(0,0,0,0);

	scale(0.3);

	let s = "beginShape();{The Matrix; The Social Network; Tron; Ideologues of silicon valley. My own inspirations, all told; ideology I insufferably bathe in - but I suppose I'm not alone, as we all stop in our critique of ideology at some point. It's then I'm reminded of <i>They Live</i> - we like ideology - it distorts reality to give us something that pleases - we are soaking wet in our dreams, even the pretentious postmodern a-truthers. Who wrote your smut?.....} endShape();";
	fill(255);
	textStyle(ITALIC);
	strokeWeight(1);
	textSize(60);
	text(s, width/2, (height/2)+1400, width*2); // Text wraps within text box

	let t = "click to begin;"
	text(t, (width/2)+800, height/2+800, 600)

	if(playing == true){
	image(body, width/2, 200);
	image(zoom, width/2, 1300);
}

}

function mousePressed(){
	  clear();

	if(playing == false){
		playing = true;
		body.play();
		zoom.play();
	}else{
		playing = false;
		body.stop();
		zoom.stop();
	}
	print(playing);
}

// function touchStarted(){
// 	mousePressed()
// }