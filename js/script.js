// selector Navbarnav
const navbarNav = document.querySelector(".navbar-nav");
// Toggle tambah kelas active
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Selector Hamburger-menu
const hamburger = document.querySelector("#hamburger-menu");
// fungsi tutup navbar
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
