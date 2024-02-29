// $(document).ready(function(){
//     $('.menu').click(function () {
//         $('body').toggleClass('active');
//         });
//     });

function classAddOne(selector, active) {
    document.querySelector(selector).classList.toggle(active);
}

function modalShow() {
    const modalShadow = document.querySelector('.modal-wrapper'),
        modalWindow = modalShadow.querySelector('.modal'),
        exit = modalWindow.querySelector('.modal__exit');

    modalShadow.classList.add('modal-wrapper--active');
    modalWindow.classList.add('modal--active');
    document.body.classList.add('shadow');

    window.addEventListener('click', (event) => {
        if (event.target.closest('.modal__exit') || event.target.classList.contains('modal-wrapper') || event.target.classList.contains('shadow')) {
            modalShadow.classList.remove('modal-wrapper--active');
            modalWindow.classList.remove('modal--active');
            document.body.classList.remove('shadow');
        }
    });
    
}

document.addEventListener('DOMContentLoaded', function () {
    modalShow();
})


