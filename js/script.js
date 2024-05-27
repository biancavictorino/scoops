document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.header-menu');
    const links = document.querySelector('.menu-link');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('show');
    })

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');
        })
    })
    
})



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const animateElements = document.querySelectorAll('.animate');
animateElements.forEach((el) => observer.observe(el));