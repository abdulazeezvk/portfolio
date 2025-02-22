
var menu = document.getElementById('hidden-div');
var icon = document.getElementById('mobilemenu');

icon.addEventListener('click',(event)=>{
    menu.classList.toggle('hide')
    event.stopPropagation()
})

document.addEventListener('click',(event)=>{
    if(menu.classList.contains('hide')){
        menu.classList.remove('hide')
    }
    event.stopPropagation()
})


//----------text typing animation---------------//

document.addEventListener('DOMContentLoaded', function() {
    const words = ["Software Developer", "Front-end developer", "Web Developer", "back-end developer"];
    let index = 0;
    const span = document.querySelector('.animated-text span');

    function typeWriter() {
        const word = words[index];
        const letters = word.split('');
        let i = 0;

        function type() {
            if (i < letters.length) {
                span.textContent += letters[i];
                i++;
                setTimeout(type, 100); // Adjust typing speed (milliseconds)
            } else {
                setTimeout(erase, 2000); // Wait before erasing (milliseconds)
            }
        }

        function erase() {
            if (span.textContent.length > 0) {
                span.textContent = span.textContent.slice(0, -1);
                setTimeout(erase, 50); // Adjust erasing speed (milliseconds)
            } else {
                index = (index + 1) % words.length;
                setTimeout(typeWriter, 500); // Wait before typing next word (milliseconds)
            }
        }

        type();
    }

    typeWriter(); // Start typing animation
});

const canvas = document.getElementById('spiderman-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 100;
const maxDistance = 100;

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles.forEach(particle => {
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
    });
};

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 2;
        this.color = this.randomColor();
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
    }

    randomColor() {
        const colors = ['#25201C', '#DAD6E5', '#867ED2', '#282D34', '#1C1C20']; // Updated color palette
        return colors[Math.floor(Math.random() * colors.length)];
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.draw();
    }
}

const createParticles = () => {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
};

const connectParticles = () => {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
            const distance = Math.hypot(particles[a].x - particles[b].x, particles[a].y - particles[b].y);
            if (distance < maxDistance) {
                ctx.strokeStyle = `rgba(218, 214, 229, ${1 - distance / maxDistance})`; // Light color for lines
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
};

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => particle.update());
    connectParticles();

    requestAnimationFrame(animate);
};

createParticles();
animate();

canvas.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    particles.push(new Particle(clientX, clientY));
    if (particles.length > particleCount) {
        particles.shift();
    }
});



//----- Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
        //   "<i class='fa fa-angle-left'></i>",
        //   "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
  });


// Get the button
let scrollTopBtn = document.getElementById("scrollTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// --------------------
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("show"); // Remove the show class to reset animation
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab with animation, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    setTimeout(function () {
        document.getElementById(tabName).classList.add("show");
    }, 10); // Slight delay for smooth animation
    evt.currentTarget.className += " active";
}

// Set the default open tab
document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByClassName("tablinks")[0].click();
});

// --------------------

//---- SCROLL REVEAL ANIMATION
ScrollReveal({ 
    // reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400,
    
 });
 

//target elements, and specify options to create reveal animations
 ScrollReveal().reveal('.tagline', {delay: 300, origin:'top'});
 ScrollReveal().reveal('.home_pic, .wor', { origin: 'bottom' });
 ScrollReveal().reveal('.logo, .me, .my-skills, .text-Solitude, .mp, .Contact-image', { origin: 'left' });
 ScrollReveal().reveal('.navbar, .form', { origin: 'right' });
 ScrollReveal().reveal('.icon-container i', { delay: 500, origin: 'bottom', interval: 200 });
 ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'right', interval: 200 });
 ScrollReveal().reveal('.about-section .image', {delay:500, origin:'top'})
 ScrollReveal().reveal('.skill-icon1', { delay: 500, origin: 'right', interval: 200 });

 ScrollReveal().reveal('.skill-icon1, .skill-icon3', { delay: 500, origin: 'top', distance: '50px', interval: 100 });
 ScrollReveal().reveal('.skill-icon2', { delay: 500, origin: 'top', distance: '50px', interval: 300 });
 ScrollReveal().reveal('.slider, .te-er', { delay: 500, origin: 'bottom', interval: 200 });
 ScrollReveal().reveal('.moon-Icons', {delay: 300, origin:'bottom'});
// 



$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });


// ========== Email js ============= 

