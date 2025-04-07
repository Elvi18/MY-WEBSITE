// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
});

// Reveal sections on scroll
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
// Animate Skill Bars When Skills Section Comes Into View
const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress');
let skillsAnimated = false;

function animateSkillBarsOnScroll() {
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
