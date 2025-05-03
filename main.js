/*================================= toggle icon navbar ===================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
};

/*================================= scroll section active link ===================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*================================= sticky navbar ===================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================================= remove toggle icon and navbar ===================================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*================================= scroll reveal ===================================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*================================= typed js ===================================*/

const typed = new Typed('.multiple-text', {
    strings: ['Engineer','Scientist'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/*================================= JavaScript for Modals ===================================*/
const modals = document.querySelectorAll('.modal');
const btns = document.querySelectorAll('.btn');
const closes = document.querySelectorAll('.close');

// Open modal
btns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    modals[index].style.display = 'block';
  });
});

// Close modal
closes.forEach((close, index) => {
  close.addEventListener('click', () => {
    modals[index].style.display = 'none';
  });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// JavaScript for About Me Modal
const aboutModal = document.querySelector('#about-modal');
const aboutBtn = document.querySelector('.about-content .btn');
const closeAboutModal = document.querySelector('#about-modal .close');

// Open the modal
aboutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  aboutModal.style.display = 'block';
});

// Close the modal
closeAboutModal.addEventListener('click', () => {
  aboutModal.style.display = 'none';
});

// Close the modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === aboutModal) {
    aboutModal.style.display = 'none';
  }
});

// JavaScript for Project Modal
const ppgModal = document.querySelector('#ppg-modal');
const ppgBtn = document.querySelector('.project-box .btn');
const closePpgModal = document.querySelector('#ppg-modal .close');

// Open the modal
ppgBtn.addEventListener('click', (e) => {
  e.preventDefault();
  ppgModal.style.display = 'block';
});

// Close the modal
closePpgModal.addEventListener('click', () => {
  ppgModal.style.display = 'none';
});

// Close the modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === ppgModal) {
    ppgModal.style.display = 'none';
  }
});