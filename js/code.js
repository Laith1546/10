const playbtnEl = document.querySelector(".video-overlay input");
const videoEl = document.querySelector("video");

playbtnEl.addEventListener('click', () => {
    if(!playbtnEl.checked){
        videoEl.pause();
    }
    else {
        videoEl.play();
    }
})