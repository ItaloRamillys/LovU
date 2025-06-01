
function startExperience() {
    const entrance = document.getElementById("entranceScreen");
    entrance.classList.add("fade-out");

    setTimeout(() => {
      entrance.style.display = "none";

      const audio = document.getElementById("audio");
      audio.volume = 0.25;
      audio.play().catch((err) => {
        console.log("Interação necessária para autoplay:", err);
      });

      const playPauseBtn = document.getElementById("playPauseBtn");
      playPauseBtn.textContent = "⏸";
      isPlaying = true;
    }, 1000); // tempo um pouquinho maior que a transição
  }