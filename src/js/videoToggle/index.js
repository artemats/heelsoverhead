import inView from 'in-view/dist/in-view.min';
import Plyr from "plyr";

const player = new Plyr(document.querySelector('#player'), {
    controls: ['play-large']
});

const btnPlayPause = document.querySelector('.plyr__control');

inView('#player')
    .on('enter', function () {
        // controlVideo('playVideo');
        if(!player.play()) {
            btnPlayPause.click();
        } else {
            player.play();
        }
    })
    .on('exit', function () {
        // controlVideo('pauseVideo');
        player.pause();
    });

function controlVideo(vidcontrol) {
    const div = document.getElementById("player");
    const iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    iframe.postMessage('{"event":"command","func":"' + vidcontrol + '","args":""}', '*');
}

// function checkDataSrc (elem) {
//     const iframe = elem.getElementsByTagName("iframe")[0];
//     const dataSrc = iframe.getAttribute('data-src');
//     if(!!dataSrc) {
//         iframe.setAttribute('src', dataSrc);
//         iframe.removeAttribute('data-src');
//         return true;
//     }
//     return false;
// }