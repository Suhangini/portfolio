// ===============================
// Smooth scrolling
// ===============================

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

    // Close mobile menu after clicking a link
    const navMenu = document.getElementById("nav-menu");

    if (navMenu) {
      navMenu.classList.remove("active");
    }

  });

});


// ===============================
// Mobile navigation
// ===============================

const menuToggle =
  document.querySelector(".menu-toggle");

const navMenu =
  document.getElementById("nav-menu");


if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

  });

}
