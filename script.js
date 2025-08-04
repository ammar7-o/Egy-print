const menu = document.getElementById("menu"); // button
const phoneNav = document.getElementById("nav-phone"); // nav menu

// Toggle menu on click
menu.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent triggering document click
  phoneNav.classList.toggle("active");
});

// Close the menu when clicking anywhere outside
document.addEventListener("click", (e) => {
  if (!phoneNav.contains(e.target) && !menu.contains(e.target)) {
    phoneNav.classList.remove("active");
  }
});
