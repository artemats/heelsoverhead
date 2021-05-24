const gift = document.querySelector('.gift');

if(!!gift) {

    const giftTop = gift.querySelector('.image-top');
    const wHeight = window.innerHeight;

    window.addEventListener('scroll', function () {

        const different = ( ( ( wHeight - 200 ) - gift.getBoundingClientRect().top ) / 2 );

        giftTop.style.transform = 'translateY(-'+ Math.max(0, Math.min(135, different)) +'px)';

    });

}