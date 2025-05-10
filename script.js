const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("show");
});       

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}


  const form = document.getElementById('contactForm');
  const confirmationMsg = document.getElementById('confirmationMsg');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent actual form submission
    confirmationMsg.style.display = 'block'; // show message at top
    form.reset(); // optional: clear form fields

    // Optional: hide message after 5 seconds
    setTimeout(() => {
      confirmationMsg.style.display = 'none';
    }, 5000);
  });


