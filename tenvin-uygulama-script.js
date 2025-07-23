function playSound(id) {
  const audio = new Audio(id + '.mp3');
  audio.play();

  // Etkinleşme efekti
  const activeCard = document.getElementById(id);
  activeCard.classList.add('active');

  setTimeout(() => {
    activeCard.classList.remove('active');
  }, 500); // Yarım saniye sonra kaldır
}

// Kartları otomatik oluştur
const container = document.getElementById('cards-container');

for (let i = 1; i <= 28; i++) {
  const card = document.createElement('div');
  card.className = 'card';
  card.id = `tenvin${i}`;
  card.onclick = () => playSound(`tenvin${i}`);

  card.innerHTML = `
    <img src="tenvin${i}.png" alt="Tenvin ${i}">
  `;

  container.appendChild(card);
}
