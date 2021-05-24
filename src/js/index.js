import '../sass/styles.scss';
import './animateOnScroll/index';
import './subscribeCheckboxes/index';
import './countdownTimer/index';
import './payment/switcher';
import './validation/index';
import './gift-parallax/index';

// init scroll to elements on click //
const scrollLinks = document.querySelectorAll('.scroll-to');
for(let i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener('click', function (event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        window.scrollTo({
            top: target.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    });
}

// $('.slider-init').slick({
//     arrows: true,
//     dots: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//
//     responsive: [
//         {
//             breakpoint: 1101,
//             settings: {
//                 arrows: false,
//             }
//         },
//     ]
// });

// close modal //
const closeModalBtn = document.querySelector('.close-btn');
if(!!closeModalBtn) {
    closeModalBtn.addEventListener('click', function () {
        document.querySelector('.payment-page-pop-up').classList.remove('open');
    });
}

//
// $('#form_1').validate({
//     errorPlacement: function () { },
//     rules: {
//         name: 'required',
//         card: 'required',
//         expiryDate: 'required',
//         cvv: 'required',
//
//         email: {
//             required: true,
//             email: true
//         }
//     }
// });
//
// $('#form_4').validate({
//     errorPlacement: function () { },
//     rules: {
//         password: 'required',
//         email: {
//             required: true,
//             email: true
//         }
//     }
// });
//
// $('#form_2').validate({
//     errorPlacement: function () { },
//     rules: {
//         zip: 'required',
//         card2: 'required',
//         expiryDate2: 'required',
//         cvv2: 'required',
//         email: {
//             required: true,
//             email: true
//         }
//     }
// });
//
// $('#form_3').validate({
//     errorPlacement: function () { },
//     rules: {
//         name1: 'required',
//         card1: 'required',
//         expiryDate1: 'required',
//         cvv1: 'required',
//     }
// });
//
// $('#form_5').validate({
//     errorPlacement: function () { },
//     rules: {
//         name: 'required',
//         email: {
//             required: true,
//             email: true
//         }
//     }
// });
