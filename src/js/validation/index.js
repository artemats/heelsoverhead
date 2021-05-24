import pristine from 'pristinejs/dist/pristine';

// subscription //
const subscriptionForm = document.querySelector('#form_5');
let subscription;
if(!!subscriptionForm) {
    subscription = new pristine(subscriptionForm);
}

// subscriptionForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let isSubscriptionValid = subscription.validate();
//     console.log(isSubscriptionValid);
// });

// coupon //
const couponForm = document.querySelector('#coupon-form');
let coupon;
if(!!couponForm) {
    coupon = new pristine(couponForm);
}

// couponForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let isCouponValid = coupon.validate();
//     console.log(isCouponValid);
// });