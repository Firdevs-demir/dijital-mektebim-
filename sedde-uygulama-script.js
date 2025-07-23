document.querySelectorAll(".word-box").forEach(button => {
  button.addEventListener("click", () => {
    const word = button.getAttribute("data-audio");
    const audio = new Audio(`${word}.mp3`);

    // Renk geçişi (animasyon) başlat
    button.classList.add("active");

    // Ses çalma
    audio.play();

    // Animasyonu bitince sınıfı kaldır (CSS animasyonu 1 saniye sürecek)
    setTimeout(() => {
      button.classList.remove("active");
    }, 1000);
  });
});
