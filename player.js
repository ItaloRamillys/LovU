
const audio = document.getElementById("audio");
audio.volume = 1;

const playPauseBtn = document.getElementById("playPauseBtn");

let isPlaying = false;

playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = "▶";
  } else {
    audio.play();
    playPauseBtn.textContent = "⏸";
  }
  isPlaying = !isPlaying;
});