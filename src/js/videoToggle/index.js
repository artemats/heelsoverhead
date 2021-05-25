import inView from 'in-view/dist/in-view.min';

inView('#player')
    .on('enter', function () {
        controlVideo('playVideo');
    })
    .on('exit', function () {
        controlVideo('pauseVideo');
    });

function controlVideo(vidcontrol) {
    const div = document.getElementById("player");
    const iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    iframe.postMessage('{"event":"command","func":"' + vidcontrol + '","args":""}', '*');
}