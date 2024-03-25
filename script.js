// Selected all html id
const submitBtn = document.getElementById("submit-btn");
const popUp = document.getElementById("popup");
const okBtn = document.getElementById("ok-btn");
const audio = new Audio("./audio/shooting-sound-fx-159024.mp3");

window.onload;
window.onload = function () {
  mainFun();
};

// mainFun function
function mainFun() {
  submitBtn.addEventListener("click", function () {
    popUp.classList.add("open-popup");
    audio.play();
    audio.volume =.7
  });
  okBtn.addEventListener("click", function () {
    popUp.classList.remove("open-popup");
     audio.play();
      audio.volume = 0.7;
  });
}
