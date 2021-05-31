import inView from 'in-view/dist/in-view.min';
import Plyr from "plyr";

const player = new Plyr(document.querySelector('#player'), {
    controls: ['play-large']
});

// const video = document.querySelector('#player');

inView('#player')
    .on('enter', function () {
        // controlVideo('playVideo');
        player.play();
    })
    .on('exit', function () {
        // controlVideo('pauseVideo');
        player.pause();
    });

// function controlVideo(vidcontrol) {
//     const div = document.getElementById("player");
//     const iframe = div.getElementsByTagName("iframe")[0].contentWindow;
//     iframe.postMessage('{"event":"command","func":"' + vidcontrol + '","args":""}', '*');
// }