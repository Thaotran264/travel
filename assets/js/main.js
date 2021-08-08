// ========== Show/Close Menu ==========
const showMenu = document.getElementById('nav-toggle')
const navMenu = document.getElementById('nav-menu')
const closeMenu = document.getElementById('nav-close')

// Show menu
showMenu.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})

// Close menu
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})

const closeMenus = document.querySelectorAll('.nav__link')

closeMenus.forEach(element => {
    element.addEventListener('click', ()=> {
    navMenu.classList.remove('show-menu')

    })
});

// ========== change bgc header ==========
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header')

    if(this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header') 
})

// Swipper JS
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
  });

// ========== VIDEO ==========
const videoFile = document.getElementById('video-file'),
videoButton = document.getElementById('video-button'),
videoIcon = document.getElementById('video-icon')

videoButton.addEventListener('click', () => {
    if (videoFile.paused) {
        playVid();
    } else pauseVid()
})

function playVid() {
    videoFile.play()
    videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
}

function pauseVid() {
    videoFile.pause()
    videoIcon.classList.add('ri-play-line')
    videoIcon.classList.remove('ri-pause-line')
}
function videoEnd() {
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}

videoFile.addEventListener('ended', videoEnd)

// ========== SCROLL UP ==========
const scrollUp = document.getElementById('scroll-up')

window.addEventListener('scroll', () => {
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
})

// ========== SCROLL ACTIVE LINK ==========
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', ()=> {
    const scrollY = window.pageYOffset

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight
            const sectionTop = section.offsetTop - 50
            sectionId = section.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    
})

// ========== Change theme ==========
const themeBtn = document.getElementById('change-theme')
const darkTheme = 'dark-theme'
const darkIcon = 'ri-moon-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeBtn.classList.contains(darkIcon) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeBtn.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](darkIcon)
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    themeBtn.classList.toggle('ri-sun-line')

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ========== SCROLL REVEAL ==========
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
})

sr.reveal(`.home__data, .home__social-link, .home__info,
.discover__container,
.experience__data, .experience__overlay,
.place__card, .sponsor__content, .footer__data`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, .video__description, .subscribe__description`, {
    origin: 'left'
})

sr.reveal(`.about__img-overlay, .video__content, .subscribe__form`, {
    origin: 'right'
})

