const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
// remove menu mobile
const navLink = document.querySelectorAll('.na  v_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
// popular
var swiper = new Swiper(".popular_container", {

   loop: true,
   spaceBetween: 24,
   slidesPerview: 'auto',
   grabCursor: true,
   
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  breakpoints: {
   
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});
// mix up filter
var mixer = mixitup('.featured_content', {
    selectors: {
        target: '.featured_card'
    },
    animation: {
        duration: 300
    }
});
// link active feature
const linkFeatured = document.querySelectorAll('.featured_item')

function activeFeatured(){
    linkFeatured.forEach(l=> l.classList.remove('active-featured'))
this.classList.add('active-featured')

}
linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

// scrollbar
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// scroll active link

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
// scroll reveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,

})
sr.reveal(`.home_title, .popular_container, .features_img,featured_filters`,)
sr.reveal(`.home_subtitle`,{delay:500})
sr.reveal(`.home_elec`,{delay:600})
sr.reveal(`.home_img`,{delay:800})
sr.reveal(`.home_cardata`,{delay:900 , interval: 100, origin: 'bottom' })
sr.reveal(`.home_button`,{delay:1000 , origin: 'bottom' })
sr.reveal(`.about_group, .offer_data`,{ origin: 'left' })
sr.reveal(`.about_data , .offer_img`,{ origin: 'right' })
sr.reveal(`.features_map`,{  delay: 600, origin: 'bottom' })
sr.reveal(`.features_card`,{  interval:300 })
sr.reveal(`.featured_card, .logos_content, .footer_content`,{  interval:100 })