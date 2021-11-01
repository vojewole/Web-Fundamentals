console.log("page loaded...");

function playVideo(vid){
    var video = document.getElementById(vid);
    video.play();
    video.muted = true; 
}

function pauseVideo(vid){
    var video = document.getElementById(vid);
    video.pause();
}
