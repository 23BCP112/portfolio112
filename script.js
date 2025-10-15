/*=============== MENU SHOW/HIDDEN ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/* Show menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Hide menu */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* Remove menu on mobile link click */
const navLinks = document.querySelectorAll('.nav__link');
function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));


/*=============== CHANGE HEADER BACKGROUND ON SCROLL ===============*/
function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


/*=============== ACTIVE LINK SCROLL HIGHLIGHT ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // Adjust for header height
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);


/*=============== SHOW SCROLL UP BUTTON ===============*/
function scrollUp() {
    const scrollUpBtn = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUpBtn.classList.add('show-scroll');
    else scrollUpBtn.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);


/*=============== FADE-IN ANIMATION FOR SECTIONS ===============*/
const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    sectionObserver.observe(section);
});


/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // This simulates sending an email.
    // In a real application, you would use a service like EmailJS or a backend server.
    
    // Show "Sending..." message
    contactMessage.textContent = 'Sending...';
    contactMessage.style.color = 'var(--text-color)';

    setTimeout(() => {
        // Show success message
        contactMessage.textContent = 'Message sent successfully! ✅';
        contactMessage.style.color = 'green';
        
        // Clear message and form after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);
        contactForm.reset();

    }, 1500); // Simulate network delay
};

contactForm.addEventListener('submit', sendEmail);