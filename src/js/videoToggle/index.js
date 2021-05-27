import inView from 'in-view/dist/in-view.min';
import Plyr from "plyr";

const player = new Plyr(document.querySelector('#player'), {
    controls: []
});

inView('#player')
    .on('enter', function (elem) {
        if(checkDataSrc(elem)) {
            setTimeout(function () {
                controlVideo('playVideo');
                player.play();
            }, 1000);
        } else {
            controlVideo('playVideo');
            player.play();
        }
    })
    .on('exit', function () {
        controlVideo('pauseVideo');
        player.pause();
    });

function controlVideo(vidcontrol) {
    const div = document.getElementById("player");
    const iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    iframe.postMessage('{"event":"command","func":"' + vidcontrol + '","args":""}', '*');
}

function checkDataSrc (elem) {
    const iframe = elem.getElementsByTagName("iframe")[0];
    const dataSrc = iframe.getAttribute('data-src');
    if(!!dataSrc) {
        iframe.setAttribute('src', dataSrc);
        iframe.removeAttribute('data-src');
        return true;
    }
    return false;
}

// document.addEventListener('DOMloaded', function () {
//     const div = document.getElementById("player");
//     const iframe = div.getElementsByTagName("iframe")[0];
//     const dataSrc = iframe.getAttribute('data-src');
//     if(!!dataSrc) {
//         iframe.setAttribute('src', dataSrc);
//         iframe.removeAttribute('data-src');
//     }
// });