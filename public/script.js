const edustats = document.querySelector('#edu');
const expstats = document.querySelector('#exp');
//education and experience icons
const icon_edu = document.querySelector('.edu-icon');
const icon_exp = document.querySelector('.exp-icon');
const dark_icons = [icon_edu.src , icon_exp.src];
//content toggle
const educontent = document.querySelector('#edu-content');
const expcontent = document.querySelector('#work-content');
edustats.addEventListener('click', ()=>{
    expstats.classList.remove('clicked');
    icon_exp.setAttribute('src',dark_icons[1]);
    expcontent.classList.add('d-none');
    educontent.classList.remove('d-none');
    
    icon_edu.setAttribute('src','./images/experience section/icons8-education-48 (1).png');
    edustats.classList.add('clicked');
});

expstats.addEventListener('click', ()=>{
    edustats.classList.remove('clicked');
    icon_edu.setAttribute('src',dark_icons[0]);
    expcontent.classList.remove('d-none');
    educontent.classList.add('d-none');
    
    icon_exp.setAttribute('src','./images/experience section/icons8-internship-64.png');
    expstats.classList.add('clicked');
    
});

 

//swiper

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  //text autoplay in the name animation
  const typed = new Typed('.autoplay-text', {
    strings:["Web Developer","Freelancer","Programmer"],
    typeSpeed: 100,
    backSpeed:100,
    loop:true,
  });