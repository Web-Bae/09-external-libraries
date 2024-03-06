const video = document.querySelector("#video video");
const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const progress = document.querySelector("#progress");
const timestamp = document.querySelector("#timestamp");

/**
 * Play or pause video
 * @returns {void}
 * If video is paused, play it. If video is playing, pause it.
 */
function playPause() {}

/**
 * Stop video
 * @returns {void}
 * Set video time to 0 and pause video
 */
function stopVideo() {}

/**
 * Update play button icon
 * @returns {void}
 * If video is paused, show play icon. If video is playing, show pause icon.
 */
function updatePlayButtonText() {}

/**
 * Update the progress bar
 * @returns {void}
 * Update the progress bar value to the current video time
 */
function updateProgress() {
  // Update progress bar using video time divided by duration times 100
  // Get minutes
  // Get seconds
  // Update timestamp
}

/**
 * Sets the progress bar
 * @returns {void}
 * Set the video time to the progress bar value
 *
 */
function setProgress() {}

video.addEventListener("click", playPause);
video.addEventListener("play", updatePlayButtonText);
video.addEventListener("pause", updatePlayButtonText);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", playPause);
stop.addEventListener("click", stopVideo);
progress.addEventListener("click", setProgress);
