import inView from 'in-view/dist/in-view.min';

inView('#player')
    .on('enter', function (elem) {
        if(checkDataSrc(elem)) {
            setTimeout(function () {
                controlVideo('playVideo');
            }, 1000);
        } else {
            controlVideo('playVideo');
        }
    })
    .on('exit', function () {
        controlVideo('pauseVideo');
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