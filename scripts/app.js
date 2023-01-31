
const music = document.getElementById("music");
const playPause = document.getElementById("playPause");

playPause.addEventListener("click", function() {
  if (music.paused) {
    music.play();
    playPause.innerHTML = "Pause";
  } else {
    music.pause();
    playPause.innerHTML = "Play";
  }
});