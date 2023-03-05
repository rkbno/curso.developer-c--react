let video = document.getElementById("video1")




function comecar(){
    video.play();
}

function stop() {
    video.pause();
}

function volta(){
    video.currentTime -= 15;
}

function avancar (){
    video.currentTime += 15;
}
