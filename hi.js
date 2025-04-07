// ========== Reveal Sections on Scroll ==========
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add('reveal');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ========== Animate Skill Bars on Scroll ==========
const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress');
let skillsAnimated = false;

function animateSkillBarsOnScroll() {
  if (!skillsSection) return;

  const triggerPoint = window.innerHeight * 0.85;
  const top = skillsSection.getBoundingClientRect().top;

  if (top < triggerPoint && !skillsAnimated) {
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-width');
      bar.style.width = targetWidth;
    });
    skillsAnimated = true;
  }
}

window.addEventListener('scroll', animateSkillBarsOnScroll);
window.addEventListener('load', animateSkillBarsOnScroll);

// ========== Slideshow with Arrows, Dots & Pause on Hover ==========
let slideIndex = 0;
let slideInterval;
const slides = document.getElementsByClassName("slide");
const dotsContainer = document.getElementById("dots-container");

if (slides.length > 0) {
  // Create dots
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
  }

  const dots = document.getElementsByClassName("dot");

  function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      dots[i].classList.remove("active");
    }
    slideIndex = index;
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 3000);
  }

  function stopSlideshow() {
    clearInterval(slideInterval);
  }

  // Add event listeners for buttons if present
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  }

  // Pause on hover
  const slideshowContainer = document.getElementById("slideshow-container");
  if (slideshowContainer) {
    slideshowContainer.addEventListener("mouseenter", stopSlideshow);
    slideshowContainer.addEventListener("mouseleave", startSlideshow);
  }

  // Init
  showSlide(slideIndex);
  startSlideshow();
}
