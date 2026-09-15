const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const topBtn = document.getElementById("topBtn");
const links = document.querySelectorAll(".nav-links a:not(.nav-btn)");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

links.forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 450 ? "grid" : "none";

  const sections = document.querySelectorAll("main section[id]");
  let current = "home";

  sections.forEach(section => {
    const top = section.offsetTop - 130;
    if (window.scrollY >= top) current = section.id;
  });

  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

topBtn.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth"});
});
