function StartOrStop(audioFile) {
var audio = document.getElementsByClassName("mambl");
if (!audio.src || audio.src !== audioFile) audio.src = audioFile;
if (audio.paused == false)
    audio.pause();
else
    audio.play();
}