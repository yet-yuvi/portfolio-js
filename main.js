// Typing animation
const typed = new Typed(".text", {
  strings: ["Frontend developer", "Backend developer", "Full stack developer."],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

/* Active page highlight */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

// Scroll-based active
function updateActiveOnScroll() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

// Click-based active
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Add scroll event
window.addEventListener("scroll", updateActiveOnScroll);
