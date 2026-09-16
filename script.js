/* Confession Website - JavaScript */

let currentPage = 1;
const totalPages = 4;
const audio = document.getElementById('bg-music');
let hasPlayedAudio = false;

// Set waktu mulai audio ke detik 48 (bagian chorus/emosional)
const EMOTIONAL_START_TIME = 48;

function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const activePage = document.getElementById(`page-${page}`);
  activePage.classList.add('active');

  document.getElementById('page-num').innerText = `${page} / ${totalPages}`;

  // Memutar lagu secara otomatis ketika masuk ke Halaman 3 (bagian emosional)
  if (page === 3 && !hasPlayedAudio) {
    playEmotionalMusic();
  }

  // Sembunyikan tombol 'Lanjut' pada halaman terakhir
  if (page === totalPages) {
    document.getElementById('next-btn').style.display = 'none';
  } else {
    document.getElementById('next-btn').style.display = 'inline-flex';
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function playEmotionalMusic() {
  audio.currentTime = EMOTIONAL_START_TIME;
  audio.play().then(() => {
    hasPlayedAudio = true;
    document.getElementById('audio-status').innerText = 'Shape of My Heart (Playing)';
  }).catch(error => {
    // Jika browser memblokir autoplay, audio siap diputar lewat klik pengguna
    console.log("Autoplay diblokir browser, pengguna bisa menekan tombol musik di kanan bawah.");
    document.getElementById('audio-status').innerText = 'Klik untuk putar musik 🎵';
  });
}

function toggleAudio() {
  if (audio.paused) {
    if (audio.currentTime < EMOTIONAL_START_TIME) {
      audio.currentTime = EMOTIONAL_START_TIME;
    }
    audio.play();
    document.getElementById('audio-status').innerText = 'Shape of My Heart (Playing)';
    hasPlayedAudio = true;
  } else {
    audio.pause();
    document.getElementById('audio-status').innerText = 'Musik Di-pause';
  }
}

function selectOption(option) {
  document.getElementById('interactive-section').style.display = 'none';
  if (option === 1) {
    document.getElementById('response-1').style.display = 'block';
  } else if (option === 2) {
    document.getElementById('response-2').style.display = 'block';
  }
}
