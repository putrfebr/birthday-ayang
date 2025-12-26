
(function(){
  emailjs.init("tOHivsLRu48LFBFHQ");
})();



// Nama
window.addEventListener("load", () => {
  document.querySelector(".card").classList.add("show");
});

document.getElementById("name").innerText = "Ayang ";


// Musik
const music = document.getElementById("bgMusic");
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
  } else {
    music.play();
    createConfetti();
  }
  isPlaying = !isPlaying;
}


// Countdown
function updateCountdown() {
  const birthday = new Date("December 28, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = birthday - now;
  const el = document.getElementById("countdown");

  if (distance < 0) {
    el.innerHTML = "🎉 Selamat Ulang Tahun ke-26 🤍";
    return;
  }

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  el.innerHTML = `⏳ ${d} hari ${h} jam ${m} menit ${s} detik`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Harapan
const textarea = document.getElementById("dreamInput");
const savedText = document.getElementById("savedText");



document.getElementById("saveBtn").onclick = () => {
  if (!textarea.value.trim()) return alert("Jangan dikosongin ya 🤍");
  localStorage.setItem("birthdayDream", textarea.value);
  savedText.style.display = "block";
  setTimeout(() => savedText.style.display = "none", 3000);
};
const letterText = `
Di umur mas yang ke-26 ini,
aku berharap mas selalu dikelilingi hal-hal baik,
langkahnya dimudahkan,
dan mimpinya satu per satu jadi nyata.

Terima kasih sudah bertahan sejauh ini.
Terima kasih perjuangannya.
Terima kasih cerita hebatnya yang sudah banyak sekali disharing ke Putri.
Aku bangga sama mas 🤍
Tetap jadi mas yang Putri kenal ya ...
`;

let index = 0;
const speed = 40; // makin kecil makin cepat

function typeLetter() {
  if (index < letterText.length) {
    document.getElementById("loveLetter").innerHTML +=
      letterText.charAt(index) === "\n"
        ? "<br>"
        : letterText.charAt(index);
    index++;
    setTimeout(typeLetter, speed);
  }
}

// Jalankan setelah card muncul
setTimeout(typeLetter, 1200);
function createConfetti() {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.background = `hsl(0, 0%, ${60 + Math.random() * 20}%)`;
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}
const dreamResult = document.getElementById("dreamResult");

// saat halaman dibuka
const savedDream = localStorage.getItem("birthdayDream");
if (savedDream) {
  dreamResult.innerText = savedDream;
  dreamResult.style.display = "block";
}

// saat klik simpan
document.getElementById("saveBtn").onclick = () => {
  if (!textarea.value.trim()) return alert("Jangan dikosongin ya 🤍");

  localStorage.setItem("birthdayDream", textarea.value);

  dreamResult.innerText = textarea.value;
  dreamResult.style.display = "block";

  savedText.style.display = "block";
  setTimeout(() => savedText.style.display = "none", 3000);
};
function createBackgroundParticles() {
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("div");
    p.className = "bg-particle";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = 8 + Math.random() * 10 + "s";
    p.style.opacity = Math.random();
    document.body.appendChild(p);

    setTimeout(() => p.remove(), 20000);
  }
}

// ulangi terus
setInterval(createBackgroundParticles, 4000);
createBackgroundParticles();
