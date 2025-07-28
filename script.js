const menu = document.getElementById("menu"); // your button or icon
const phoneNav = document.getElementById("nav-phone"); 

menu.addEventListener("click", () => {
    console.log("hello")
  phoneNav.classList.toggle("active"); // toggle the "active" class
});
