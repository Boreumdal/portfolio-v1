let projectButtons = document.querySelectorAll('div.project-btn-container button')

projectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        let move = (btn.dataset.btnPosition == 'right') ? 1 : -1
        
let     imgs = document.querySelectorAll('ul.project-img li')

        let currentIndex = document.querySelector('[data-screen]')
        let nextIndex = [...imgs].indexOf(currentIndex) + move
        if (nextIndex < 0) nextIndex = imgs.length - 1
        if (nextIndex >= imgs.length) nextIndex = 0

        imgs[nextIndex].dataset.screen = 'true'
        delete currentIndex.dataset.screen

    })
})

// interested form
document.querySelector('button#interest-btn').addEventListener('click', () => {
    document.querySelector('div.interested-form').style.opacity = '1'
})

// scroll
$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
     
          window.location.hash = hash;
        });
      }
    });
  });










