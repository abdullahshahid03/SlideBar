const toggleBtn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle("open");
  } else {
    sidebar.classList.toggle("closed");
  }
});
