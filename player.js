
const audio = document.getElementById("audio");
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