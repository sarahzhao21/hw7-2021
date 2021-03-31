var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
video.play()
document.querySelector("#volume").innerHTML=video.volume*100 + "%"
 });

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
	video.pause()
	});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing css");
	video.play()
	video.classList.add("oldSchool")
	});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changing css");
	video.play()
	video.classList.remove("oldSchool")
		});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *=.95
	console.log("New speed is" + video.playbackRate)
	});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /=.95
	console.log("New speed is" + video.playbackRate)
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volumn")
	console.log(this.value)
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML=video.volume*100 + "%"
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted === false) {    
		video.muted = true;
		document.querySelector("#mute").innerHTML= "Unmute";
	}
    else {video.muted = false;}
	 });

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if(video.currentTime >= video.duration) {
		video.currentTime = 0;
		video.play();
	}
	else {video.currentTime += 15;}
	});



 
