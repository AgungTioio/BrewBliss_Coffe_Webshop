const sidebar = document.querySelector("div.navbar-nav");
document.querySelector("div.navbar-extra a#hamburger").onclick = () => {
  sidebar.classList.toggle("active");
};

const menu = document.querySelector("div.navbar-extra a#hamburger");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !sidebar.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});
