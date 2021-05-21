import pristine from 'pristinejs/dist/pristine';

// subscription //
const subscriptionForm = document.querySelector('#form_5');
const subscription = new pristine(subscriptionForm);

// subscriptionForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let isSubscriptionValid = subscription.validate();
//     console.log(isSubscriptionValid);
// });