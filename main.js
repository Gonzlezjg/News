document.querySelector('.menu-btn').addEventListener ('click',()=> {
    document.querySelector('.nav-menu').classList.toggle('show');
});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay:600});
ScrollReveal().reveal('.banner-one', {delay:500});
ScrollReveal().reveal('.banner-two', {delay:500});
ScrollReveal().reveal('.footer-links', {delay:500});