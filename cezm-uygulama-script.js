const kelimeler = [
  "قُلْ", "لَمْ", "هُمْ", "مِنْ", "قَبْلَ", "يَوْمَ", "كَيْفَ", "لَكُمْ", "كُنْتُمْ",
  "أَرْسَلَ", "أَكْبَرُ", "أَنْزَلَ", "إِسْتَكْبَرَ", "نَعْبُدُ",
  "لَمْ يَلِدْ", "أَلَسْتُ", "مَعَكُمْ", "أَنْفُسَهُمْ",
  "مَثَلُهُمْ", "رَبِحَتْ", "عَلَيْهِمْ", "إِسْتَوْقَدَ",
  "أَرَأَیْتَ", "كَیْدُهُمْ", "لَمْ تُنْذِرْ", "أَلَمْ تَرَ", "مَثَلُهُمْ",
  "قَوْلِهِمْ"
];

const container = document.getElementById("kelime-container");
const audio = document.getElementById("audio");

kelimeler.forEach(kelime => {
  const btn = document.createElement("div");
  btn.className = "kelime";
  btn.textContent = kelime; // direkt metin koyuyoruz

  btn.addEventListener("click", () => {
    const encodedKelime = encodeURIComponent(kelime);
    audio.src = `${encodedKelime}.mp3`;
    audio.play().catch(err => {
      console.error("Ses çalma hatası:", err);
      alert("Ses dosyası bulunamadı: " + kelime);
    });

    // Animasyon: kelime kutusunu kırmızı yapalım 500ms sonra geri döner
    btn.style.color = "red";
    setTimeout(() => {
      btn.style.color = "";
    }, 500);
  });

  container.appendChild(btn);
});
