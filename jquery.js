const headerContainer = document.querySelector('.header_container');

let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
        headerContainer.style.transform = 'translateY(-100%)';
    } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        headerContainer.style.transform = 'translateY(0)';
    }
    lastScrollY = currentScrollY;
});

jQuery(document).ready(function(){
    $('.burgermenu').on('click',function(){
        $('.mobile-nav').slideDown("slow");
    })
})


