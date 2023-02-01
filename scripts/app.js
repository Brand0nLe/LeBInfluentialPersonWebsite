window.music = new Howl({
  src: ['../assets/DITTODITTO.mp3'],
  autoplay: false,
  loop: true,
  onload: function() {
    // Check if the audio is currently playing
    if (localStorage.getItem("musicPlaying") === "true") {
      this.play();
      document.getElementById("playPause").innerHTML = "Pause";

      // Set the current time of the audio to the value stored in the local storage, if it exists
      const currentTime = localStorage.getItem("musicCurrentTime");
      if (currentTime) {
        this.seek(currentTime);
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const playPauseContainer = document.getElementById("playPauseContainer");
  if (window.location.pathname !== '/index.html') {
    playPauseContainer.style.display = 'none';
  }
  
  document.getElementById("playPause").addEventListener("click", function() {
    if (window.music.playing()) {
      window.music.pause();
      this.innerHTML = "Play";
      localStorage.setItem("musicPlaying", "false");
    } else {
      window.music.play();
      this.innerHTML = "Pause";
      localStorage.setItem("musicPlaying", "true");
    }
  });
});

// Store the current time of the audio in the local storage whenever it changes
window.music.on("seek", function() {
  localStorage.setItem("musicCurrentTime", window.music.seek());
});

window.music.on("pause", function() {
  localStorage.setItem("musicCurrentTime", window.music.seek());
});