// VARIABLES
const video = document.querySelector(".video");
const playPause = document.querySelector(".play-button");
const controls = document.querySelectorAll(".control");
const progressBar = document.querySelector(".bar");

// PLAY / PAUSE
playPause.addEventListener("click", function () {
  if (video.paused) {
    this.classList.add("hide");
    video.play();
  } else {
    this.classList.remove("hide");
    video.pause();
  }
});

// CONTROLS
controls.forEach((button) => {
  button.addEventListener("click", function () {
    switch (this.getAttribute("data-control")) {
      case "back":
        video.currentTime -= 10;
        break;
      case "skip":
        video.currentTime += 10;
        break;
      case "reset":
        video.currentTime = 0;
        break;
    }
  });
});

// PROGRESS
video.addEventListener("timeupdate", function () {
  progressBar.style.width = 100 / (video.duration / video.currentTime) + "%";
  if (video.ended) {
    playPause.classList.remove("hide");
  }
});

progressBar.parentNode.addEventListener("click", function () {
  video.currentTime = video.duration / (this.offsetWidth / event.offsetX);
});
