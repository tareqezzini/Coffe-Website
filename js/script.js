// Swiper js
 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor :true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Nav open close
const body  = document.querySelector('body'),
      menuContent = body.querySelector('.menu-content'),
      closeBtn = body.querySelector('.btnClose'),
      openBtn = body.querySelector('.btnOpen');

if(menuContent && openBtn)
{
    openBtn.addEventListener('click' , ()=>{
        menuContent.classList.add('open');
        body.style.overflowY = "hidden";
    })
}
if(menuContent && closeBtn)
{
    closeBtn.addEventListener('click' , ()=>
    {
        menuContent.classList.remove('open');
        body.style.overflowY = "scroll";

    })
}

// Change header bg color
const header =  document.querySelector('.header');
window.addEventListener('scroll' , () =>
{
  if(scrollY>600)
  {
      header.classList.add('active');
  }else{
    header.classList.remove('active');
  }

})
// Scroll up button
const btnUp = document.querySelector('.scrollUp-btn')
window.addEventListener('scroll' , () =>
{
  if(scrollY>250)
  {
    btnUp.classList.add("scrollUpBtn-active");
  }else{
    btnUp.classList.remove("scrollUpBtn-active");
  }

})
btnUp.onclick = ()=>
{
  window.scrollTo({top:0 , behavior:"smooth"})
}

// if(scrollY > 250)
// {
//     console.log('test');
// }else
// {
//   btnUp.classList.remove("scrollUpBtn-active");
// }
  
// Nav link indicator
 
  
// Scroll Reveal Animation
const sr = ScrollReveal({
  origin:'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})
sr.reveal(`.section-title , .section-subtitle , .content-description , .newsletter .logo-content, .section-desc , .content-subtitle, .content-title , .newsletter-form , .newsletter .media-icons , .brand-image , .link-footer , .footer-location , .footer .logo-content , .links-title  `, {interval: 100} )

sr.reveal(`.about-img-content , .menu-items`, {origin:'left'});
sr.reveal(`.about-details , .time-table , .testi-content`, {origin:'right'});