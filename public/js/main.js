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

window.addEventListener('resize',function(){
    if (screen.width<=1200) {
        // console.log('its greater');
        let elements = document.querySelectorAll('.col-lg-4');
        for (i of elements){
            i.classList.add('col-lg-6');
            i.classList.remove('col-lg-4');
        }
    }else{
        // console.log('its smaller');
        let elements = document.querySelectorAll('.col-lg-6');
        for (i of elements){
            i.classList.add('col-lg-4');
            i.classList.remove('col-lg-6');
        }
    }

});
    
// toggles about page img animation： enter screen
(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('enter');
          element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();
navSlide();