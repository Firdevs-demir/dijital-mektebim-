function playSound(id) {
  const audio = new Audio(id + '.mp3');
  audio.play();

  // Aktiflik efekti için geçici sınıf ekleyip kaldır
  const activeCard = document.getElementById(id);
  activeCard.classList.add('active');

  setTimeout(() => {
    activeCard.classList.remove('active');
  }, 500); // 0.5 saniye sonra kaldır
}

// 1–28 arası kartları dinamik olarak oluştur
const container = document.getElementById('cards-container');

for (let i = 1; i <= 28; i++) {
  const card = document.createElement('div');
  card.className = 'card';
  card.id = `medkasr${i}`;
  card.onclick = () => playSound(`medkasr${i}`);

  card.innerHTML = `
    <img src="medkasr${i}.png" alt="Med Kasr ${i}">
  `;

  container.appendChild(card);
}
