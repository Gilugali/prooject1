const header = document.querySelector('header');

const first_skill = document.querySelector(".skill:first-child");
const sk_counter = document.querySelectorAll('.counter span');
const progress_bars = document.querySelectorAll('.skills svg circle');
 
const ml_sections = document.querySelector(".milestones");
const ml_counters = document.querySelector(".number span");

window.addEventListener("scroll", () =>{
   if(!skillsPlayed) skillsCounter();
   mlCounters();
   
});
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
sr.reveal(".showcase-image", {origin:"top", delay:700});

/*  ------------------skills progress bars animation         ------------------*/
function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
   if(window.innerHeight >= topPosition + el.offsetHeight) return true;
   return false;    

  }
  function updateCount(num, maxNum){
  let currentNum = +num.innerText;
 if(currentNum < maxNum){
    num.innerText = currentNum + 1;
    setTimeout(() =>{
        updateCount(num, maxNum);
    }, 12);
 }
  }
   let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill)) return;
    skillsCounter = true;
    
        let target = +counter.dataset.target;
        let strokeValue = 427 - 427 * (target / 100);
        progress_bars[i].style.setProperty("--target", strokeValue);
        setTimeout(() =>{
            updateCount(counter, target);
        }, 400)

    };
 
     progress_bars.forEach((p) => p.style.animation = "progress 2s ease-in-out forwards");
 

/* ---------------- services js -----------------*/

// function mlCounters (){
//     if(!hasReached(ml_sections)) return;
//     ml_counters.forEach(ctr =>{
//         let target = +ctr.dataset.target;
//         setTimeout(()=>{
//             updateCount(ctr, target)
//         }, 400)
     
//           });
    
// }


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
var home = document.querySelector('.section1');
about.addEventListener('click', function(){
  
    smoothScroll('.about-section', 1000);
});

