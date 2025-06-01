
window.onload = function () {
    const heartsContainer = document.getElementById("hearts-container");

    let heartInterval;
    let heartCount = 0;
    const maxHearts = 25; // Defina quantos corações vão cair antes de parar

    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 3 + 3 + "s";
      heart.style.opacity = Math.random() + 0.3;
      heartsContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 6000); // Remove o coração após ele cair

      heartCount++;
      if (heartCount >= maxHearts) {
        clearInterval(heartInterval); // Para de criar corações quando atingir o limite
      }
    }

    // Inicia o intervalo para criar corações a cada 300ms
    heartInterval = setInterval(createHeart, 300);
  };