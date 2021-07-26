// Show Menu
const navToggle = document.getElementById('nav_toggle')
const navMenu = document.getElementById('nav_menu')
const navClose = document.getElementById('nav_close')

// Show Menu

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Hide Menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav-link')

function LinkAction() {
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(link => link.addEventListener('click', LinkAction))

// Change Backgorund color
function ScrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 10) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }

}

window.addEventListener('scroll', ScrollHeader)

// Swiper discover
var swiper = new Swiper(".discover-container", {
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

// Video
const videoFile = document.getElementById('video-file')
const videoButton = document.getElementById('video-button')
const videoIcon = document.getElementById('video-icon')
      
function playPause() {
    if (videoFile.paused) {
        // play video
        videoFile.play()

        // change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else {
        // pause video
        videoFile.pause()

        // change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}

videoButton.addEventListener('click', playPause)

function finalVideo() {
    // change the icon
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended when the video ends
videoFile.addEventListener('ended', finalVideo)



// Sroll up 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')

    if (this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
    
}
window.addEventListener('scroll', scrollUp)


// Scroll Active Link
const section = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll(".nav-menu a[href*=" + sectionId +']').classList.add('active-link')
        } else {
            document.querySelectorAll(".nav-menu a[href*=" + sectionId +']').classList.remove('active-link')
        }
    });
}
window.addEventListener('scroll', scrollActive)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Scroll Reveal
const sr = ScrollReveal({
    distance: "60px",
    duration: 2800,
    reset: true
})
sr.reveal(`.home-data, .home-social-link, .home-info, .discover-container, .experience-data, .experience-overlay, .place-card, .sponsor-content, .footer-data, .footer-right`,{
    origin: 'top',
    interval: 100,
})
sr.reveal(`.about-data, .video-description, .subscribe-description `,{
    origin: 'left',
})
sr.reveal(`.about-img-overlay, .video-content, .subscribe-form`,{
    origin: 'right',
})