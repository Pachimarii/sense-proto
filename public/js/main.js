const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click', ()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ``;
            }else{
                link.style.animation = link.style.animation=`navLinkFade 0.5s ease forwards ${index/7.5+0.5}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });

    burger.addEventListener('mouseover', ()=>{
        // console.log('hi :3');
        burger.classList.add('light');
    });
    burger.addEventListener('mouseout', ()=>{
        // console.log('hi :3');
        burger.classList.remove('light');
    });

 
}

navSlide();