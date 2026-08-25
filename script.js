/* =========================================================
   SUHANGINI UMREDKAR PORTFOLIO
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("open")) {

      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");

    } else {

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

    }

  });

}


/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

document.querySelectorAll("#nav-menu a").forEach(link => {

  link.addEventListener("click", () => {

    if (!navMenu) return;

    navMenu.classList.remove("open");

    const icon = menuToggle?.querySelector("i");

    if (icon) {

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

    }

  });

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          revealObserver.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );

revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
  document.querySelectorAll("section[id]");

const navLinks =
  document.querySelectorAll("#nav-menu a");

function updateActiveNav() {

  let currentSection = "";

  const scrollPosition =
    window.scrollY + 180;

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop;

    const sectionHeight =
      section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${currentSection}`
    ) {

      link.classList.add("active");

    }

  });

}

window.addEventListener(
  "scroll",
  updateActiveNav
);

updateActiveNav();


/* =========================================================
   NAVBAR ON SCROLL
========================================================= */

const navbar =
  document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (!navbar) return;

  if (window.scrollY > 40) {

    navbar.style.boxShadow =
      "0 8px 30px rgba(72,82,74,0.08)";

  } else {

    navbar.style.boxShadow = "none";

  }

});


/* =========================================================
   PROFILE IMAGE FALLBACK
========================================================= */

const profileImage =
  document.querySelector(".profile-photo img");

if (profileImage) {

  profileImage.addEventListener("error", () => {

    console.warn(
      "Profile image could not be loaded. Make sure the file exists at assets/images/profile.jpeg"
    );

  });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================================
   BUTTON MICRO INTERACTION
========================================================= */

document.querySelectorAll(".btn").forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transition =
      "transform 0.2s ease";

  });

});


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});
