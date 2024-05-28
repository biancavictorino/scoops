document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.header-menu');
    const links = document.querySelectorAll('.menu-link');
    const body = document.body

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('show');
        body.classList.toggle('no-scroll');
    })

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');
            body.classList.remove('no-scroll');
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