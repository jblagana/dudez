const jsConfetti = new JSConfetti();

jsConfetti.addConfetti()

setInterval(function() {
    jsConfetti.addConfetti()
},7000);


const audio = new Audio('files/jap.mp3');
audio.loop = true;
const playButton = document.getElementById('play-button');
let isPlaying = false;

playButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playButton.innerText = 'Play';
  } else {
    audio.play();
    isPlaying = true;
    playButton.innerText = 'Pause';
  }
});