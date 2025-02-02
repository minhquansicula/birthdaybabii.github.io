// Music Controls
const music = document.getElementById('background-music');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');

// Play Music
playBtn.addEventListener('click', () => {
  music.play();
});

// Pause Music
pauseBtn.addEventListener('click', () => {
  music.pause();
});
