console.log("welcome to the console :)");

// Initialize ScrollReveal with better configuration
const sr = ScrollReveal({
  distance: '30px',
  duration: 800,
  delay: 200,
  reset: false,
  mobile: true,
  useDelay: 'always',
  viewFactor: 0.1
});

// Reveal animations for different sections
sr.reveal('.card1', { 
  origin: 'top',
  interval: 100 
});

sr.reveal('.my_project_card', { 
  origin: 'bottom',
  interval: 100 
});

sr.reveal('.heading1', { 
  origin: 'top',
  duration: 600
});

sr.reveal('.About', { 
  origin: 'left',
  duration: 600
});

sr.reveal('.email', { 
  origin: 'top',
  duration: 600
});

sr.reveal('.emailid', { 
  origin: 'bottom',
  duration: 600
});

// Stepper animations with scroll reveal
sr.reveal('.stepper-item', {
  origin: 'left',
  interval: 150,
  distance: '40px',
  duration: 600
});

sr.reveal('.stepper-marker', {
  origin: 'center',
  scale: 0.9,
  interval: 200,
  duration: 500
});

sr.reveal('.stepper-content', {
  origin: 'right',
  interval: 250,
  distance: '30px',
  duration: 600
});

// Mobile optimizations
if (window.innerWidth <= 768) {
  // Disable complex animations on mobile for better performance
  sr.reveal('.stepper-marker', {
    origin: 'center',
    scale: 1,
    interval: 100,
    duration: 400,
    distance: '20px'
  });
  
  sr.reveal('.stepper-content', {
    origin: 'bottom',
    interval: 150,
    distance: '20px',
    duration: 400
  });
}

const typed = new Typed('.main_header2',{
    stringsElement:'#typed-string',
    typeSpeed:100,
    loop:true,
    startDelay:700,
    backDelay:1000,
    showCursor:false,
    backSpeed:20,
}) 
