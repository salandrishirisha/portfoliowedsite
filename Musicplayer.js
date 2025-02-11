// Music Player functionality
let isPlaying = false;
const audioPlayer = document.getElementById('audio-player');
const musicContainer = document.querySelector('.music-container');

function toggleMusic() {
    if (isPlaying) {
        audioPlayer.pause();
        musicContainer.classList.remove('playing');
    } else {
        audioPlayer.play();
        musicContainer.classList.add('playing');
    }
    isPlaying = !isPlaying;
}

// Optional: Pause music when user leaves the page
document.addEventListener('visibilitychange', () => {
    if (document.hidden && isPlaying) {
        toggleMusic();
    }
});