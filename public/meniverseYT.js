document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("show-video");

    setTimeout(function() {
        document.body.classList.remove("show-video");
    }, 2000);
});

document.body.addEventListener("click", function(e) {
    if (e.target.classList.contains("video-background")) {
        var video = document.querySelector(".video-background iframe");
        if (video) {
            video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
    }
});

const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    const iframe = document.getElementById('youtube-iframe');
    const player = new YT.Player(iframe, {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    function onPlayerReady(event) {
        event.target.playVideo();
    }

    function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.ENDED) {
            event.target.playVideo();
        }
    }
}
