// switch payment methods //
const payBtns = document.querySelectorAll('.payment-tab-item');
const payForms = document.querySelectorAll('.payment-tab .form');
for(let i = 0; i < payBtns.length; i++) {
    payBtns[i].addEventListener('click', function () {
        let id = this.getAttribute('id');
        clearAllActiveClasses();
        this.classList.add('active');
        payForms[i].classList.add('active');
    });
}

function clearAllActiveClasses () {
    for(let i = 0; i < payBtns.length; i++) {
        payBtns[i].classList.remove('active');
        payForms[i].classList.remove('active');
    }
}