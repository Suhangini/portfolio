/* =========================================================
   SUHANGINI UMREDKAR PORTFOLIO
   INTERACTIONS
========================================================= */


/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", () => {

    const isOpen =
      navMenu.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

    const icon =
      menuToggle.querySelector("i");

    if (icon) {

      icon.classList.toggle(
        "fa-bars",
        !isOpen
      );

      icon.classList.toggle(
        "fa-xmark",
        isOpen
      );

    }

  });


  /* Close menu after clicking */

  navMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      const icon =
        menuToggle.querySelector("i");

      if (icon) {

        icon.classList.remove(
          "fa-xmark"
        );

        icon.classList.add(
          "fa-bars"
        );

      }

    });

  });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(

    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "show"
          );

          observer.unobserve(
            entry.target
          );

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


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
  document.querySelectorAll("section[id]");

const navLinks =
  document.querySelectorAll("#navMenu a");


function updateActiveNav() {

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 180;

    if (
      window.scrollY >= sectionTop
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


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar =
  document.querySelector(".navbar");


window.addEventListener(
  "scroll",
  () => {

    if (!navbar) return;

    if (window.scrollY > 40) {

      navbar.style.boxShadow =
        "0 10px 30px rgba(55,70,61,0.12)";

    } else {

      navbar.style.boxShadow =
        "none";

    }

  }
);


/* =========================
   PROFILE IMAGE CHECK
========================= */

const profileImage =
  document.querySelector(
    ".profile-image img"
  );


if (profileImage) {

  profileImage.addEventListener(
    "error",
    () => {

      console.warn(
        "Profile image could not be loaded. Check: assets/images/profile.jpeg"
      );

    }
  );

}


/* =========================
   CURRENT YEAR
========================= */

const yearElement =
  document.getElementById("year");


if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================
   SMOOTH ANCHOR NAVIGATION
========================= */

document.querySelectorAll(
  'a[href^="#"]'
).forEach(link => {

  link.addEventListener(
    "click",
    event => {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(
          targetId
        );

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }
  );

});
