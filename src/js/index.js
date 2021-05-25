import '../sass/styles.scss';
import './animateOnScroll/index';
import './subscribeCheckboxes/index';
import './countdownTimer/index';
import './payment/switcher';
import './validation/index';
import './gift-parallax/index';
import './videoToggle/index';
import {getSubscriberData} from "./subscriberData";

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

// close modal //
const closeModalBtn = document.querySelector('.close-btn');
const modals = document.querySelectorAll('.payment-page-pop-up');
if(!!closeModalBtn) {
    closeModalBtn.addEventListener('click', function () {
        for(let i = 0; i < modals.length; i++) {
            modals[i].classList.remove('open');
        }
    });
}

// console.log(getSubscriberData('Arte', 'arte@gmail.com', 'Vegan, Gluten free', ['Pay']));