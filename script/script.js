const navList = document.querySelector(".header__nav-list")

navList?.addEventListener('click', (e)=>{
    if(e.target.tagName==='A'){
        document.querySelector(".header__nav-item--active")?.classList.remove('header__nav-item--active');
        e.target.closest('li').classList.add('header__nav-item--active');
    }
})


/*Slider*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


/*Footer*/
const navListFooter = document.querySelector(".footer__copyright-nav-list")

navListFooter?.addEventListener('click', (e)=>{
    if(e.target.tagName==='A'){
        document.querySelector(".footer__copyright-nav-link--active")?.classList.remove('footer__copyright-nav-link--active');
        e.target.classList.add('footer__copyright-nav-link--active');
    }
})
