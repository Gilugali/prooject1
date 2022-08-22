const header = document.querySelector('header');

const first_skill = document.querySelector(".skill:first-child");
const sk_counter = document.querySelectorAll('.counter span');
const progress_bars = document.querySelectorAll('.skills svg circle');
 
const ml_sections = document.querySelector(".milestones");
const ml_counters = document.querySelector(".number span");

// window.addEventListener("scroll", () =>{
//    if(!skillsPlayed) skillsCounter();
//    mlCounters();
   
// });
/*  ------------------navbar sticky ------------------*/

function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
    
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);

/*  ------------------scroll reveal         ------------------*/

let sr = ScrollReveal({
    duration: 2500,
    ditance:"60px",
});
sr.reveal(".showcase-info", {delay:600});
sr.reveal("section.showcase-area    ", {origin:"top", delay:700});

/*  ------------------skills progress bars animation         ------------------*/


/* ---------------- scrolling effect-----------------*/
function smoothScroll(target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    function animations(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = easing(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animations);
   }

   function easing(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t--;
            return -c / 2 * (t *(t-2) -1) + b;
        }
        
        requestAnimationFrame(animations);
            
    }
var about = document.querySelector("#about");
var section1 = document.querySelector('.section1');
about.addEventListener('click', function(){
  
    smoothScroll('.about-section', 1000);
});

