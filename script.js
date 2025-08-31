// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }

    // Close mobile menu after clicking a link
    closeMobileMenu();
  });
});

// Form submission handler
document
  .getElementById("subscription-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById("subscribe-btn");
    const emailInput = document.getElementById("email-input");
    const confirmationMessage = document.getElementById("confirmation-message");

    // Disable button to prevent multiple submissions
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";

    // Wait 3 seconds and show the confirmation message
    setTimeout(function () {
      // Show confirmation message
      confirmationMessage.classList.add("active");

      // Clear the input field
      emailInput.value = "";

      // Re-enable button
      submitBtn.disabled = false;
      submitBtn.textContent = "Suscribirse";

      // Hide message after 5 seconds
      setTimeout(function () {
        confirmationMessage.classList.remove("active");
      }, 5000);
    }, 3000);
  });

// Create particles
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  if (!particlesContainer) return;

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    const colors = ["var(--primary)", "var(--secondary)", "var(--accent)"];
    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;

    particlesContainer.appendChild(particle);
  }
}

// Mobile menu functionality
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuOverlay = document.createElement("div");
mobileMenuOverlay.classList.add("mobile-menu-overlay");
document.body.appendChild(mobileMenuOverlay);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
  mobileMenuOverlay.classList.toggle("active");
  document.body.style.overflow = mobileMenu.classList.contains("active")
    ? "hidden"
    : "";
}

function closeMobileMenu() {
  mobileMenu.classList.remove("active");
  mobileMenuOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

mobileMenuBtn.addEventListener("click", toggleMobileMenu);
mobileMenuOverlay.addEventListener("click", closeMobileMenu);

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Create particle effect
  createParticles();
});
