
const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.toggle ("sticky",window.scrollY > 120);
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');




menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};


window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}








var swiper = new Swiper(".team-slider" ,{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        },
        
})