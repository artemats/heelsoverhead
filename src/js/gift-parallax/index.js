const gift = document.querySelector('.gift');
const giftTop = gift.querySelector('.image-top');

if(!!gift && !!giftTop) {

    const wHeight = window.innerHeight;

    window.addEventListener('scroll', function () {

        const different = ( ( ( wHeight - 200 ) - gift.getBoundingClientRect().top ) / 2 );

        giftTop.style.transform = 'translateY(-'+ Math.max(0, Math.min(135, different)) +'px)';

    });

}