/** 
* * Nav Menu
*/
const navBarEl = document.getElementById("navbar__list"); // <unordered list> element located in <nav> element located in <header> element
const getSections = document.querySelectorAll("section");  // <section> element in html file

/**
 * ! Helper Functions
 */

// Create Nav Menu Links
const navMenuLinks = (listItem) => {
  return `<a class="menu__link" href="#${listItem.id}">${listItem.dataset.nav}</a>`;
};

// Viewport Parameters
const viewPort = (section) => {
  const forBoundingClient = section.getBoundingClientRect();
  return (
    forBoundingClient.top >= -200 && forBoundingClient.bottom <= (window.innerHeight || document.elementFromPoint.clientHeight) + 200
  );
};

/**
 * ! Main Functions
 */

// Create Nav Bar
const navBar = () => {
  const navMenu = Array.from(getSections).map(navMenuLinks);
  navBarEl.innerHTML = navMenu.join("");
  };
  navBar();

// Link Scroll Feature
const allowScroll = (event) => {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: "smooth" });
};

// Active Link and Section 
const navLinks = document.querySelectorAll(".menu__link");
navLinks.forEach((link) => {
  link.addEventListener('click', allowScroll);
});

const setActiveClass = () => {
  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (viewPort(targetSection)) {
      link.classList.add("active");
      targetSection.classList.add("active__main");
    } else {
      link.classList.remove("active");
      targetSection.classList.remove("active__main");
    }
  });
};

window.addEventListener("scroll", setActiveClass);

